import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../constants'

export const sendEmail = async formRef => {
  try {
    if (!EMAILJS_CONFIG.userId) {
      throw new Error('EmailJS user ID not configured')
    }

    const result = await emailjs.sendForm(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      formRef.current,
      EMAILJS_CONFIG.userId
    )

    return { success: true, result }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error }
  }
}
