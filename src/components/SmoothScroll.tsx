import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import { setLenis } from "@/lib/scroll";

function LenisSync() {
  const lenis = useLenis();

  useEffect(() => {
    setLenis(lenis ?? null);
    return () => setLenis(null);
  }, [lenis]);

  return null;
}

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const lenisOptions = {
  autoRaf: true,
  anchors: true,
  lerp: prefersReducedMotion ? 1 : 0.1,
  smoothWheel: !prefersReducedMotion,
  wheelMultiplier: 0.9,
} satisfies NonNullable<React.ComponentProps<typeof ReactLenis>["options"]>;

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={lenisOptions}>
      <LenisSync />
      {children}
    </ReactLenis>
  );
}
