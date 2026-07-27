import { ArrowRight, TrendingUp } from "lucide-react";

const stores = [
  { name: "渋谷店", fl: 55, color: "bg-green-500", badge: "良好", badgeCls: "bg-green-100 text-green-700" },
  { name: "新宿店", fl: 68, color: "bg-yellow-400", badge: "要確認", badgeCls: "bg-yellow-100 text-yellow-700" },
  { name: "池袋店", fl: 80, color: "bg-red-400", badge: "要改善", badgeCls: "bg-red-100 text-red-700" },
];

export function Hero() {
  return (
    <section id="top" className="relative bg-white overflow-hidden pt-28 pb-16 md:pt-40 md:pb-32">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.72 0.19 50 / 0.3), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.82 0.13 60 / 0.2), transparent 45%)"
      }} />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 border border-orange/20 text-xs font-medium mb-6 text-orange">
            <span className="w-1.5 h-1.5 rounded-full bg-orange" />
            飲食店向け 経営管理プラットフォーム
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 text-foreground">
            シフト・売上・経費が、
            <br />
            <span className="bg-gradient-orange bg-clip-text text-transparent">ひとつに繋がる。</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
            バラバラに管理していたデータを統合することで、FL比率が自動計算され、月次書類が一発で出力される。経営判断が、今日から変わる。
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
              className="inline-flex items-center px-7 py-4 rounded-xl border border-orange/30 text-orange font-semibold hover:bg-orange/5 transition"
            >
              機能を見る
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-orange opacity-20 blur-3xl rounded-full" />
          <div className="relative bg-white backdrop-blur-xl border border-orange/15 rounded-2xl p-6 shadow-card">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <p className="font-bold text-base text-foreground">企業ダッシュボード</p>
              <span className="px-2.5 py-1 rounded-md bg-orange/10 text-orange text-xs font-medium">2026年 7月</span>
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="bg-orange/80 rounded-xl p-3 col-span-1">
                <p className="text-[10px] text-white/70 mb-1">売上（全店舗）</p>
                <p className="text-lg font-bold leading-tight">¥28.4百万</p>
                <p className="text-[10px] text-white/80 mt-1 flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" /> 前月比 +6.2%
                </p>
              </div>
              <div className="bg-orange/80 rounded-xl p-3 col-span-1">
                <p className="text-[10px] text-white/70 mb-1">経費（全店舗）</p>
                <p className="text-lg font-bold leading-tight">¥17.4百万</p>
                <p className="text-[10px] text-white/80 mt-1 flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" /> 前月比 +3.4%
                </p>
              </div>
              <div className="bg-orange/10 rounded-xl p-3 col-span-1 relative overflow-hidden">
                <p className="text-[10px] text-orange/70 mb-1">利益</p>
                <p className="text-lg font-bold leading-tight text-foreground" style={{ filter: "blur(3px)", opacity: 0.4 }}>¥11.0百万</p>
                <p className="text-[10px] text-orange mt-1">🔒 月末確定後</p>
              </div>
            </div>

            {/* Store FL table */}
            <div className="space-y-2">
              <p className="text-[10px] text-muted-foreground mb-2 uppercase tracking-wider">店舗別 FL比率</p>
              {stores.map((s) => (
                <div key={s.name} className="flex items-center gap-3 bg-orange/5 rounded-lg px-3 py-2">
                  <span className="text-xs text-foreground w-14 shrink-0">{s.name}</span>
                  <div className="flex-1 h-1.5 bg-orange/10 rounded-full overflow-hidden">
                    <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.fl}%` }} />
                  </div>
                  <span className="text-xs font-semibold w-8 text-right text-foreground">{s.fl}%</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${s.badgeCls}`}>{s.badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
