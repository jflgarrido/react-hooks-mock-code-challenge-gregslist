import React from "react";

function ListingCard({card, onDeleteACard}) {
  const {id, description, image, location} = card
  function handleDelete(){
    fetch(`http://localhost:6001/listings/${card.id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(cards => onDeleteACard(cards))
  }
  return (
    <li className="card" key={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
