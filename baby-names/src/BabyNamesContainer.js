import React from "react";
import "./BabyNamesContainer.css";

const BabyNamesContainer = (props) => {
  console.log(props.searchName);
  let filteredNames = [];
  if (!props.searchName) {
    filteredNames = [...props.babyNamesArray];
  } else {
    filteredNames = props.babyNamesArray.filter((checkName) => {
      return checkName.name
        .toUpperCase()
        .includes(props.searchName.toUpperCase());
    });
  }
  return (
    <section className="baby-names-section">
      {filteredNames.map((aBabyName, index) => {
        return aBabyName.sex === "m" ? (
          <span key={index} className="name-container boy-color">
            {aBabyName.name}
          </span>
        ) : (
          <span key={index} className="name-container girl-color">
            {aBabyName.name}
          </span>
        );
      })}
    </section>
  );
};

export default BabyNamesContainer;
