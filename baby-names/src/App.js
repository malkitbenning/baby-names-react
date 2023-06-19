import babyNamesArray from "./babyNamesData.json";
import "./App.css";

function App() {
  console.log(babyNamesArray);

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
      <section className="baby-names-section">
        {babyNamesArray.map((aBabyName) => {
          return aBabyName.sex === "m" ? (
            <span className="name-container boy-color">{aBabyName.name}</span>
          ) : (
            <span className="name-container girl-color">{aBabyName.name}</span>
          );
        })}
      </section>
    </div>
  );
}

export default App;
