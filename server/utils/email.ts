import nodemailer from 'nodemailer'
import { config } from '~/server/config'

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: config.smtp.secure,
  auth: {
    user: config.smtp.user,
    pass: config.smtp.password
  }
})

interface SendEmailOptions {
  to: string
  subject: string
  html: string
}

export const sendEmail = async ({ to, subject, html }: SendEmailOptions) => {
  try {
    const info = await transporter.sendMail({
      from: config.smtp.from,
      to,
      subject,
      html
    })

    return info
  } catch (error: any) {
    console.error('Error sending email:', error)
    throw new Error('Failed to send email')
  }
}

export const sendPasswordResetEmail = async (email: string, resetToken: string) => {
  const resetUrl = `${config.appUrl}/auth/reset-password?token=${resetToken}`
  
  const html = `
    <h1>Password Reset Request</h1>
    <p>You requested to reset your password. Click the link below to set a new password:</p>
    <p><a href="${resetUrl}">Reset Password</a></p>
    <p>If you didn't request this, you can safely ignore this email.</p>
    <p>This link will expire in 1 hour.</p>
  `

  await sendEmail({
    to: email,
    subject: 'Password Reset Request',
    html
  })
}

export const sendWelcomeEmail = async (email: string, firstName: string) => {
  const html = `
    <h1>Welcome to Shopynuxt!</h1>
    <p>Hi ${firstName},</p>
    <p>Thank you for creating an account with us. We're excited to have you on board!</p>
    <p>You can now start shopping and enjoy all the features of our platform.</p>
    <p>If you have any questions, feel free to contact our support team.</p>
  `

  await sendEmail({
    to: email,
    subject: 'Welcome to Shopynuxt',
    html
  })
} 