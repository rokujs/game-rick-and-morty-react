import { API } from './setting'

export default async function getOneCharacter ({ id }) {
  try {
    const response = await fetch(`${API}/character/${id}`)
    const data = response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}
