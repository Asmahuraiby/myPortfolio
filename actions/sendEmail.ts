"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("senderName") as string;
  const email = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  // 1. Configure the transporter (Exactly like your Laravel config)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for 587
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD, // Use an App Password!
    },
  });

  try {
    // 2. Send the email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.CONTACT_MAIL,
      subject: `Portfolio Contact ,New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    return { success: true };
  } catch (error) {
    return { error: "Failed to send email" };
  }
}