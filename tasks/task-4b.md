# TASK SPEC: task-4b

## 1. TASK ID
`task-4b`

## 2. ASSIGNED TO
`agent-workerT1`

## 3. TIER
T1

## 4. TITLE
Wire Products and Hours sections into app/page.tsx

## 5. DESCRIPTION
Import the Products and Hours components into the main page and render them in the correct order after the About section and before the Footer. Ensure the imports use the project's path alias (`@/app/components/...`) and that the components are placed inside the `<main>` element.

## 6. FILES TO CREATE
None

## 7. FILES TO MODIFY
- `app/page.tsx`

## 8. DO NOT TOUCH
- `app/components/Products.tsx`
- `app/components/Hours.tsx`
- `app/layout.tsx`
- `app/globals.css`

## 9. DEPENDENCIES
- `task-3` (Products component must exist)
- `task-3` (Hours component must exist)
- `task-4a` (Hero and About must already be wired, to preserve order)

## 10. INTERFACE CONTRACT
- `Products` and `Hours` are default exports from their respective files.
- They accept no props.
- They are rendered as `<Products />` and `<Hours />` inside `<main className="content-container">`.

## 11. ACCEPTANCE CRITERIA
- [ ] `app/page.tsx` imports `Products` from `@/app/components/Products`
- [ ] `app/page.tsx` imports `Hours` from `@/app/components/Hours`
- [ ] `<Products />` appears before `<Hours />` inside `<main>`
- [ ] Both appear after `<About />` and before `<Footer />`
- [ ] No syntax errors; `next build` compiles successfully
- [ ] Idiot Test: a new reader can see the two imports and the two JSX tags in the first 10 lines of the file

## 12. BRANCH NAME
`task-4b--wire-products-hours`

## 13. ESTIMATED COMPLEXITY
Low (1 file, 2 imports, 2 JSX tags)
