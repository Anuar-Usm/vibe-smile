'use client';
import { motion } from 'framer-motion';

// 1. Возвращаем массив с данными, который "потерялся"
const services = [
  { title: "Лечение зубов", price: "от 3 000 ₽", icon: "🦷" },
  { title: "Имплантация", price: "от 25 000 ₽", icon: "💎" },
  { title: "Отбеливание", price: "от 10 000 ₽", icon: "✨" },
  { title: "Ортодонтия", price: "от 50 000 ₽", icon: "😬" },
];

export function Services() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-slate-900">Наши направления</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              // Простейшая анимация: плавное появление
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[32px] border border-slate-100 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-blue-600 font-medium">{s.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}