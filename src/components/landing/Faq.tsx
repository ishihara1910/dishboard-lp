import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const faqs = [
  { q: "鬟ｲ鬟溷ｺ励・隕乗ｨ｡縺ｯ蝠上＞縺ｾ縺吶°・・, a: "1蠎苓・縺九ｉ隍・焚蠎苓・縺ｾ縺ｧ蟇ｾ蠢懊＠縺ｦ縺・∪縺吶・ },
  { q: "繧ｹ繝槭・縺九ｉ繧ゆｽｿ縺医∪縺吶°・・, a: "繝｢繝舌う繝ｫ繧｢繝励Μ縺ｧ蠎鈴聞繝ｻ繧ｹ繧ｿ繝・ヵ縺ｩ縺｡繧峨ｂ蛻ｩ逕ｨ縺ｧ縺阪∪縺吶・ },
  { q: "蟆主・繧ｵ繝昴・繝医・縺ゅｊ縺ｾ縺吶°・・, a: "蛻晄悄險ｭ螳壹°繧蛾°逕ｨ髢句ｧ九∪縺ｧ蟆ゆｻｻ縺ｧ繧ｵ繝昴・繝医＠縺ｾ縺吶・ },
  { q: "譌｢蟄倥・POS繝ｬ繧ｸ繝・・繧ｿ縺ｨ騾｣謳ｺ縺ｧ縺阪∪縺吶°・・, a: "荳ｻ隕√↑POS繧ｷ繧ｹ繝・Β縺ｨ縺ｮ繝・・繧ｿ騾｣謳ｺ縺ｫ蟇ｾ蠢懊＠縺ｦ縺・∪縺吶りｩｳ縺励￥縺ｯ繝・Δ譎ゅ↓縺皮嶌隲・￥縺縺輔＞縲・SV蠖｢蠑上〒縺ｮ繝・・繧ｿ蜿悶ｊ霎ｼ縺ｿ縺ｫ繧ょｯｾ蠢懊＠縺ｦ縺・∪縺吶・ },
  { q: "遞守炊螢ｫ縺ｸ縺ｮ譖ｸ鬘槫・蜉帙・縺ｩ縺ｮ繧医≧縺ｪ蠖｢蠑上〒縺吶°・・, a: "CSV繝ｻExcel蠖｢蠑上↓蟇ｾ蠢懊＠縺ｦ縺・∪縺吶ょｰ主・譎ゅ↓遞守炊螢ｫ縺ｮ蜈育函縺ｮ繝輔か繝ｼ繝槭ャ繝医↓蜷医ｏ縺帙◆繧ｫ繧ｹ繧ｿ繝蜃ｺ蜉幄ｨｭ螳壹ｂ辟｡譁吶〒謇ｿ繧翫∪縺吶・ },
];

export function Faq() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28 bg-muted/40">
      <div ref={ref} className="fade-in-up max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-orange font-semibold text-sm tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">繧医￥縺ゅｋ縺碑ｳｪ蝠・/h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left p-6 rounded-xl bg-card border border-border hover:border-orange/40 transition"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold text-foreground">Q. {f.q}</span>
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

