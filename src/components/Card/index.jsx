import React, { useState, useCallback } from "react";

import "./index.sass";

function Card({ name, id, image }) {
  const [isHidden, setIsHidden] = useState(true);

  const onClose = useCallback(() => {
    setIsHidden(false);
    console.log("nana");
    setTimeout(() => {
      setIsHidden(true);
    }, 4000);
  }, [])
  
  if (isHidden) {
    return (
      <button className="card__button" onClick={onClose}>
        <div className="card">
          <div className="card-image Cover">
            <figure className="image is-1by1">
              <img
                src="https://i.pinimg.com/originals/5b/53/73/5b537363393dc26c68b566fe482eb32d.png"
                alt="Cover"
              />
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
