import styles from "./UserCard.module.css";

import type { User } from "../types/user";

interface UserCardProps {
  user: User;
  onSelect?: (id: string) => void;
}

export function UserCard({ user, onSelect }: UserCardProps) {
  if (!user) return null;

  return (
    <article className={styles.card} onClick={() => onSelect?.(user.id)}>
      <img className={styles.avatar} src={user.avatarUrl} alt={`${user.name} avatar`} />
      <h3 className={styles.name}>{user.name}</h3>
      <p className={styles.email}>{user.email}</p>
    </article>
  );
}
