import React from "react";
import "./BabyNamesContainer.css";

const BabyNamesContainer = (props) => {
  let filteredNames = [];
  if (!props.searchName) {
    filteredNames = [...props.babyNamesList];
  } else {
    filteredNames = props.babyNamesList.filter((checkName) => {
      return checkName.name
        .toUpperCase()
        .includes(props.searchName.toUpperCase());
    });
  }
  function makeFavourite(aBabyName) {
    props.setFavouritesList([...props.favouritesList, aBabyName]);
  }
  function removeFromMainList(index) {
    props.babyNamesList.splice(index, 1);
    props.setBabyNamesList([...props.babyNamesList]);
  }
  return (
    <section className="baby-names-section">
      {filteredNames.map((aBabyName, index) => {
        return aBabyName.sex === "m" ? (
          <span
            key={index}
            className="name-container boy-color"
            onClick={() => {
              makeFavourite(aBabyName);
              removeFromMainList(index);
            }}
          >
            {aBabyName.name}
          </span>
        ) : (
          <span
            key={index}
            className="name-container girl-color"
            onClick={() => {
              makeFavourite(aBabyName);
              removeFromMainList(index);
            }}
          >
            {aBabyName.name}
          </span>
        );
      })}
    </section>
  );
};

export default BabyNamesContainer;
