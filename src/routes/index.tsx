import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problems } from "@/components/landing/Problems";
import { DataIntegration } from "@/components/landing/DataIntegration";
import { Features } from "@/components/landing/Features";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { Steps } from "@/components/landing/Steps";
import { Faq } from "@/components/landing/Faq";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { useAnalytics } from "@/hooks/use-analytics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DishBoard｜飲食店の経営データを、ひとつに。" },
      { name: "description", content: "シフト・売上・経費の3データを統合。FL比率の自動計算から税理士書類の一括出力まで。飲食店向け経営管理プラットフォーム DishBoard。" },
      { property: "og:title", content: "DishBoard｜飲食店の経営データを、ひとつに。" },
      { property: "og:description", content: "シフト・売上・経費の3データを統合。FL比率の自動計算から税理士書類の一括出力まで。" },
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
      <DataIntegration />
      <Features />
      <BeforeAfter />
      <Steps />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}