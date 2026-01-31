'use client';

// Импорты всех компонентов
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { ContactForm } from '../components/ContactForm';
import { Reviews } from '../components/Reviews'; // Проверь, что файл называется Reviews.tsx

export default function DentistryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans leading-relaxed">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Блок услуг с анимацией */}
        <Services />
        
        {/* ВОТ ЭТОТ БЛОК НУЖНО БЫЛО ДОБАВИТЬ: */}
        <Reviews />
        
        {/* Форма записи */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center mb-12 tracking-tight">
              Записаться на прием
            </h2>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Карта (с исправленной ссылкой на виджет) */}
      <section className="h-[450px] w-full bg-slate-200 grayscale hover:grayscale-0 transition-all duration-500 border-t border-slate-100">
        <iframe 
          src="https://yandex.ru/map-widget/v1/?ll=32.0322,36.5425&z=14&pt=32.0322,36.5425" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          allowFullScreen={true}
          title="Yandex Map"
        ></iframe>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm">
        <p>© 2026 Стоматология "VibeSmile". Все права защищены.</p>
      </footer>
    </div>
  );
}