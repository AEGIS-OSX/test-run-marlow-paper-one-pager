# TASK SPEC: task-4a

## 1. TASK ID
`task-4a`

## 2. ASSIGNED TO
`agent-workerT1`

## 3. TIER
T1

## 4. TITLE
Wire Hero and About sections into app/page.tsx

## 5. DESCRIPTION
Import the Hero and About components into the main page and render them in the correct order at the top of the page. Ensure the imports use the project's path alias (`@/app/components/...`) and that the components are placed inside the `<main>` element before any other sections.

## 6. FILES TO CREATE
None

## 7. FILES TO MODIFY
- `app/page.tsx`

## 8. DO NOT TOUCH
- `app/components/Hero.tsx`
- `app/components/About.tsx`
- `app/layout.tsx`
- `app/globals.css`

## 9. DEPENDENCIES
- `task-1` (Hero component must exist)
- `task-2` (About component must exist)

## 10. INTERFACE CONTRACT
- `Hero` and `About` are default exports from their respective files.
- They accept no props.
- They are rendered as `<Hero />` and `<About />` inside `<main className="content-container">`.

## 11. ACCEPTANCE CRITERIA
- [ ] `app/page.tsx` imports `Hero` from `@/app/components/Hero`
- [ ] `app/page.tsx` imports `About` from `@/app/components/About`
- [ ] `<Hero />` appears before `<About />` inside `<main>`
- [ ] No syntax errors; `next build` compiles successfully
- [ ] Idiot Test: a new reader can see the two imports and the two JSX tags in the first 10 lines of the file

## 12. BRANCH NAME
`task-4a--wire-hero-about`

## 13. ESTIMATED COMPLEXITY
Low (1 file, 2 imports, 2 JSX tags)
