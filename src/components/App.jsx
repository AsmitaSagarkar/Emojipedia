import React from "react";
import ReactDOM from "react-dom";
import emoji from "../emoji";
import Entry from "./Entry";
//it is the main file where we have to call the additional file
function CardEntry(details) {
  return (
    <Entry
      id={details.id}
      emoji={details.emoji}
      name={details.name}
      description={details.description}
    />
  );
}

// function App() {
//   return (
//     <div>
//       <h1>
//         <span className="heading">Emojipedia</span>
//       </h1>
//       <dl className="map">{emoji.map(createEntry)}</dl>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      {/* <Entry
        emoji={emoji[0].emoji}
        name={emoji[0].name}
        description={emoji[0].description}
      />

      <Entry
        emoji={emoji[1].emoji}
        name={emoji[1].name}
        description={emoji[1].description}
      />

      <Entry
        emoji={emoji[2].emoji}
        name={emoji[2].name}
        description={emoji[2].description}
      /> */}
      <dl className="card">{emoji.map(CardEntry)}</dl>

      {/* <dl>
        <dt>
          <span>{emoji[1].emoji}</span>
          <span>{emoji[1].name}</span>
        </dt>
        <dd>{emoji[1].description}</dd>
      </dl>

      <dl>
        <dt>
          <span>{emoji[2].emoji}</span>
          <span>{emoji[2].name}</span>
        </dt>
        <dd>{emoji[2].description}</dd>
      </dl> */}
    </div>
  );
}
export default App;
