import { UtensilsCrossed } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-bold text-lg text-white">
          <span className="w-8 h-8 rounded-lg bg-gradient-orange grid place-items-center">
            <UtensilsCrossed className="w-4 h-4" />
          </span>
          DishBoard
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
          <a href="mailto:dishboard.info@gmail.com" className="hover:text-orange-soft transition">dishboard.info@gmail.com</a>
          <a href="#" className="hover:text-orange-soft transition">プライバシーポリシー</a>
          <span className="text-white/50">© 2026 DishBoard</span>
        </div>
      </div>
    </footer>
  );
}
