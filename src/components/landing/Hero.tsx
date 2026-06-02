import { ArrowRight, BarChart3, TrendingUp, Users } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative bg-gradient-hero text-white overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.72 0.19 50 / 0.5), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.5 0.15 280 / 0.4), transparent 45%)"
      }} />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange" />
            飲食店向け経営ダッシュボード
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
            飲食店の経営を、<br />
            <span className="bg-gradient-orange bg-clip-text text-transparent">データで変える。</span>
          </h1>
          <p className="text-lg text-white/75 mb-10 leading-relaxed max-w-xl">
            売上・経費・シフトをひとつの画面で。<br />
            店舗運営をもっとシンプルに。
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-orange text-white font-semibold shadow-orange hover:scale-[1.02] transition"
            >
              無料デモを申し込む
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center px-7 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition"
            >
              機能を見る
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-orange opacity-20 blur-3xl rounded-full" />
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs text-white/60">本日の売上</p>
                <p className="text-3xl font-bold">¥482,300</p>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-orange/20 text-orange-soft text-xs font-semibold flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +12.4%
              </span>
            </div>
            <div className="h-32 flex items-end gap-2 mb-6">
              {[40, 65, 50, 80, 55, 90, 70, 95, 75, 88, 60, 100].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-orange/30 to-orange" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: BarChart3, label: "客数", value: "182" },
                { icon: Users, label: "稼働", value: "8名" },
                { icon: TrendingUp, label: "客単価", value: "¥2,650" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 rounded-lg p-3 border border-white/5">
                  <s.icon className="w-4 h-4 text-orange-soft mb-1" />
                  <p className="text-[10px] text-white/60">{s.label}</p>
                  <p className="text-sm font-semibold">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
