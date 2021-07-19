import React, { useEffect, useState } from "react";
import Card from "../Card";
import getCharacters from "../../services/getCharacters";

function ListOfCards() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters()
      .then(data => {
        setLoading(true)
        setError(false)
        const { info, results } = data;
  console.log(info);
 

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
    <Card key={id} id={id} image={image} name={nameCharacter} />
  ));
}

export default ListOfCards;
