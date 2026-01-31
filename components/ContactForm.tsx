'use client';
import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Отправка...');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
    };

    const res = await fetch('/api/appointment', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (res.ok) setStatus('✅ Заявка принята! Мы перезвоним.');
    else setStatus('❌ Ошибка. Попробуйте снова.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-slate-100 p-6 rounded-2xl border border-slate-200">
      <input name="name" type="text" placeholder="Ваше имя" required className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none" />
      <input name="phone" type="tel" placeholder="+7 (___) ___-__-__" required className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none" />
      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
        Оставить заявку
      </button>
      {status && <p className="text-center text-sm font-medium">{status}</p>}
    </form>
  );
}