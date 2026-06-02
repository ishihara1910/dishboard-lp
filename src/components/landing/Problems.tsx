import { AlertCircle, Calculator, CalendarClock, Building2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { icon: AlertCircle, text: "売上の傾向が感覚でしかわからない" },
  { icon: Calculator, text: "経費の集計に毎月時間がかかる" },
  { icon: CalendarClock, text: "シフト管理とスタッフ対応が煩雑" },
  { icon: Building2, text: "複数店舗の状況を一括で把握できない" },
];

export function Problems() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 bg-muted/40">
      <div ref={ref} className="fade-in-up max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-orange font-semibold text-sm tracking-widest mb-3">CHALLENGES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">こんなお悩みありませんか？</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((i) => (
            <div key={i.text} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-border shadow-soft hover:shadow-card transition">
              <span className="shrink-0 w-11 h-11 rounded-lg bg-orange/10 text-orange grid place-items-center">
                <i.icon className="w-5 h-5" />
              </span>
              <p className="text-foreground font-medium pt-2">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
