import "./App.css";

import { useState } from "react";

import { Flex } from "./components/Flex";
import { LotteryNumber } from "./components/LotteryNumber";
import data from "./assets/constants";

const generateRandomNumber = () => {
  return Math.floor(Math.random() * data.lotteryNumbersAmount) + 1;
};

const getRandomArray = () => {
  let arr = [];

  for (let i = 0; i <= data.selectableLotteryNumbers; i++) {
    arr.push(generateRandomNumber());
  }
  return arr;
};

function App() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [drawnNumbers, setDrawnNumbers] = useState([]);
  const [balance, setBalance] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [mode, setMode] = useState("play");

  function handleLotteryNumberClick(number) {
    if (
      !selectedNumbers.includes(number) &&
      selectedNumbers.length < data.selectableLotteryNumbers
    ) {
      setSelectedNumbers((prevSelectedNumbers) => [
        ...prevSelectedNumbers,
        number,
      ]);
    }
  }

  function handlePlayButtonClick() {
    const drawnNumbers = getRandomArray(6); // [1,2,3,4,5,6] // this is for tests
    console.log(drawnNumbers);
    setDrawnNumbers(drawnNumbers);
    alertMoneyWon(drawnNumbers, selectedNumbers);
  }

  function alertMoneyWon(drawnNumbers, selectedNumbers) {
    let win = 0;
    let guessed = 0;

    drawnNumbers.forEach((guessedNum) => {
      if (selectedNumbers.includes(guessedNum)) {
        guessed++;
      }
    });

    win = data.moneyWon[guessed];
    setBalance(balance - data.ticketCost + win);
    setGamesPlayed(gamesPlayed + 1);
    setMode("see results");
  
   
  }

  return (
    <div className="app">
      <Flex flexDirection="column" gap="1rem">
        <p>
          Picked {selectedNumbers.length} of {data.selectableLotteryNumbers}{" "}
          numbers
        </p>

        <Flex flexWrap="wrap" gap="0.25rem">
          {Array.from({ length: data.lotteryNumbersAmount }, (_, index) => (
            <LotteryNumber
              disabled={selectedNumbers.includes(index + 1)}
              drawn={drawnNumbers.includes(index + 1)}
              key={index + 1}
              value={index + 1}
              onClick={() => handleLotteryNumberClick(index + 1)}
            />
          ))}
        </Flex>

        <p>Selected numbers: {selectedNumbers.join(", ")}</p>
        
        <button
          disabled={(selectedNumbers.length !== data.selectableLotteryNumbers) || mode === 'see results'}
         
          onClick={() => handlePlayButtonClick()}
        >
          Play
        </button>
        

        {!(mode === "see results") ? (
          ""
        ) : (
          <div>
          <button
            style={{ padding: "1rem" }}
            onClick={() => {
              setSelectedNumbers([]);
              setDrawnNumbers([])
              setMode("play");
            }}
          >
           Click here to Reset
          </button>
          <p>Winning numbers were: {drawnNumbers.join(', ')} </p>
          </div>
          
        )}

        <div>Your current balance is {balance} €</div>
        <div>You have played {gamesPlayed} games</div>
      </Flex>
    </div>
  );
}

export default App;
