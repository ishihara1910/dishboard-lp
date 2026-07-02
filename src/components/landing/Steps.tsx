import { useReveal } from "@/hooks/use-reveal";

const steps = [
  { n: "01", title: "お問い合わせ・デモ申込み", desc: "フォームよりお気軽にご相談ください。デモで機能をご確認いただけます。" },
  { n: "02", title: "初期設定・スタッフ登録", desc: "店舗情報やスタッフアカウントを設定。専任担当が伴走サポート。" },
  { n: "03", title: "運用開始", desc: "ダッシュボードを活用し、データに基づく店舗運営をスタート。導入後も伴走サポート。" },
];

export function Steps() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="steps" className="py-28">
      <div ref={ref} className="fade-in-up max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange font-semibold text-sm tracking-widest mb-3">HOW IT WORKS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">導入の流れ</h2>
          <p className="text-muted-foreground">最短1週間で運用開始。専任担当が初期設定から導入後のサポートまで伴走。現場スタッフへのレクチャーも含めてフルサポート。</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 relative">
          {steps.map((s) => (
            <div key={s.n} className="relative p-8 rounded-2xl bg-card border border-border shadow-soft">
              <div className="text-5xl font-display font-bold bg-gradient-orange bg-clip-text text-transparent mb-4">
                STEP {s.n}
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
