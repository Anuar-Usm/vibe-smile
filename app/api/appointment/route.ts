import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, phone } = await req.json();
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat_id = process.env.TELEGRAM_CHAT_ID;
  
  const text = `🦷 <b>Новая заявка!</b>\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id, text, parse_mode: 'html' })
  });

  return NextResponse.json({ success: true });
}