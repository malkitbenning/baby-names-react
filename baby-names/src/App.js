import React, { useState } from "react";
import babyNamesArray from "./babyNamesData.json";
import BabyNamesContainer from "./BabyNamesContainer";
import FavouritesContainer from "./FavouritesContainer";
import "./App.css";

function App() {
  const [searchName, setSearchName] = useState("");

  const [favouritesList, setFavouritesList] = useState([]);

  function updateSearchName(event) {
    setSearchName(event.target.value);
  }

  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  babyNamesArray.sort(compare);
  const [babyNamesList, setBabyNamesList] = useState(babyNamesArray);

  return (
    <div className="App">
      <input
        className="search-input"
        type="text"
        value={searchName}
        onChange={updateSearchName}
        placeholder="Search for a name..."
      />
      <FavouritesContainer
        babyNamesList={babyNamesList}
        setBabyNamesList={setBabyNamesList}
        favouritesList={favouritesList}
        setFavouritesList={setFavouritesList}
        searchName={searchName}
      />
      <BabyNamesContainer
        babyNamesList={babyNamesList}
        setBabyNamesList={setBabyNamesList}
        favouritesList={favouritesList}
        setFavouritesList={setFavouritesList}
        searchName={searchName}
      />
    </div>
  );
}

export default App;
