import React from "react";
import "../Cards/Cards.css"

function Cards() {
  return (
    <div>
      <p className="topArtistList">Top Artist List</p>

      <div className="container">
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap"></img>
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
