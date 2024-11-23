export async function postData<T, U>(
  url: string,
  body: T,
  headers?: Record<string, string>
): Promise<U> {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
    })
    if (!res.ok) {
      throw new Error(
        `Get request failed with status ${res.status}: ${res.statusText}.`
      )
    }
    return await res.json()
  } catch (error) {
    console.error('Error during fetch (POST).', error)
    throw error
  }
}
