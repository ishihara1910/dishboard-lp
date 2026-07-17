export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg text-navy">
          <img src="/header-icon.png" alt="DishBoard" className="h-9 w-auto object-contain" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-navy transition">機能</a>
          <a href="#benefits" className="hover:text-navy transition">メリット</a>
          <a href="#steps" className="hover:text-navy transition">導入の流れ</a>
          <a href="#faq" className="hover:text-navy transition">FAQ</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-orange text-white text-sm font-semibold hover:opacity-90 transition shadow-orange"
        >
          無料デモ
        </a>
      </div>
    </header>
  );
}
