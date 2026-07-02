import { Monitor, Smartphone, UsersRound } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const features = [
  {
    icon: Monitor,
    title: "PC版分析ダッシュボード",
    desc: "売上・客数・メニュー別データをリアルタイムに可視化。経営判断に必要な指標が一目で。",
  },
  {
    icon: Smartphone,
    title: "モバイルアプリ",
    desc: "打刻・シフト提出と確認・概算給与計算・経費登録をスマホで完結。自分の出勤日数から給与目安をその場で確認できます。",
  },
  {
    icon: UsersRound,
    title: "スタッフ管理",
    desc: "アカウント発行・ロール管理・複数店舗の一元管理を、本部からシンプルに運用。",
  },
];

export function Features() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="features" className="py-28">
      <div ref={ref} className="fade-in-up max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-orange font-semibold text-sm tracking-widest mb-3">FEATURES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            現場と経営を、ひとつに繋ぐ
          </h2>
          <p className="text-muted-foreground">店舗運営に必要な機能をオールインワンで提供。</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className="relative group p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition"
            >
              <div className="absolute top-6 right-6 text-6xl font-display font-bold text-muted/60">
                0{idx + 1}
              </div>
              <span className="inline-flex w-14 h-14 rounded-xl bg-gradient-hero text-white items-center justify-center mb-6 shadow-soft">
                <f.icon className="w-6 h-6" />
              </span>
              <h3 className="text-xl font-bold text-navy mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
