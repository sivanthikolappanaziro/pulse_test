# pulse_test

A minimal React setup used to exercise Aziron Pulse flows.

## Stack
- React 18 + Vite
- Vitest + React Testing Library for unit tests

## Structure (per `.pulse/.rulebook`)
```
src/
 ├── components/   # presentational (Counter)
 ├── hooks/        # logic (useCounter)
 └── test/         # test setup
```
`Component → Hook` — components render, hooks hold state/logic.

## Commands
```bash
npm install       # install deps
npm run dev       # start dev server
npm test          # run unit tests once
npm run coverage  # run tests with coverage
```

## Counter
`src/components/Counter.jsx` renders a count with increment / decrement / reset.
Logic lives in `src/hooks/useCounter.js`. Unit tests: `src/components/Counter.test.jsx`.
