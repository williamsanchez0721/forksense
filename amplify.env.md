# Configuración de Variables de Entorno para AWS Amplify

Para que el envío de correos funcione correctamente en AWS Amplify, debes configurar las siguientes variables de entorno directamente en la consola de Amplify.

## Variables Requeridas

| Variable | Descripción | Valor Ejemplo |
|----------|-------------|---------------|
| MAIL_HOST | Host del servidor SMTP | email-smtp.us-east-1.amazonaws.com |
| MAIL_PORT | Puerto del servidor SMTP | 465 |
| MAIL_USERNAME | Usuario/AccessKey para AWS SES | AKIA4UFXMUQAFDW4UF35 |
| MAIL_PASSWORD | Contraseña/SecretKey para AWS SES | BEY8CJD5U/vL2TTHjm+h+soOaUhuSCvwDPFQ7zqAwwUF |
| SENDER_EMAIL | Correo del remitente | diego.cotrian@gmail.com |
| RECIPIENT_EMAIL | Correo del destinatario | diego.cotrian@gmail.com |
| NODE_ENV | Entorno de ejecución | production |

## Pasos para Configurar en Amplify Console

1. Ve a la consola de AWS Amplify
2. Selecciona tu aplicación
3. Haz clic en "Variables de entorno" en el menú de la izquierda
4. Haz clic en "Administrar variables"
5. Agrega cada una de las variables listadas arriba
6. Haz clic en "Guardar"
7. Vuelve a implementar la aplicación

## Notas Importantes

- Asegúrate de que el correo remitente está verificado en AWS SES
- Si tu cuenta de SES está en modo sandbox, el destinatario también debe estar verificado
- Los caracteres especiales en MAIL_PASSWORD deben escaparse correctamente

## Cómo Verificar

Para verificar si las variables de entorno están configuradas correctamente:

1. Ve a "Logs" en la consola de Amplify
2. Busca líneas que comiencen con `[ENV]` para ver si tus variables están siendo detectadas
3. Busca líneas que comiencen con `[EMAIL]` para diagnóstico del envío de correos

## Solución de Problemas

Si sigues teniendo problemas:

1. Verifica que las credenciales de SES tengan los permisos correctos
2. Comprueba que el puerto 465 no esté bloqueado por ningún firewall
3. Intenta usar el puerto 587 como alternativa (actualiza MAIL_PORT)
4. Revisa los logs completos en CloudWatch 