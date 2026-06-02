import { useEffect } from "react";

function sendGAEvent(eventName: string, params: Record<string, string | number>) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, params);
  }
}

export function useAnalytics() {
  useEffect(() => {
    // スクロール深度計測
    const depths = new Set<number>();
    const onScroll = () => {
      const scrolled =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      [25, 50, 75, 100].forEach((depth) => {
        if (scrolled >= depth && !depths.has(depth)) {
          depths.add(depth);
          sendGAEvent("scroll_depth", {
            event_category: "engagement",
            event_label: `${depth}%スクロール`,
            value: depth,
          });
        }
      });
    };

    // 滞在時間計測（30秒・60秒・120秒）
    const timers = [30, 60, 120].map((sec) =>
      setTimeout(() => {
        sendGAEvent("time_on_page", {
          event_category: "engagement",
          event_label: `${sec}秒滞在`,
          value: sec,
        });
      }, sec * 1000)
    );

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      timers.forEach(clearTimeout);
    };
  }, []);
}