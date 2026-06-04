import { useState, useRef, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
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
      setError("送信に失敗しました。もう一度お試しください。");
      setLoading(false);
      return;
    }

    sendGAEvent("generate_lead", {
      event_category: "contact",
      event_label: "dishboard_contact_form",
    });
    sendGAEvent("form_submit", {
      event_category: "contact",
      event_label: company || "未入力",
      form_id: "dishboard_contact",
    });

    setLoading(false);
    setSent(true);
  };

  const fields = [
    { name: "company", label: "会社名", type: "text", required: true },
    { name: "store", label: "店舗名", type: "text", required: true },
    { name: "name", label: "担当者名", type: "text", required: true },
    { name: "email", label: "メールアドレス", type: "email", required: true },
    { name: "phone", label: "電話番号", type: "tel", required: false },
  ];

  return (
    <section id="contact" className="py-28">
      <div ref={ref} className="fade-in-up max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-orange font-semibold text-sm tracking-widest mb-3">CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">お問い合わせ</h2>
          <p className="text-muted-foreground">ご質問・デモのお申込みはこちらから。</p>
          <p className="mt-4 text-sm text-muted-foreground">
            メールでのお問い合わせ：
            
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
            <h3 className="text-xl font-bold text-navy mb-2">送信が完了しました</h3>
            <p className="text-muted-foreground">担当者より追ってご連絡いたします。</p>
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
                  <label className="block text-sm font-semibold text-navy mb-2">
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
              <label className="block text-sm font-semibold text-navy mb-2">
                お問い合わせ内容<span className="text-orange ml-1">*</span>
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
              {loading ? "送信中..." : "送信する"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}