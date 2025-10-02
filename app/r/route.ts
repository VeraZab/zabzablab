import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const productParam = searchParams.get('product')

    if (!id) {
        return NextResponse.json({ error: 'Missing required parameter: id' }, { status: 400 })
    }

    const product = (productParam || 'wallpaper').toLowerCase()
    const normalizedProduct = product === 'fabric' ? 'fabric' : 'wallpaper'

    const targetUrl = `https://www.spoonflower.com/en/${normalizedProduct}/${id}`

    return NextResponse.redirect(targetUrl, 302)
}


