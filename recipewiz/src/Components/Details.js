import React from "react";

function Details({ recipe }) {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        className="br-100 h3 w3 dib"
        alt={recipe?.name}
        src={process.env.PUBLIC_URL + "/assets/images/chicken.jpeg"}
      />
      <div>
        <h2>{recipe?.name}</h2>
        <h2>Rating {recipe?.rating} / 5</h2>
      </div>
    </div>
  );
}

export default Details;
