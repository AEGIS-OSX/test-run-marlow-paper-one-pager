# TASK SPEC: task-4d

## 1. TASK ID
`task-4d`

## 2. ASSIGNED TO
`agent-workerT2`

## 3. TIER
T2

## 4. TITLE
Verify global styles and responsive container alignment

## 5. DESCRIPTION
Ensure `app/globals.css` defines the design-token variables and utility classes required by all sections, and that `app/page.tsx` applies the correct container class. Verify responsive padding, section spacing, and typography variables are present and consistent with the Marlow Paper design system.

## 6. FILES TO CREATE
None

## 7. FILES TO MODIFY
- `app/globals.css`
- `app/page.tsx`

## 8. DO NOT TOUCH
- `app/components/*.tsx`
- `app/layout.tsx`

## 9. DEPENDENCIES
- `task-4a` (page structure must exist)
- `task-4b` (page structure must exist)
- `task-4c` (page structure must exist)

## 10. INTERFACE CONTRACT
- `app/page.tsx` root element is `<main className="content-container">`.
- `app/globals.css` defines `:root` CSS custom properties for colors, fonts, text sizes, spacing, and max-width.
- `app/globals.css` defines `.content-container` with `max-width: var(--content-max-width)`, auto margins, and responsive padding.
- `app/globals.css` defines `.divider` with `border-top: 1px solid var(--color-divider)`.

## 11. ACCEPTANCE CRITERIA
- [ ] `app/page.tsx` uses `<main className="content-container">`
- [ ] `:root` in `globals.css` contains all required CSS variables (`--color-bg`, `--color-text`, `--color-accent`, `--font-display`, `--font-body`, `--text-hero`, `--text-heading`, `--text-body`, `--text-detail`, `--space-section-desktop`, `--space-section-mobile`, `--space-padding-desktop`, `--space-padding-mobile`, `--content-max-width`)
- [ ] `.content-container` class exists with max-width, auto margins, and responsive padding via `@media (min-width: 640px)`
- [ ] `.divider` class exists
- [ ] No syntax errors; `next build` compiles successfully
- [ ] Idiot Test: a new reader can see the CSS variables and the container class in the first 30 lines of each file

## 12. BRANCH NAME
`task-4d--verify-styles-container`

## 13. ESTIMATED COMPLEXITY
Low-Medium (2 files, CSS variable verification, no new logic)
