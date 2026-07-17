import { ClipboardList, BarChart2, PhoneCall, Receipt } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  {
    icon: ClipboardList,
    text: "繧ｷ繝輔ヨ縺ｯLINE縺ｨExcel縲∝｣ｲ荳翫・POS縲∫ｵ瑚ｲｻ縺ｯ邏・,
    sub: "3縺､縺ｮ繝・・繧ｿ縺檎ｹ九′縺｣縺ｦ縺・↑縺・°繧峨：L豈皮紫縺梧怦譛ｫ縺ｾ縺ｧ蜃ｺ縺ｪ縺・,
  },
  {
    icon: BarChart2,
    text: "螢ｲ荳翫・蛯ｾ蜷代′諢溯ｦ壹〒縺励°繧上°繧峨↑縺・,
    sub: "繝・・繧ｿ縺ｯ縺ゅｋ縺ｮ縺ｫ縲∬ｦ九ｋ譎る俣繧ょ・譫舌☆繧九せ繧ｭ繝ｫ繧ゅ↑縺・,
  },
  {
    icon: PhoneCall,
    text: "隍・焚蠎苓・縺ｮ迥ｶ豕√ｒ謚頑升縺吶ｋ縺溘ａ縺ｫ豈取律髮ｻ隧ｱ縺励※縺・ｋ",
    sub: "蜷・ｺ励°繧牙ｱ蜻翫′荳翫′繧九∪縺ｧ縲∵悽驛ｨ縺ｯ菴輔ｂ隕九∴縺ｪ縺・,
  },
  {
    icon: Receipt,
    text: "邨瑚ｲｻ縺ｮ髮・ｨ医↓豈取怦3譎る俣莉･荳翫°縺九ｋ",
    sub: "遞守炊螢ｫ縺ｸ縺ｮ謠仙・雉・侭繧呈焔縺ｧ縺ｾ縺ｨ繧√ｋ菴懈･ｭ縺梧ｯ取怦逋ｺ逕溘☆繧・,
  },
];

export function Problems() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 bg-muted/40">
      <div ref={ref} className="fade-in-up max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-orange font-semibold text-sm tracking-widest mb-3">Challenges</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">縺薙・繝・・繧ｿ縲∽ｻ翫←縺薙〒邂｡逅・＠縺ｦ縺・∪縺吶°・・/h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">鬟ｲ鬟溷ｺ励・邨悟霧縺ｫ蠢・ｦ√↑繝・・繧ｿ縺ｯ隍・焚縺ｮ繝・・繝ｫ縺ｫ謨｣蝨ｨ縺励※縺・ｋ縲ゅ◎繧後′蛻､譁ｭ縺ｮ驕・ｌ縺ｨ縲∬ｦ九∴縺ｪ縺・さ繧ｹ繝医・貂ｩ蠎翫↓縺ｪ縺｣縺ｦ縺・ｋ縲・/p>
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

