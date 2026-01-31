export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-6">
            ✨ Ваша улыбка — наш приоритет
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Бережная стоматология <span className="text-blue-600">нового</span> поколения
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg">
            Используем передовые технологии и безболезненные методы лечения. Запишитесь на бесплатную консультацию уже сегодня.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-blue-200 transition-all">
              Записаться онлайн
            </button>
            <button className="border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
              Наши услуги
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-[40px] overflow-hidden border border-white shadow-2xl">
            {/* Здесь потом будет фото клиники или врача */}
            <div className="absolute inset-0 flex items-center justify-center text-blue-200 text-9xl font-black">
              SMILE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}