# Component Review Rules — `src/components`

These rules apply **only** to files inside `src/components`. They fully replace the
repository-wide rules in `.pulse/pr-review.md` for this folder.

## Props
- Every component must declare a typed `Props` interface. `any` props are rejected.
- Props must be destructured in the signature.

## Size and shape
- A component file must stay under 80 lines.
- One exported component per file.

## Styling
- No inline `style={{ ... }}` objects except for values computed at runtime.
- Use the shared CSS module for all static styling.

## Data
- No data fetching inside a component. Call a hook from `src/hooks` instead.
- No `console.log` left in committed component code.
