# API Layer Review Rules — `src/api`

These rules apply **only** to files inside `src/api`. They fully replace the
repository-wide rules in `.pulse/pr-review.md` for this folder.

## Contracts
- Every exported request function must declare an explicit return type.
- Response shapes must be typed; never return `any` or an untyped object.

## Requests
- Every `fetch` call must pass an `AbortSignal` carrying a timeout.
- Never build a URL by concatenating user input. Use `URLSearchParams`.
- Base URLs come from config, never hard-coded in a request function.

## Failure handling
- A failed request must throw `ApiError`. Never return `null` to signal failure.
- Never swallow a rejection with an empty `catch`.
