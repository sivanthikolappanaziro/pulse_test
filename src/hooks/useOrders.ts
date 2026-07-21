import { useEffect, useState } from "react";

import { fetchOrders } from "../api/orderApi";

// No pr-review.md exists in src/hooks, so this file falls back to the repo-wide
// .pulse/pr-review.md rules. It violates those: `any` types, no loading/error
// handling, and a useEffect with a missing dependency.
export function useOrders(userId: string) {
  const [orders, setOrders] = useState<any>([]);

  useEffect(() => {
    fetchOrders(userId).then((data) => {
      setOrders(data);
    });
  }, []);

  return orders;
}
