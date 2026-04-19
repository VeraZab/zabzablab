import { NextRequest, NextResponse } from 'next/server'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, address, city, state, zip, country, notes, room, mood, color, picks } = body

        if (!email || !EMAIL_REGEX.test(email)) {
            return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 })
        }
        if (!name || !address || !city || !state || !zip || !country) {
            return NextResponse.json({ error: 'Please fill in all required fields' }, { status: 400 })
        }

        const formspreeId = process.env.FORMSPREE_MYSTERY_BOX_FORM_ID
        if (!formspreeId) {
            console.error('FORMSPREE_MYSTERY_BOX_FORM_ID is not set.')
            return NextResponse.json({ error: 'Mystery box is not configured yet' }, { status: 503 })
        }

        const formspreeRes = await fetch(`https://formspree.io/f/${formspreeId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
                _subject: `Mystery box request from ${name}`,
                name,
                email,
                picks,
                quiz_room: room,
                quiz_mood: mood,
                quiz_color: color,
                ship_address: address,
                ship_city: city,
                ship_state: state,
                ship_zip: zip,
                ship_country: country,
                notes: notes || '(none)',
            }),
        })

        if (!formspreeRes.ok) {
            const data = await formspreeRes.json().catch(() => ({}))
            console.error('Formspree error:', formspreeRes.status, data)
            return NextResponse.json({ error: 'Could not submit. Please try again.' }, { status: 502 })
        }

        return NextResponse.json({ success: true })
    } catch (e) {
        console.error('Mystery box API error:', e)
        return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
    }
}
