'use client';
import { motion } from 'framer-motion';

const reviews = [
  { id: 1, name: "Анна К.", text: "Лучшая клиника! Сделали чистку совершенно безболезненно. Теперь только сюда.", avatar: "👩‍💼" },
  { id: 2, name: "Игорь М.", text: "Ставил имплант. Очень переживал, но врач — профессионал своего дела. Всё прижилось идеально.", avatar: "👨‍💻" },
  { id: 3, name: "Елена В.", text: "Привела ребенка, дочка даже не плакала. Сказала, что пойдет еще раз! Спасибо за подход.", avatar: "👩‍🎨" },
];

export function Reviews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Что говорят пациенты</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{rev.avatar}</div>
              <p className="text-slate-600 italic mb-6">"{rev.text}"</p>
              <p className="font-bold text-slate-900">— {rev.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}