import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { label: "FL比率の把握", before: "月末", after: "毎日リアルタイム" },
  { label: "月次経理作業", before: "3時間以上", after: "約15分" },
  { label: "複数店舗の状況確認", before: "各店に電話", after: "ダッシュボードで即確認" },
  { label: "データ管理ツール数", before: "3〜5種類", after: "1つのアプリ" },
];

export function BeforeAfter() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-28" style={{ background: "oklch(0.65 0.18 42)" }}>
      <div ref={ref} className="fade-in-up max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <p className="font-semibold text-sm tracking-widest mb-3 text-white/70 uppercase">Before / After</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">DishBoard導入で、何が変わるか。</h2>
            <p className="text-white/80 leading-relaxed text-lg">
              データが繋がると、作業時間が減るだけでなく、経営判断のタイミングが変わる。
            </p>
          </div>

          <div className="space-y-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/15 backdrop-blur rounded-xl px-6 py-4 flex items-center gap-4">
                <div className="w-32 shrink-0">
                  <p className="text-white/60 text-xs mb-1">{s.label}</p>
                </div>
                <span className="text-white/50 line-through text-sm shrink-0">{s.before}</span>
                <ArrowRight className="w-4 h-4 text-white/60 shrink-0" />
                <span className="text-white font-bold text-sm">{s.after}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
