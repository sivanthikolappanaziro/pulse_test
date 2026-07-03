import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter.jsx'

describe('Counter', () => {
  it('renders the initial value', () => {
    render(<Counter initialValue={5} />)
    expect(screen.getByTestId('count')).toHaveTextContent('5')
  })

  it('defaults to 0 when no initial value is given', () => {
    render(<Counter />)
    expect(screen.getByTestId('count')).toHaveTextContent('0')
  })

  it('increments and decrements by the step', async () => {
    const user = userEvent.setup()
    render(<Counter initialValue={0} step={2} />)

    await user.click(screen.getByLabelText('increment'))
    expect(screen.getByTestId('count')).toHaveTextContent('2')

    await user.click(screen.getByLabelText('decrement'))
    expect(screen.getByTestId('count')).toHaveTextContent('0')
  })

  it('resets back to the initial value', async () => {
    const user = userEvent.setup()
    render(<Counter initialValue={3} />)

    await user.click(screen.getByLabelText('increment'))
    await user.click(screen.getByLabelText('increment'))
    expect(screen.getByTestId('count')).toHaveTextContent('5')

    await user.click(screen.getByLabelText('reset'))
    expect(screen.getByTestId('count')).toHaveTextContent('3')
  })
})
