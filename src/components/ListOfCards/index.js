import React, { useEffect, useState } from "react";
import Card from "../Card";
import getCharacters from "../../services/getCharacters";

const IMAGE_COVER = "https://i.pinimg.com/originals/5b/53/73/5b537363393dc26c68b566fe482eb32d.png"

function ListOfCards() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const imageCover = new Image()
    imageCover.src = IMAGE_COVER
    getCharacters()
      .then(data => {
        setLoading(true)
        setError(false)
        const { info, results } = data;
        console.log(info);

        results.forEach(({ image }) => {
          const img = new Image()
          img.src = image
        })

        setCharacters(results)
      })
      .catch(err => {
        console.error(err);
        setError(true)
        setLoading(false)
      })
  }, [])


  if (error) {
    return <p>Error...</p>
  }

  if (!loading) {
    return <p>Loading...</p>
  }

  return characters.map(({ id, name: nameCharacter, image }) => (
    <>
      <Card key={id} id={id} image={image} name={nameCharacter} imageCover={IMAGE_COVER} />
      <Card key={id + "_copy"} id={id} image={image} name={nameCharacter} imageCover={IMAGE_COVER} />
    </>
  ));
}

export default ListOfCards;
