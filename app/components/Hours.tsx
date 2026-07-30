export default function Hours() {
  return (
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
  );
}
