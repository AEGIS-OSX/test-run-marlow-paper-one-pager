import { ProjectImage } from "@/app/components/ProjectImage";

export default function About() {
  return (
    <section className="py-[var(--space-section-mobile)] sm:py-[var(--space-section-desktop)]">
      <h2 className="font-[family-name:var(--font-display)] text-[var(--text-heading)] leading-[1.2] tracking-[-0.01em] font-bold mb-[24px]">
        About
      </h2>
      <p className="text-[var(--text-body)] leading-[1.65] mb-[48px]">
        Marlow Paper is a stationer on a quiet street, dedicated to the physical pleasure of ink on paper. We believe that a handwritten note carries a weight that digital messages cannot replicate. Our shop is a place of slow craft and quiet focus, offering a collection of goods that are made to be used and intended to last.
      </p>
      <ProjectImage
        id="feature_1"
        className="w-full aspect-[4/3] object-cover"
      />
    </section>
  );
}
