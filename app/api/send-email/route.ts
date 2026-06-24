import { NextRequest, NextResponse } from 'next/server'

interface EmailRequest {
  type: 'lead_notification' | 'lead_confirmation'
  lead?: {
    name: string
    email: string
    phone: string
    service: string
    propertySize: string
    frequency: string
    location: string
    notes: string
    submittedAt: string
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: EmailRequest = await request.json()

    if (body.type === 'lead_notification' && body.lead) {
      // Send admin notification
      console.log('[Email] Sending lead notification to admin:', {
        lead: body.lead,
        timestamp: new Date().toISOString(),
      })

      // In production, integrate with Resend, SendGrid, AWS SES, etc.
      // Example with Resend:
      // const response = await fetch('https://api.resend.com/emails', {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     from: 'noreply@emanuelcleaning.com',
      //     to: 'admin@emanuelcleaning.com',
      //     subject: `New Lead: ${body.lead.name}`,
      //     html: `
      //       <h2>New Lead Received</h2>
      //       <p><strong>Name:</strong> ${body.lead.name}</p>
      //       <p><strong>Email:</strong> ${body.lead.email}</p>
      //       <p><strong>Phone:</strong> ${body.lead.phone}</p>
      //       <p><strong>Service:</strong> ${body.lead.service}</p>
      //       <p><strong>Property Size:</strong> ${body.lead.propertySize}</p>
      //       <p><strong>Frequency:</strong> ${body.lead.frequency}</p>
      //       <p><strong>Location:</strong> ${body.lead.location}</p>
      //       <p><strong>Notes:</strong> ${body.lead.notes}</p>
      //       <p><strong>Submitted:</strong> ${body.lead.submittedAt}</p>
      //     `,
      //   }),
      // })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Email API Error]', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
