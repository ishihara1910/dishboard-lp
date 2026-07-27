import { useReveal } from "@/hooks/use-reveal";
import { useEffect, useRef } from "react";

const SOURCES = [
  { label: "シフト・出退勤", color: "#3b82f6" },
  { label: "売上データ", color: "#22c55e" },
  { label: "仕入れ・経費", color: "#a855f7" },
];
const OUTPUTS = [
  { label: "FL比率\n自動計算" },
  { label: "書類\n一括出力" },
  { label: "本部\n一元管理" },
];

function FlowCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<{ x: number; y: number; t: number; path: number }[]>([]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    const cx = W / 2;
    const cy = H / 2;
    const srcX = W * 0.13;
    const dstX = W * 0.87;
    const spread = H * 0.28;
    const ys = [cy - spread, cy, cy + spread];

    // particles: 6 paths (3 src->center, 3 center->dst)
    const paths = [
      ...SOURCES.map((_, i) => ({ sx: srcX, sy: ys[i], ex: cx, ey: cy })),
      ...OUTPUTS.map((_, i) => ({ sx: cx, sy: cy, ex: dstX, ey: ys[i] })),
    ];

    // init particles
    particlesRef.current = paths.flatMap((_, pi) =>
      Array.from({ length: 3 }, (__, j) => ({ x: 0, y: 0, t: j / 3, path: pi }))
    );

    let last = 0;
    function draw(ts: number) {
      const dt = Math.min((ts - last) / 1000, 0.05);
      last = ts;
      ctx.clearRect(0, 0, W, H);

      // draw dashed lines
      ctx.setLineDash([4, 6]);
      ctx.lineWidth = 1.5;
      paths.forEach((p, pi) => {
        ctx.strokeStyle = pi < 3 ? SOURCES[pi].color + "60" : "#f9731660";
        ctx.beginPath();
        ctx.moveTo(p.sx, p.sy);
        ctx.lineTo(p.ex, p.ey);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      const r = Math.max(22, Math.min(32, W * 0.07));
      const rCenter = r * 1.28;

      // draw source nodes
      SOURCES.forEach((s, i) => {
        ctx.beginPath();
        ctx.arc(srcX, ys[i], r, 0, Math.PI * 2);
        ctx.fillStyle = s.color + "22";
        ctx.fill();
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = s.color;
        ctx.font = "bold 9px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const lines = s.label.split("・");
        lines.forEach((l, li) => ctx.fillText(l, srcX, ys[i] + (li - (lines.length - 1) / 2) * 11));
      });

      // center node
      ctx.beginPath();
      ctx.arc(cx, cy, rCenter, 0, Math.PI * 2);
      ctx.fillStyle = "#f9731620";
      ctx.fill();
      ctx.strokeStyle = "#f97316";
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.fillStyle = "#f97316";
      ctx.font = "bold 11px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Dish", cx, cy - 7);
      ctx.fillText("Board", cx, cy + 7);

      // output nodes
      OUTPUTS.forEach((o, i) => {
        ctx.beginPath();
        ctx.arc(dstX, ys[i], r, 0, Math.PI * 2);
        ctx.fillStyle = "#f9731615";
        ctx.fill();
        ctx.strokeStyle = "#f9731660";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = "#ffffff99";
        ctx.font = "bold 8.5px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        o.label.split("\n").forEach((l, li, arr) => ctx.fillText(l, dstX, ys[i] + (li - (arr.length - 1) / 2) * 11));
      });

      // animate particles
      particlesRef.current.forEach((p) => {
        p.t = (p.t + dt * 0.45) % 1;
        const path = paths[p.path];
        const px = path.sx + (path.ex - path.sx) * p.t;
        const py = path.sy + (path.ey - path.sy) * p.t;
        const color = p.path < 3 ? SOURCES[p.path].color : "#f97316";
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    }
    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return <canvas ref={ref} className="w-full h-64 md:h-52" />;
}

const cards = [
  {
    emoji: "📈",
    title: "FL比率 リアルタイム表示",
    desc: "月末を待たずに、毎日の推計FL比率が自動で表示される。異常を早期に発見し、手を打てる。",
  },
  {
    emoji: "📄",
    title: "書類を一発出力",
    desc: "仕入れ・人件費・売上データをまとめてCSV/Excel出力。月次の経理作業が大幅に削減される。",
  },
  {
    emoji: "🏢",
    title: "複数店舗を本部から一覧管理",
    desc: "全店の売上・FL比率・経費が企業ダッシュボードに集約。電話なしで今日の状況がわかる。",
  },
];

export function DataIntegration() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-28 text-white" style={{ background: "linear-gradient(135deg, #1e2a4a 0%, #0f172a 100%)" }}>
      <div ref={ref} className="fade-in-up max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-orange-soft font-semibold text-sm tracking-widest mb-3">Data Integration</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">3つのデータが繋がると、経営が見える。</h2>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            シフト・売上・経費の3データを統合することで、FL比率の自動計算から税理士提出書類の一括出力まで、すべてが自動でつながる。
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">
          <FlowCanvas />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="bg-white/8 border border-white/10 rounded-2xl p-6 hover:bg-white/12 transition">
              <div className="text-3xl mb-4">{c.emoji}</div>
              <h3 className="text-lg font-bold mb-2">{c.title}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
