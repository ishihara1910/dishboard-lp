import { useReveal } from "@/hooks/use-reveal";

const tags = {
  enterprise: ["FL豈皮紫 謗ｨ險郁｡ｨ遉ｺ", "蠎苓・蛻･ 驕疲・邇・, "蛻ｩ逶頑耳遘ｻ繧ｰ繝ｩ繝・, "隍・焚蠎苓・蟇ｾ蠢・],
  mobile: ["蜃ｺ騾蜍､謇灘綾", "繧ｷ繝輔ヨ謠仙・", "繧ｷ繝輔ヨ遒ｺ隱・, "讎らｮ礼ｵｦ荳手ｨ育ｮ・, "邨瑚ｲｻ逋ｻ骭ｲ"],
  labor: ["譌･谺｡繧ｫ繝ｬ繝ｳ繝繝ｼ", "逶ｮ讓呎ｯ碑ｼ・],
  cost: ["繝ｬ繧ｷ繝ｼ繝・CR", "螳壽悄逋ｺ豕ｨ"],
  download: ["CSV/Excel蜃ｺ蜉・, "遞守炊螢ｫ騾｣謳ｺ"],
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
    title: "繝｢繝舌う繝ｫ繧｢繝励Μ・亥ｺ苓・蜷代￠・・,
    tags: tags.mobile,
    desc: "謇灘綾繝ｻ繧ｷ繝輔ヨ謠仙・縺ｨ遒ｺ隱阪・讎らｮ礼ｵｦ荳手ｨ育ｮ励・邨瑚ｲｻ逋ｻ骭ｲ縺後せ繝槭・縺ｧ螳檎ｵ舌り・蛻・・蜃ｺ蜍､譌･謨ｰ縺九ｉ邨ｦ荳守岼螳峨ｒ縺昴・蝣ｴ縺ｧ遒ｺ隱阪〒縺阪∪縺吶・,
  },
  {
    num: "02",
    title: "莠ｺ莉ｶ雋ｻ邂｡逅・ｼ・L豈皮紫騾｣蜍包ｼ・,
    tags: tags.labor,
    desc: "蜃ｺ騾蜍､繝・・繧ｿ縺九ｉ莠ｺ莉ｶ雋ｻL繧定・蜍暮寔險医よ律谺｡繧ｫ繝ｬ繝ｳ繝繝ｼ縺ｧ雋ｻ邇・・鬮倥＞譌･繧定牡蛻・￠陦ｨ遉ｺ縲ら岼讓・0%繧定ｶ・∴縺溷ｺ苓・繧貞叉蠎ｧ縺ｫ繧｢繝ｩ繝ｼ繝医・,
  },
  {
    num: "03",
    title: "莉募・繧後・邨瑚ｲｻ邂｡逅・,
    tags: tags.cost,
    desc: "螳壽悄逋ｺ豕ｨ縺ｨ豬∝虚邨瑚ｲｻ・医Ξ繧ｷ繝ｼ繝・CR・峨ｒ蛻・￠縺ｦ邂｡逅・る｣滓攝雋ｻF縺ｨ縺励※螢ｲ荳翫ョ繝ｼ繧ｿ縺ｨ騾｣蜍輔＠縲：L豈皮紫縺ｫ閾ｪ蜍募渚譏縲・,
  },
  {
    num: "04",
    title: "繝・・繧ｿ繝繧ｦ繝ｳ繝ｭ繝ｼ繝・,
    tags: tags.download,
    desc: "莠ｺ莉ｶ雋ｻ繝ｻ莉募・繧後・螢ｲ荳翫・FL豈皮紫繝・・繧ｿ繧呈怦谺｡繝ｻ蠎苓・蛻･縺ｫ驕ｸ謚槭＠縺ｦCSV/Excel蜃ｺ蜉帙らｨ守炊螢ｫ縺ｸ縺ｮ謠仙・譖ｸ鬘槭ｒ閾ｪ蜍慕函謌舌・,
  },
];

export function Features() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="features" className="py-28">
      <div ref={ref} className="fade-in-up max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-orange font-semibold text-sm tracking-widest mb-3">FEATURES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">迴ｾ蝣ｴ縺ｨ邨悟霧繧偵√・縺ｨ縺､縺ｫ郢九＄</h2>
          <p className="text-muted-foreground">蠎苓・驕句霧縺ｫ蠢・ｦ√↑讖溯・繧偵が繝ｼ繝ｫ繧､繝ｳ繝ｯ繝ｳ縺ｧ謠蝉ｾ帙・/p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Featured card: col-span-2 */}
          <div className="relative md:col-span-2 group p-8 rounded-2xl bg-gradient-orange text-white border border-orange/20 shadow-card overflow-hidden">
            <div className="absolute top-6 right-6 text-6xl font-display font-bold text-white/10">00</div>
            <p className="text-xs font-semibold tracking-widest text-orange-soft mb-3 uppercase">Featured</p>
            <h3 className="text-2xl font-bold mb-3">莨∵･ｭ繝繝・す繝･繝懊・繝会ｼ域悽驛ｨ蜷代￠・・/h3>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {tags.enterprise.map((t) => <TagWhite key={t} label={t} />)}
            </div>
            <p className="text-white/70 leading-relaxed max-w-lg">
              蜈ｨ蠎苓・縺ｮ螢ｲ荳翫・螳｢謨ｰ繝ｻ邨瑚ｲｻ繝ｻFL豈皮紫繧剃ｸ逕ｻ髱｢縺ｫ髮・ｴ・ょｺ苓・蛻･縺ｮ逶ｮ讓咎＃謌千紫縺ｨ蛻ｩ逶頑耳遘ｻ繧呈律谺｡縺ｧ遒ｺ隱阪よ怦譛ｫ繧貞ｾ・◆縺壹↓邨悟霧蛻､譁ｭ縺後〒縺阪ｋ縲・            </p>
          </div>

          {/* Small cards */}
          {small.map((f, idx) => (
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

