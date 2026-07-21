import { useEffect, useState } from "react";

// Violates src/components/pr-review.md:
//  - props typed as `any` (no Props interface)
//  - inline style object with static values
//  - data fetching performed inside the component
//  - console.log left in committed code
export function OrderPanel(props: any) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/orders?user=" + props.userId)
      .then((r) => r.json())
      .then((data) => {
        console.log("orders loaded", data);
        setOrders(data);
      });
  }, [props.userId]);

  return (
    <div style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "4px" }}>
      <h2 style={{ fontSize: "18px" }}>Orders for {props.userId}</h2>
      {orders.map((o: any) => (
        <div key={o.id} style={{ marginBottom: "8px" }}>
          <span>{o.reference}</span>
          <span>{o.total}</span>
        </div>
      ))}
    </div>
  );
}
