import { ProjectImage } from "@/app/components/ProjectImage";

export default function Hero() {
  return (
    <section className="py-[var(--space-section-mobile)] sm:py-[var(--space-section-desktop)]">
      <h1 className="font-[family-name:var(--font-display)] text-[clamp(48px,6vw,72px)] leading-[1.0] tracking-[-0.02em] font-bold text-[var(--color-accent)] mb-[16px]">
        Marlow Paper
      </h1>
      <p className="text-[var(--text-body)] leading-[1.65] text-[var(--color-text)] mb-[48px]">
        Objects of craft and permanence for the desk and the hand.
      </p>
      <ProjectImage
        id="hero"
        className="w-full aspect-[4/3] object-cover"
      />
    </section>
  );
}
