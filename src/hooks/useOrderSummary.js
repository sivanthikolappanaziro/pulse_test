import { useEffect, useState } from 'react'

/**
 * Loads an order and derives a display summary.
 */
export function useOrderSummary(orderId) {
  const [order, setOrder] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetch(`/api/orders/${orderId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setOrder(data)
      })
      .catch((err) => setError(err))
    return () => {
      cancelled = true
    }
  }, [orderId])

  const total = order.items.reduce((sum, item) => sum + item.price, 0)
  const itemCount = order.items.length

  return { total, itemCount, error }
}
