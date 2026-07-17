import { ClipboardList, BarChart2, PhoneCall, Receipt } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  {
    icon: ClipboardList,
    text: "シフトはLINEとExcel、売上はPOS、経費は紙",
    sub: "3つのデータが繋がっていないから、FL比率が月末まで出ない",
  },
  {
    icon: BarChart2,
    text: "売上の傾向が感覚でしかわからない",
    sub: "データはあるのに、見る時間も分析するスキルもない",
  },
  {
    icon: PhoneCall,
    text: "複数店舗の状況を把握するために毎日電話している",
    sub: "各店から報告が上がるまで、本部は何も見えない",
  },
  {
    icon: Receipt,
    text: "経費の集計に毎月3時間以上かかる",
    sub: "税理士への提出資料を手でまとめる作業が毎月発生する",
  },
];

export function Problems() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 bg-muted/40">
      <div ref={ref} className="fade-in-up max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-orange font-semibold text-sm tracking-widest mb-3">Challenges</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">このデータ、今どこで管理していますか？</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">飲食店の経営に必要なデータは複数のツールに散在している。それが判断の遅れと、見えないコストの温床になっている。</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((i) => (
            <div key={i.text} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-border shadow-soft hover:shadow-card transition">
              <span className="shrink-0 w-11 h-11 rounded-lg bg-orange/10 text-orange grid place-items-center">
                <i.icon className="w-5 h-5" />
              </span>
              <div className="pt-1">
                <p className="text-foreground font-medium">{i.text}</p>
                <p className="text-muted-foreground text-sm mt-1">{i.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}