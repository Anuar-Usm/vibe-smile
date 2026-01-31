export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">S</div>
          <span className="text-xl font-bold tracking-tight text-slate-800">VibeSmile</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Услуги</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Отзывы</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Контакты</a>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all">
          +7 (999) 000-00-00
        </button>
      </div>
    </nav>
  );
}