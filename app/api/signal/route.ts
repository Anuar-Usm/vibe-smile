import { NextResponse } from 'next/server';

export async function POST() {
  const token = "6353694821:AAFXxjfcXlB_9boAwVnHd7d-0V-0n8FIeWM";
  const chat_id = "1672507868";
  
  const message = `🚀 <b>Next.js Signal</b>\nStatus: 🟢 Active\nAction: Button Triggered`;

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chat_id,
        text: message,
        parse_mode: 'html'
      })
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}