import type { Handler } from "@netlify/functions"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    }
  }

  try {
    // Parse the request body
    const { name, email } = JSON.parse(event.body || "{}")

    // Validate inputs
    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Name and email are required" }),
      }
    }

    if (!isValidEmail(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid email address" }),
      }
    }

    // Send email to admin
    await resend.emails.send({
      from: "EcoSearch Waitlist <onboarding@resend.dev>",
      to: "hriday.career@gmail.com",
      subject: "New Waitlist Signup",
      html: `
        <h1>New Waitlist Signup</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>This user has joined the EcoSearch waitlist.</p>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: "EcoSearch <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to the EcoSearch Waitlist!",
      html: `
        <h1>Welcome to the EcoSearch Waitlist!</h1>
        <p>Hello ${name},</p>
        <p>Thank you for joining the EcoSearch waitlist! We're excited to have you on board.</p>
        <p>EcoSearch is the world's first Green AI Search Engine, combining cutting-edge AI technology with a commitment to sustainability.</p>
        <p>We'll keep you updated on our progress and let you know when you can start using EcoSearch.</p>
        <p>Best regards,<br>The EcoSearch Team</p>
      `,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Successfully joined waitlist" }),
    }
  } catch (error) {
    console.error("Error processing waitlist submission:", error)

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    }
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export { handler }

