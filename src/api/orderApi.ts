// Violates src/api/pr-review.md:
//  - no explicit return type on an exported request function
//  - fetch without an AbortSignal / timeout
//  - URL built by concatenating user input instead of URLSearchParams
//  - returns null on failure instead of throwing ApiError, and swallows the rejection
export async function fetchOrders(userId: string) {
  try {
    const response = await fetch("https://api.example.com/orders?user=" + userId);
    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch (e) {
    return null;
  }
}

export async function cancelOrder(orderId: string) {
  const response = await fetch("https://api.example.com/orders/" + orderId + "/cancel", {
    method: "POST",
  });
  return response.json();
}
