import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const faqs = [
  { q: "飲食店の規模は問いますか？", a: "1店舗から複数店舗まで対応しています。" },
  { q: "スマホからも使えますか？", a: "モバイルアプリで店長・スタッフどちらも利用できます。" },
  { q: "導入サポートはありますか？", a: "初期設定から運用開始まで専任でサポートします。" },
  { q: "既存のPOSレジデータと連携できますか？", a: "主要なPOSシステムとのデータ連携に対応しています。詳しくはデモ時にご相談ください。CSV形式でのデータ取り込みにも対応しています。" },
  { q: "税理士への書類出力はどのような形式ですか？", a: "CSV・Excel形式に対応しています。導入時に税理士の先生のフォーマットに合わせたカスタム出力設定も無料で承ります。" },
];

export function Faq() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28 bg-muted/40">
      <div ref={ref} className="fade-in-up max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-orange font-semibold text-sm tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">よくあるご質問</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left p-6 rounded-xl bg-card border border-border hover:border-orange/40 transition"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold text-navy">Q. {f.q}</span>
                {open === i ? <Minus className="w-5 h-5 text-orange shrink-0" /> : <Plus className="w-5 h-5 text-muted-foreground shrink-0" />}
              </div>
              {open === i && (
                <p className="mt-4 text-muted-foreground leading-relaxed">A. {f.a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
