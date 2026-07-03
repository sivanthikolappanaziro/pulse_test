import { useCounter } from '../hooks/useCounter.js'

// Counter is presentational: it renders state from useCounter and wires buttons to its actions.
// No business logic here (Component -> Hook per the repo rulebook).
function Counter({ initialValue = 0, step = 1 }) {
  const { count, increment, decrement, reset } = useCounter(initialValue, step)

  return (
    <section>
      <p>
        Count: <span data-testid="count">{count}</span>
      </p>
      <button type="button" onClick={decrement} aria-label="decrement">
        -
      </button>
      <button type="button" onClick={increment} aria-label="increment">
        +
      </button>
      <button type="button" onClick={reset} aria-label="reset">
        Reset
      </button>
    </section>
  )
}

export default Counter
