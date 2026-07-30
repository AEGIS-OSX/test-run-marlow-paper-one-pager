export default function Products() {
  return (
    <section className="py-[var(--space-section-mobile)] sm:py-[var(--space-section-desktop)]">
      <h2 className="font-[family-name:var(--font-display)] text-[var(--text-heading)] leading-[1.2] tracking-[-0.01em] font-bold mb-[24px]">
        Products
      </h2>
      <ul className="text-[var(--text-detail)] leading-[1.5] tracking-[0.01em] text-[var(--color-text)] space-y-[8px]">
        <li>Heavy Cream Envelopes (Set of 10) . . . 12.00</li>
        <li>Leather Bound Journal . . . 34.00</li>
        <li>Brass Desk Weight . . . 28.00</li>
        <li>Cotton Fiber Letterhead (50 Sheets) . . . 22.00</li>
        <li>Refillable Fountain Pen . . . 45.00</li>
      </ul>
    </section>
  );
}
