import { API } from './setting'

export default async function getCharacters ({ newUrl } = {}) {
  const url = newUrl || `${API}/character/`
  try {
    const response = await fetch(url)
    const data = response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}
