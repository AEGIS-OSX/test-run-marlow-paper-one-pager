# TASK SPEC: task-4c

## 1. TASK ID
`task-4c`

## 2. ASSIGNED TO
`agent-workerT1`

## 3. TIER
T1

## 4. TITLE
Wire Footer into app/page.tsx and verify layout metadata

## 5. DESCRIPTION
Import the Footer component into the main page and render it as the last element inside `<main>`. Additionally, verify that `app/layout.tsx` contains the correct page metadata (title and description) for the Marlow Paper brand.

## 6. FILES TO CREATE
None

## 7. FILES TO MODIFY
- `app/page.tsx`
- `app/layout.tsx`

## 8. DO NOT TOUCH
- `app/components/Footer.tsx`
- `app/globals.css`

## 9. DEPENDENCIES
- `task-3` (Footer component must exist)
- `task-4b` (Products and Hours must already be wired, to preserve order)

## 10. INTERFACE CONTRACT
- `Footer` is a default export from `@/app/components/Footer`.
- It accepts no props.
- It is rendered as `<Footer />` as the last child of `<main>`.
- `layout.tsx` exports a `metadata` object with `title: "Marlow Paper"` and `description` containing "Objects of craft and permanence for the desk and the hand."

## 11. ACCEPTANCE CRITERIA
- [ ] `app/page.tsx` imports `Footer` from `@/app/components/Footer`
- [ ] `<Footer />` is the last child inside `<main>`
- [ ] `app/layout.tsx` contains `title: "Marlow Paper"`
- [ ] `app/layout.tsx` contains the correct description string
- [ ] No syntax errors; `next build` compiles successfully
- [ ] Idiot Test: a new reader can see the Footer import and tag, and the metadata object, in the first 10 lines of each file

## 12. BRANCH NAME
`task-4c--wire-footer-metadata`

## 13. ESTIMATED COMPLEXITY
Low (2 files, 1 import + 1 tag + metadata verification)
