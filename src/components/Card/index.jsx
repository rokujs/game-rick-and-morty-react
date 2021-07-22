import React, { useState, useCallback, useContext } from "react";

import CardContext from "../../context/CardContext";

import "./index.sass";

function Card({ name, id, image, imageCover }) {
  const [isHidden, setIsHidden] = useState(true);
  const { firstCard, secondCard, setFirstCard, setSecondCard, card, setCard } =
    useContext(CardContext);

  const onClose = useCallback(() => {
    if (!firstCard || !secondCard) {
      setIsHidden(false);
      setTimeout(() => {
        setIsHidden(true);
        if (!firstCard) {
          setFirstCard(false);
        } else {
          if (!secondCard) {
            setSecondCard(false);
          }
        }
      }, 2000);
    }

    if (!firstCard) {
      setFirstCard(true);
      setCard(id);
    } else {
      if (!secondCard) {
        setTimeout(() => {
          if (card === id) alert("You win");
        }, 500);

        setSecondCard(true);
      }
    }
  }, [firstCard, secondCard, setFirstCard, setSecondCard, card]);

  if (isHidden) {
    return (
      <button className="card__button" onClick={onClose}>
        <div className="card">
          <div className="card-image Cover">
            <figure className="image is-1by1">
              <img src={imageCover} alt="Cover" />
            </figure>
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="Card" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="subtitle">
            {id}# {name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
