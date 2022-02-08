import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(cards => setCards(cards))
  }, [])

  function handleDeleteACard(deletedCard){
    const updatedCardList = cards.filter((card) => {
      return card.id === !deletedCard
    })
    setCards(updatedCardList)
  }

  const displayedCards = cards.filter((card) => {
    return card.description.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="app">
      <Header onSearch={setSearch} />
      <ListingsContainer 
        cards={displayedCards} 
        onDeleteACard={handleDeleteACard}/>
    </div>
  );
}

export default App;
