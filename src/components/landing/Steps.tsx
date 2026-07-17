import { useReveal } from "@/hooks/use-reveal";

const steps = [
  { n: "01", title: "縺雁撫縺・粋繧上○繝ｻ繝・Δ逕ｳ霎ｼ縺ｿ", desc: "繝輔か繝ｼ繝繧医ｊ縺頑ｰ苓ｻｽ縺ｫ縺皮嶌隲・￥縺縺輔＞縲ゅョ繝｢縺ｧ讖溯・繧偵＃遒ｺ隱阪＞縺溘□縺代∪縺吶・ },
  { n: "02", title: "蛻晄悄險ｭ螳壹・繧ｹ繧ｿ繝・ヵ逋ｻ骭ｲ", desc: "蠎苓・諠・ｱ繧・せ繧ｿ繝・ヵ繧｢繧ｫ繧ｦ繝ｳ繝医ｒ險ｭ螳壹ょｰゆｻｻ諡・ｽ薙′莨ｴ襍ｰ繧ｵ繝昴・繝医・ },
  { n: "03", title: "驕狗畑髢句ｧ・, desc: "繝繝・す繝･繝懊・繝峨ｒ豢ｻ逕ｨ縺励√ョ繝ｼ繧ｿ縺ｫ蝓ｺ縺･縺丞ｺ苓・驕句霧繧偵せ繧ｿ繝ｼ繝医ょｰ主・蠕後ｂ莨ｴ襍ｰ繧ｵ繝昴・繝医・ },
];

export function Steps() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="steps" className="py-28">
      <div ref={ref} className="fade-in-up max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange font-semibold text-sm tracking-widest mb-3">HOW IT WORKS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">蟆主・縺ｮ豬√ｌ</h2>
          <p className="text-muted-foreground">譛遏ｭ1騾ｱ髢薙〒驕狗畑髢句ｧ九ょｰゆｻｻ諡・ｽ薙′蛻晄悄險ｭ螳壹°繧牙ｰ主・蠕後・繧ｵ繝昴・繝医∪縺ｧ莨ｴ襍ｰ縲ら樟蝣ｴ繧ｹ繧ｿ繝・ヵ縺ｸ縺ｮ繝ｬ繧ｯ繝√Ε繝ｼ繧ょ性繧√※繝輔Ν繧ｵ繝昴・繝医・/p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 relative">
          {steps.map((s) => (
            <div key={s.n} className="relative p-8 rounded-2xl bg-card border border-border shadow-soft">
              <div className="text-5xl font-display font-bold bg-gradient-orange bg-clip-text text-transparent mb-4">
                STEP {s.n}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

