import { NextRequest, NextResponse } from 'next/server'

interface LeadData {
  service: string
  propertySize: string
  frequency: string
  location: string
  name: string
  email: string
  phone: string
  notes: string
}

// Store leads in memory (in production, use a database)
const leads: LeadData[] = []

export async function POST(request: NextRequest) {
  try {
    const body: LeadData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Add timestamp
    const leadWithTimestamp = {
      ...body,
      submittedAt: new Date().toISOString(),
    }

    // Store the lead
    leads.push(body)

    // In production, you would:
    // 1. Save to database
    // 2. Send confirmation email to user
    // 3. Send notification email to team
    // 4. Integrate with CRM

    console.log('[Lead Captured]', leadWithTimestamp)

    // Send email notification to admin (mock)
    try {
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'lead_notification',
          lead: leadWithTimestamp,
        }),
      }).catch(() => {
        // Email service not configured, continue anyway
      })
    } catch (error) {
      console.error('[Email Error]', error)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Lead captured successfully',
        leadId: `LEAD-${Date.now()}`,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[Lead API Error]', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve leads (for development/admin)
export async function GET(request: NextRequest) {
  // In production, add authentication
  const adminKey = request.headers.get('x-admin-key')
  if (adminKey !== process.env.ADMIN_KEY) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  return NextResponse.json({
    total: leads.length,
    leads,
  })
}
