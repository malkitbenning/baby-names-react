import React, { useState } from "react";
import babyNamesArray from "./babyNamesData.json";
import BabyNamesContainer from "./BabyNamesContainer";
import FavouritesContainer from "./FavouritesContainer";
import "./App.css";

function App() {
  const [genderFilter, setGenderFilter] = useState("a");
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
  const babyNamesList = babyNamesArray;

  let [babyNamesListFiltered, setBabyNamesListFiltered]
  = useState(babyNamesArray);

  function allNames() {
    setGenderFilter("a");
    setBabyNamesListFiltered([...babyNamesList]);
  }
  function girlsOnly() {
    setGenderFilter("f");
    let filterArray = babyNamesArray.filter((aName) => {
      return aName.sex === "f";
    });
    setBabyNamesListFiltered(filterArray);
  }
  function boysOnly() {
    setGenderFilter("m");
    let filterArray = babyNamesArray.filter((aName) => {
      return aName.sex === "m";
    });
    setBabyNamesListFiltered(filterArray);
  }

  return (
    <div className="App">
      <div>
        <input
          className="search-input"
          type="text"
          value={searchName}
          onChange={updateSearchName}
          placeholder="Search for a name..."
        />
        <button
          type="button"
          onClick={allNames}
          className={genderFilter === "a" ? "btn-red" : "btn-blue"}
        >
          all
        </button>
        <button
          type="button"
          onClick={girlsOnly}
          className={genderFilter === "f" ? "btn-red" : "btn-blue"}
        >
          female
        </button>
        <button
          type="button"
          onClick={boysOnly}
          className={genderFilter === "m" ? "btn-red" : "btn-blue"}
        >
          male
        </button>
      </div>

      <FavouritesContainer
        babyNamesList={babyNamesListFiltered}
        setBabyNamesList={setBabyNamesListFiltered}
        favouritesList={favouritesList}
        setFavouritesList={setFavouritesList}
        searchName={searchName}
      />
      <BabyNamesContainer
        babyNamesList={babyNamesListFiltered}
        setBabyNamesList={setBabyNamesListFiltered}
        favouritesList={favouritesList}
        setFavouritesList={setFavouritesList}
        searchName={searchName}
      />
    </div>
  );
}

export default App;
