import React from "react";
import "./FavouritesContainer.css";

const FavouritesContainer = (props) => {
  let filteredNames = [];
  if (!props.searchName) {
    filteredNames = [...props.favouritesList];
  } else {
    filteredNames = props.favouritesList.filter((checkName) => {
      return checkName.name
        .toUpperCase()
        .includes(props.searchName.toUpperCase());
    });
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

  function makeMain(aBabyName) {
    let sortArray = [...props.babyNamesList, aBabyName];
    sortArray.sort(compare);
    props.setBabyNamesList([...sortArray]);
  }
  function removeFromFaveList(index) {
    props.favouritesList.splice(index, 1);
    props.setFavouritesList([...props.favouritesList]);
  }
  return (
    <section className="favourite-names-section">
      <h2>Favourites: </h2>
      {filteredNames.map((aBabyName, index) => {
        return aBabyName.sex === "m" ? (
          <span
            key={index}
            className="name-container boy-color"
            onClick={() => {
              makeMain(aBabyName);
              removeFromFaveList(index);
            }}
          >
            {aBabyName.name}
          </span>
        ) : (
          <span
            key={index}
            className="name-container girl-color"
            onClick={() => {
              makeMain(aBabyName);
              removeFromFaveList(index);
            }}
          >
            {aBabyName.name}
          </span>
        );
      })}
    </section>
  );
};

export default FavouritesContainer;
