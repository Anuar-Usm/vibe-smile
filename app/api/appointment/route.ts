import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, phone } = await req.json();
  const token = "6353694821:AAFXxjfcXlB_9boAwVnHd7d-0V-0n8FIeWM";
  const chat_id = "1672507868";
  
  const text = `🦷 <b>Новая заявка!</b>\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id, text, parse_mode: 'html' })
  });

  return NextResponse.json({ success: true });
}