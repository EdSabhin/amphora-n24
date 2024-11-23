export async function getData<T>(
  url: string,
  headers?: Record<string, string>
): Promise<T> {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', ...headers },
    })
    if (!res.ok) {
      throw new Error(
        `Get request failed with status ${res.status}: ${res.statusText}.`
      )
    }
    return await res.json()
  } catch (error) {
    console.error('Error during fetch (GET).', error)
    throw error
  }
}
