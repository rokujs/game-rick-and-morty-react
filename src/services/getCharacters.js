import { API } from './setting'

export default async function getCharacters() {
  
  try {
    const response = await fetch(`${API}/character/`)
    const data = response.json()

    return data
  } catch (error) {
    console.error(error);
  }
}