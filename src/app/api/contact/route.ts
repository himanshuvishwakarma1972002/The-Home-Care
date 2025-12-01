import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Log the contact form data
    console.log('Contact form submission:', body);
    
    // TODO: Add MongoDB integration here
    // Example: await saveToMongoDB(body);
    
    // For now, just return success
    return NextResponse.json({ 
      ok: true, 
      message: 'Contact form submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { ok: false, error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}

