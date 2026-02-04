import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { type, name, email, phone, company, message, reason } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    const contactEmail = process.env.CONTACT_EMAIL || 'info@pm-llc.net'
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@pm-llc.net'

    let subject: string
    let htmlContent: string

    if (type === 'quote') {
      subject = `New Quote Request from ${name}`
      htmlContent = `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message?.replace(/\n/g, '<br>') || 'No message provided'}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This message was sent from the PM-LLC website quote request form.</p>
      `
    } else {
      subject = `New Contact Form Submission from ${name}`
      htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Preferred Contact Method:</strong> ${reason || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message?.replace(/\n/g, '<br>') || 'No message provided'}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This message was sent from the PM-LLC website contact form.</p>
      `
    }

    // Send notification email to the company
    const { error: notificationError } = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      subject: subject,
      html: htmlContent,
      replyTo: email,
    })

    if (notificationError) {
      console.error('Failed to send notification email:', notificationError)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Send confirmation email to the user
    const confirmationHtml = `
      <h2>Thank you for contacting Plastics Machinery, LLC</h2>
      <p>Dear ${name},</p>
      <p>We have received your ${type === 'quote' ? 'quote request' : 'message'} and will get back to you as soon as possible.</p>
      <p>In the meantime, feel free to call us at <strong>(615) 771-0014</strong> if you need immediate assistance.</p>
      <br>
      <p>Best regards,</p>
      <p><strong>Plastics Machinery, LLC</strong></p>
      <p>P.O. Box 2387<br>Brentwood, TN 37024</p>
      <p>Phone: (615) 771-0014<br>Email: info@pm-llc.net</p>
    `

    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Thank you for contacting Plastics Machinery, LLC',
      html: confirmationHtml,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
