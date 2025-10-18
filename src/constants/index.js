export const SOCIAL_LINKS = {
  linkedin: process.env.REACT_APP_LINKEDIN_URL || '',
  github: process.env.REACT_APP_GITHUB_URL || '',
  twitter: process.env.REACT_APP_TWITTER_URL || '',
  codepen: process.env.REACT_APP_CODEPEN_URL || '',
  email: process.env.REACT_APP_EMAIL || '',
  phone: process.env.REACT_APP_PHONE || '',
}

export const EMAILJS_CONFIG = {
  serviceId: 'gmail-sf',
  templateId: 'template_webpage',
  userId: process.env.REACT_APP_EMAILJS_USER_ID || '',
}
