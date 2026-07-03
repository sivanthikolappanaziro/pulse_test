import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter.jsx'

// INTENTIONALLY FAILING — added to demonstrate a "real failure" test run in Pulse.
// The Counter starts at `initialValue` (0 here); this test wrongly asserts it starts at 1.
describe('Counter (intentional failure)', () => {
  it('starts at 1 by default (WRONG on purpose)', () => {
    render(<Counter />)
    // Actual rendered value is 0, so this assertion fails.
    expect(screen.getByTestId('count')).toHaveTextContent('1')
  })

  it('shows 5 after a single increment from 0 (WRONG on purpose)', async () => {
    const user = userEvent.setup()
    render(<Counter initialValue={0} />)
    await user.click(screen.getByLabelText('increment'))
    // One increment from 0 with step 1 yields 1, not 5.
    expect(screen.getByTestId('count')).toHaveTextContent('5')
  })
})
