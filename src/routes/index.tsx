import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problems } from "@/components/landing/Problems";
import { Features } from "@/components/landing/Features";
import { Benefits } from "@/components/landing/Benefits";
import { Steps } from "@/components/landing/Steps";
import { Faq } from "@/components/landing/Faq";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { useAnalytics } from "@/hooks/use-analytics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DishBoard｜飲食店の経営を、データで変える" },
      { name: "description", content: "売上・経費・シフトをひとつの画面で。飲食店向け経営ダッシュボード DishBoard。複数店舗運営にも対応。" },
      { property: "og:title", content: "DishBoard｜飲食店の経営を、データで変える" },
      { property: "og:description", content: "売上・経費・シフトをひとつの画面で。店舗運営をもっとシンプルに。" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  useAnalytics();

  return (
    <main>
      <Navbar />
      <Hero />
      <Problems />
      <Features />
      <Benefits />
      <Steps />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}