import emailjs from '@emailjs/browser';

export const sendEmail = async (templateParams: any) => {
  try {
    const response = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_PUBLIC_KEY'
    );
    return response;
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
};