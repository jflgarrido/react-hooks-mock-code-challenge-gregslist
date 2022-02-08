import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({cards, onDeleteACard}) {
  

  const displayCards = cards.map((card) => {
    return <ListingCard 
        card={card} 
        key={card.id} 
        onDeleteACard={onDeleteACard}/>
  })

  return (
    <main>
      <ul className="cards">
        {displayCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
