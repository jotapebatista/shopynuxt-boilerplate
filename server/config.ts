export const config = {
  appUrl: process.env.APP_URL || 'http://localhost:3000',
  jwtSecret: process.env.JWT_SECRET || 'shopynuxt-secure-jwt-secret-key-2024',
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER || '',
    password: process.env.SMTP_PASSWORD || '',
    from: process.env.SMTP_FROM || 'noreply@shopynuxt.com'
  }
} 