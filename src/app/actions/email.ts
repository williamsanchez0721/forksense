'use server'

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import nodemailer from 'nodemailer';

// Valores de configuración desde variables de entorno
const MAIL_USERNAME = process.env.MAIL_USERNAME || '';
const MAIL_PASSWORD = process.env.MAIL_PASSWORD || '';
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'diego.cotrian@gmail.com';
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'diego.cotrian@gmail.com';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// Server Action para enviar email con AWS SES
export async function sendWaitlistEmail(formData: { email: string }) {
  try {
    const { email } = formData;

    if (!email) {
      return { 
        success: false, 
        error: 'Email is required' 
      };
    }

    // Verificar credenciales
    if (!MAIL_USERNAME || !MAIL_PASSWORD) {
      console.error('AWS credentials not found in environment variables');
      return { 
        success: false, 
        error: 'Server configuration error: missing credentials' 
      };
    }

    // En producción, usar directamente Nodemailer que sabemos que funciona
    if (IS_PRODUCTION) {
      return await sendEmailWithNodemailer(email);
    }
    
    // En desarrollo, intentar primero con SES y luego con Nodemailer como fallback
    console.log('Configurando SES para envío de email...');

    try {
      // Configuración de AWS SES
      const client = new SESClient({
        region: "us-east-1",
        credentials: {
          accessKeyId: MAIL_USERNAME.trim(),
          secretAccessKey: MAIL_PASSWORD.trim()
        }
      });

      // Configuración del email
      const params = {
        Source: SENDER_EMAIL,
        Destination: {
          ToAddresses: [RECIPIENT_EMAIL]
        },
        Message: {
          Subject: {
            Data: 'Nuevo registro en ForkU Waitlist'
          },
          Body: {
            Text: {
              Data: `Nuevo registro en la lista de espera: ${email}`
            }
          }
        }
      };

      const command = new SendEmailCommand(params);
      
      const response = await client.send(command);
      console.log('Email enviado con éxito (SES):', response);
      
      return { 
        success: true,
        message: 'Email sent successfully via SES'
      };
    } catch (sesError: unknown) {
      const error = sesError as Error & { Code?: string; Type?: string };
      console.error('Error específico de SES:', error.message);
      
      // Si hay error con SES, usar Nodemailer como fallback
      console.log('Intentando con Nodemailer como alternativa...');
      return await sendEmailWithNodemailer(email);
    }
  } catch (generalError: unknown) {
    const error = generalError instanceof Error ? generalError : new Error(String(generalError));
    console.error('Error general:', error.message);
    return { 
      success: false, 
      error: 'Error del servidor: ' + error.message
    };
  }
}

// Función separada para enviar emails con Nodemailer
async function sendEmailWithNodemailer(userEmail: string) {
  try {
    // Configurar nodemailer con AWS SES
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || 'email-smtp.us-east-1.amazonaws.com',
      port: parseInt(process.env.MAIL_PORT || '465'),
      secure: true, // true para puerto 465
      auth: {
        user: MAIL_USERNAME,
        pass: MAIL_PASSWORD
      }
    });

    // Enviar email con Nodemailer
    const info = await transporter.sendMail({
      from: SENDER_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: 'Nuevo registro en ForkU Waitlist',
      text: `Nuevo registro en la lista de espera: ${userEmail}`,
      replyTo: userEmail
    });

    console.log('Email enviado con éxito (Nodemailer):', info.messageId);
    return { 
      success: true,
      message: 'Email sent successfully via Nodemailer'
    };
  } catch (error: unknown) {
    const mailError = error as Error;
    console.error('Error con Nodemailer:', mailError.message);
    
    if (mailError.message && mailError.message.includes('not verified')) {
      return {
        success: false,
        error: 'El email no está verificado en AWS SES. Por favor verifica las direcciones de correo en la consola de AWS SES.'
      };
    }
    
    return {
      success: false,
      error: 'Error al enviar el email: ' + mailError.message
    };
  }
} 