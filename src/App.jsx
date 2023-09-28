import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import markThatButton from "./utils./markTjatButton.js";
import startGame from "./utils./startGame";

function App() {

  const numOfButtons = 45;
  const howManyButtonsShouldBePicked = 6;

  const [numOfChecked, setNumOfChecked] = useState(0);

  let myCards = Array.from({ length: numOfButtons }, (_, i) => (
    <Card
      key={i}
      id={i + 1}
      isMarked={false}
      onclick={(isChecked,setIsChecked) => // it only works when i pass isChecked,setIsChecked but not howManyButtonsShouldBePicked, I dont understand why
        markThatButton(isChecked, setIsChecked, numOfChecked, setNumOfChecked, howManyButtonsShouldBePicked)}
    />
  ));

  const playLottoCard = (
    <Card
      ButtonType="playButton"
      isMarked={false}
      onclick={() =>
        startGame(numOfButtons,howManyButtonsShouldBePicked)
      }
    />
  );

  return (
    <div>
      <div className="flex-center">
        Picked {numOfChecked} of {howManyButtonsShouldBePicked} numbers.
      </div>
      <div className="flex-center">{myCards}</div>
      {playLottoCard}
    </div>
  );
}

export default App;
