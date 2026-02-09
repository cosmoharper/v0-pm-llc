import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'PM204R-line-card.pdf')
    const fileBuffer = await readFile(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="PM204R-line-card.pdf"',
      },
    })
  } catch {
    return new NextResponse('PDF not found', { status: 404 })
  }
}
