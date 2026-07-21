import React from "react";

interface GreetingProps {
  name: string;
}

export function Greeting({ name }: GreetingProps) {
  return (
    <section aria-label="Greeting">
      <h1>Hello, {name}!</h1>
      <p>Welcome to the app.</p>
    </section>
  );
}
