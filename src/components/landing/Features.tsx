import { useReveal } from "@/hooks/use-reveal";

const tags = {
  enterprise: ["FL比率 推計表示", "店舗別 達成率", "利益推移グラフ", "複数店舗対応"],
  mobile: ["出退勤打刻", "シフト提出", "シフト確認", "概算給与計算", "経費登録"],
  labor: ["日次カレンダー", "目標比較"],
  cost: ["レシートOCR", "定期発注"],
  download: ["CSV/Excel出力", "税理士連携"],
};

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex px-2 py-0.5 rounded-full text-[11px] font-medium bg-orange/15 text-orange border border-orange/20">
      {label}
    </span>
  );
}

function TagWhite({ label }: { label: string }) {
  return (
    <span className="inline-flex px-2 py-0.5 rounded-full text-[11px] font-medium bg-white/15 text-white/90 border border-white/20">
      {label}
    </span>
  );
}

const small = [
  {
    num: "01",
    title: "モバイルアプリ（店舗向け）",
    tags: tags.mobile,
    desc: "打刻・シフト提出と確認・概算給与計算・経費登録がスマホで完結。自分の出勤日数から給与目安をその場で確認できます。",
  },
  {
    num: "02",
    title: "人件費管理（FL比率連動）",
    tags: tags.labor,
    desc: "出退勤データから人件費Lを自動集計。日次カレンダーで費率の高い日を色分け表示。目標30%を超えた店舗を即座にアラート。",
  },
  {
    num: "03",
    title: "仕入れ・経費管理",
    tags: tags.cost,
    desc: "定期発注と流動経費（レシートOCR）を分けて管理。食材費Fとして売上データと連動し、FL比率に自動反映。",
  },
  {
    num: "04",
    title: "データダウンロード",
    tags: tags.download,
    desc: "人件費・仕入れ・売上・FL比率データを月次・店舗別に選択してCSV/Excel出力。税理士への提出書類を自動生成。",
  },
];

export function Features() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="features" className="py-28">
      <div ref={ref} className="fade-in-up max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-orange font-semibold text-sm tracking-widest mb-3">FEATURES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">現場と経営を、ひとつに繋ぐ</h2>
          <p className="text-muted-foreground">店舗運営に必要な機能をオールインワンで提供。</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Featured card: col-span-2 */}
          <div className="relative md:col-span-2 group p-8 rounded-2xl bg-gradient-orange text-white border border-orange/20 shadow-card overflow-hidden">
            <div className="absolute top-6 right-6 text-6xl font-display font-bold text-white/10">00</div>
            <p className="text-xs font-semibold tracking-widest text-white/70 mb-3 uppercase">Featured</p>
            <h3 className="text-2xl font-bold mb-3">企業ダッシュボード（本部向け）</h3>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {tags.enterprise.map((t) => <TagWhite key={t} label={t} />)}
            </div>
            <p className="text-white/80 leading-relaxed max-w-lg">
              全店舗の売上・客数・経費・FL比率を一画面に集約。店舗別の目標達成率と利益推移を日次で確認。月末を待たずに経営判断ができる。
            </p>
          </div>

          {/* Small cards */}
          {small.map((f) => (
            <div
              key={f.title}
              className="relative group p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition"
            >
              <div className="absolute top-6 right-6 text-5xl font-display font-bold text-muted/50">{f.num}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <div className="flex flex-wrap gap-1 mb-3">
                {f.tags.map((t) => <Tag key={t} label={t} />)}
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
