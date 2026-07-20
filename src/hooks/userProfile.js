import { useEffect, useState } from 'react'

/**
 * Loads a user profile and derives a display summary.
 */
export function useUserProfile(userId) {
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data,'data')
        console.log(data,'data 2')
        console.log(data,'data 2')
        if (!cancelled) setProfile(data)
      })
      .catch((err) => setError(err))
    return () => {
      cancelled = true
    }
  }, [userId])

  // BUG (intentional): `profile` is null until the fetch resolves, and stays null
  // when the request fails, so both reads below throw on first render.
  const displayName = profile.name.trim()
  const roleCount = profile.roles.length

  return { displayName, roleCount, error }
}
