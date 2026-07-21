import { API_BASE_URL, REQUEST_TIMEOUT_MS } from "../constants/config";
import { ApiError } from "./ApiError";

import type { User } from "../types/user";

function withTimeout(ms: number): AbortSignal {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms);
  return controller.signal;
}

export async function fetchUsers(query: string): Promise<User[]> {
  const params = new URLSearchParams({ q: query });
  const response = await fetch(`${API_BASE_URL}/users?${params.toString()}`, {
    signal: withTimeout(REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new ApiError("Failed to load users", response.status);
  }

  return (await response.json()) as User[];
}
