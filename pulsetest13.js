import React from "react";

export default function UserCard({ user }) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="user-card">
      <span className="avatar">{initials}</span>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    <p>{user.address}</p>
    <p>{user.street}</p>
    </div>
  );
}
