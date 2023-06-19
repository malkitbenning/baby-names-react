import React, { useState } from "react";
import babyNamesArray from "./babyNamesData.json";
import BabyNamesContainer from "./BabyNamesContainer";
import "./App.css";

function App() {
  const [searchName, setSearchName] = useState("");

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

  return (
    <div className="App">
      <input type="text" value={searchName} onChange={updateSearchName} />
      <BabyNamesContainer
        babyNamesArray={babyNamesArray}
        searchName={searchName}
      />
    </div>
  );
}

export default App;
