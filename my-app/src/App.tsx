import { useState } from "react";
import "./App.css";
import { list } from "./list";

function App() {
  const [count, setCount] = useState(0);
  console.log(list);
  return (
    <>
      <h1>React - {list[0].title}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ul>
          {list[0].persons.map((li, i) =>
            li.oui === "oui" ? (
              <li key={i}>
                {li.nom} - {li.prenom} - {li.age}
              </li>
            ) : null
          )}
        </ul>
      </div>
    </>
  );
}

export default App;