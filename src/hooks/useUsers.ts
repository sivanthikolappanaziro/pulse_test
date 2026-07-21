import { useEffect, useState } from "react";

import { fetchUsers } from "../api/userApi";

import type { User } from "../types/user";

export function useUsers(query: string) {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);

    fetchUsers(query)
      .then((result) => {
        if (!cancelled) setUsers(result);
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [query]);

  return { users, isLoading, error };
}
