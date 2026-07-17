import { useState, useRef, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { createClient } from "@supabase/supabase-js";

// 繝｢繧ｸ繝･繝ｼ繝ｫ繝医ャ繝励Ξ繝吶Ν縺ｧ蛻晄悄蛹厄ｼ・SR蟇ｾ蠢懶ｼ・const supabase = createClient(
  "https://xvomywhxiiexfnkgipal.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2b215d2h4aWlleGZua2dpcGFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwMDg2MDcsImV4cCI6MjA5MjU4NDYwN30.HIuNey2zt-M1LDsFPT-4H18IOWEhq2jjfVFzIEKUdOM"
);

function sendGAEvent(eventName: string, params: Record<string, string | number>) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, params);
  }
}

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(formRef.current!);
    const company = formData.get("company") as string;
    const store = formData.get("store") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const { error: supabaseError } = await supabase
      .from("contacts")
      .insert([{ company, store, name, email, phone, message }]);

    if (supabaseError) {
      setError("騾∽ｿ｡縺ｫ螟ｱ謨励＠縺ｾ縺励◆縲ゅｂ縺・ｸ蠎ｦ縺願ｩｦ縺励￥縺縺輔＞縲・);
      setLoading(false);
      return;
    }

    sendGAEvent("generate_lead", {
      event_category: "contact",
      event_label: "dishboard_contact_form",
    });
    sendGAEvent("form_submit", {
      event_category: "contact",
      event_label: company || "譛ｪ蜈･蜉・,
      form_id: "dishboard_contact",
    });

    setLoading(false);
    setSent(true);
  };

  const fields = [
    { name: "company", label: "莨夂､ｾ蜷・, type: "text", required: true },
    { name: "store", label: "蠎苓・蜷・, type: "text", required: true },
    { name: "name", label: "諡・ｽ楢・錐", type: "text", required: true },
    { name: "email", label: "繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ", type: "email", required: true },
    { name: "phone", label: "髮ｻ隧ｱ逡ｪ蜿ｷ", type: "tel", required: false },
  ];

  return (
    <section id="contact" className="py-28">
      <div ref={ref} className="fade-in-up max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-orange font-semibold text-sm tracking-widest mb-3">CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">縺雁撫縺・粋繧上○</h2>
          <p className="text-muted-foreground">縺碑ｳｪ蝠上・繝・Δ縺ｮ縺顔筏霎ｼ縺ｿ縺ｯ縺薙■繧峨°繧峨・/p>
          <p className="mt-4 text-sm text-muted-foreground">
            繝｡繝ｼ繝ｫ縺ｧ縺ｮ縺雁撫縺・粋繧上○・・            <a
              href="mailto:dishboard.info@gmail.com"
              className="text-orange font-semibold hover:underline ml-1"
              onClick={() => sendGAEvent("cta_click", { event_category: "contact", event_label: "mailto_link" })}
            >
              dishboard.info@gmail.com
            </a>
          </p>
        </div>
        {sent ? (
          <div className="p-10 rounded-2xl bg-card border border-border shadow-card text-center">
            <CheckCircle2 className="w-14 h-14 text-orange mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">騾∽ｿ｡縺悟ｮ御ｺ・＠縺ｾ縺励◆</h3>
            <p className="text-muted-foreground">諡・ｽ楢・ｈ繧願ｿｽ縺｣縺ｦ縺秘｣邨｡縺・◆縺励∪縺吶・/p>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="p-8 md:p-10 rounded-2xl bg-card border border-border shadow-card space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {fields.map((f) => (
                <div key={f.name} className={f.name === "phone" ? "sm:col-span-2" : ""}>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    {f.label}
                    {f.required && <span className="text-orange ml-1">*</span>}
                  </label>
                  <input
                    type={f.type}
                    name={f.name}
                    required={f.required}
                    maxLength={255}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange transition"
                  />
                </div>
              ))}
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                縺雁撫縺・粋繧上○蜀・ｮｹ<span className="text-orange ml-1">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                maxLength={2000}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange transition resize-none"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              onClick={() => sendGAEvent("cta_click", { event_category: "engagement", event_label: "contact_submit_button" })}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-orange text-white font-semibold shadow-orange hover:scale-[1.01] transition disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {loading ? "騾∽ｿ｡荳ｭ..." : "騾∽ｿ｡縺吶ｋ"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
