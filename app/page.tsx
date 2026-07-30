import { ProjectImage } from "@/app/components/ProjectImage";

export default function Home() {
  return (
    <main className="max-w-[var(--content-max-width)] mx-auto px-[var(--space-padding-mobile)] sm:px-[var(--space-padding-desktop)]">
      {/* SECTION 1 — HERO */}
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

      {/* SECTION 2 — ABOUT */}
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

      {/* SECTION 3 — PRODUCTS */}
      <section className="py-[var(--space-section-mobile)] sm:py-[var(--space-section-desktop)]">
        <h2 className="font-[family-name:var(--font-display)] text-[var(--text-heading)] leading-[1.2] tracking-[-0.01em] font-bold mb-[24px]">
          Products
        </h2>
        <ul className="text-[var(--text-detail)] leading-[1.5] tracking-[0.01em] text-[var(--color-text)] space-y-[8px]">
          <li className="flex justify-between items-baseline">
            <span>Heavy Cream Envelopes (Set of 10)</span>
            <span>12.00</span>
          </li>
          <li className="flex justify-between items-baseline">
            <span>Leather Bound Journal</span>
            <span>34.00</span>
          </li>
          <li className="flex justify-between items-baseline">
            <span>Brass Desk Weight</span>
            <span>28.00</span>
          </li>
          <li className="flex justify-between items-baseline">
            <span>Cotton Fiber Letterhead (50 Sheets)</span>
            <span>22.00</span>
          </li>
          <li className="flex justify-between items-baseline">
            <span>Refillable Fountain Pen</span>
            <span>45.00</span>
          </li>
        </ul>
      </section>

      {/* SECTION 4 — HOURS */}
      <section className="py-[var(--space-section-mobile)] sm:py-[var(--space-section-desktop)]">
        <h2 className="font-[family-name:var(--font-display)] text-[var(--text-heading)] leading-[1.2] tracking-[-0.01em] font-bold mb-[24px]">
          Hours
        </h2>
        <div className="text-[var(--text-detail)] leading-[1.5] tracking-[0.01em] text-[var(--color-text-secondary)]">
          <p>Monday to Friday: 10:00 to 18:00</p>
          <p>Saturday: 11:00 to 16:00</p>
          <p>Sunday: Closed</p>
        </div>
      </section>

      {/* SECTION 5 — FOOTER */}
      <footer className="py-[var(--space-section-mobile)] sm:py-[var(--space-section-desktop)] border-t border-[var(--color-divider)] pt-[24px]">
        <div className="text-[var(--text-detail)] leading-[1.5] tracking-[0.01em] text-[var(--color-text-secondary)]">
          <p>1224 Oak Street, Portland, Oregon</p>
          <p>503.555.0192</p>
        </div>
      </footer>
    </main>
  );
}
