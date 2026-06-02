import { Zap, Workflow, Network } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const benefits = [
  { icon: Zap, title: "経営判断のスピードが上がる", desc: "リアルタイムなデータで意思決定を加速。" },
  { icon: Workflow, title: "現場スタッフの管理工数が削減", desc: "シフト・打刻・経費入力を一元化。" },
  { icon: Network, title: "複数店舗でも本部から一括管理", desc: "店舗を横断した分析と運用が可能に。" },
];

export function Benefits() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="benefits" className="py-28 bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange/20 rounded-full blur-3xl" />
      <div ref={ref} className="fade-in-up relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-soft font-semibold text-sm tracking-widest mb-3">BENEFITS</p>
          <h2 className="text-3xl md:text-4xl font-bold">DishBoard 導入で変わること</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition"
            >
              <span className="inline-flex w-12 h-12 rounded-xl bg-gradient-orange items-center justify-center mb-5 shadow-orange">
                <b.icon className="w-5 h-5 text-white" />
              </span>
              <h3 className="text-lg font-bold mb-2">{b.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
