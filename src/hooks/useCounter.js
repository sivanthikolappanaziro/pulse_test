import { useState, useCallback } from 'react'

// useCounter holds the counter state + transitions (per repo rulebook: logic lives in hooks,
// components stay presentational). `initialValue` seeds the count; `step` sizes each change.
export function useCounter(initialValue = 0, step = 1) {
  const [count, setCount] = useState(initialValue)

  const increment = useCallback(() => setCount((c) => c + step), [step])
  const decrement = useCallback(() => setCount((c) => c - step), [step])
  const reset = useCallback(() => setCount(initialValue), [initialValue])

  return { count, increment, decrement, reset }
}
