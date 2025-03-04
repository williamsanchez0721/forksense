'use server';
import nodemailer from 'nodemailer';

// Valores de configuración desde variables de entorno con valores por defecto
const MAIL_HOST = process.env.MAIL_HOST || 'email-smtp.us-east-1.amazonaws.com';
const MAIL_PORT = parseInt(process.env.MAIL_PORT || '465');
const MAIL_USERNAME = process.env.MAIL_USERNAME || '';
const MAIL_PASSWORD = process.env.MAIL_PASSWORD || '';
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'diego.cotrian@gmail.com';
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'diego.cotrian@gmail.com';

// Server Action para enviar email con Nodemailer usando Amazon SES
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
      console.error('Email credentials not found in environment variables');
      return { 
        success: false, 
        error: 'Server configuration error: missing credentials' 
      };
    }
    
    // Configurar transporter para Amazon SES
    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: MAIL_PORT,
      secure: true, // true para puerto 465, false para otros puertos
      auth: {
        user: MAIL_USERNAME,
        pass: MAIL_PASSWORD,
      },
      debug: process.env.NODE_ENV !== 'production',
    });
    
    const message = `New registration in ForkU Waitlist: ${email}`;
    
    // Enviar email directamente
    const mailOptions = {
      from: SENDER_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: 'New registration in ForkU Waitlist',
      text: message,
      html: `<div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #FF1493;">¡Nueva inscripción en la lista de espera!</h2>
        <p>Se ha registrado un nuevo correo electrónico:</p>
        <p style="background-color: #f8f8f8; padding: 10px; border-left: 4px solid #39FF14;"><strong>${email}</strong></p>
        <p>Fecha y hora: ${new Date().toLocaleString()}</p>
        <hr style="border: 1px solid #eee;">
        <p style="font-size: 12px; color: #666;">Este es un mensaje automático del sistema ForkU.</p>
      </div>`,
    };

    console.log('Intentando enviar email a través de SES...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado con éxito:', info.messageId);

    return { 
      success: true,
      message: 'Email sent successfully'
    };
  } catch (error: unknown) {
    const emailError = error as Error;
    console.error('Error al enviar email:', emailError.message);
    
    // Manejar errores específicos
    if (emailError.message && emailError.message.includes('Invalid login')) {
      return {
        success: false,
        error: 'Error de autenticación con AWS SES. Por favor verifica las credenciales.'
      };
    }
    
    if (emailError.message && emailError.message.includes('Greeting never received')) {
      return {
        success: false,
        error: 'No se pudo conectar al servidor SMTP. Verifica la configuración del host y puerto.'
      };
    }
    
    return { 
      success: false, 
      error: 'Error al enviar el email: ' + emailError.message
    };
  }
} 