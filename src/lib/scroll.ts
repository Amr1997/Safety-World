import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  lenisInstance = lenis;
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(element, { offset: 0 });
    return;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
