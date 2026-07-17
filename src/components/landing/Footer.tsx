export function Footer() {
  return (
    <footer className="bg-gradient-orange text-white/90 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-bold text-lg text-white">
          <img src="/header-icon.png" alt="DishBoard" className="h-9 w-auto object-contain bg-white rounded-lg px-2 py-1" />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
          <a href="mailto:dishboard.info@gmail.com" className="hover:text-white transition">dishboard.info@gmail.com</a>
          <a href="#" className="hover:text-white transition">プライバシーポリシー</a>
          <span className="text-white/70">© 2026 DishBoard</span>
        </div>
      </div>
    </footer>
  );
}
