import "./App.css";

import { useState } from "react";

import { Flex } from "./components/Flex";
import { LotteryNumber } from "./components/LotteryNumber";

const lotteryNumbersAmount = 45;
const selectableLotteryNumbers = 6;

function App() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  function handleLotteryNumberClick(number) {
    if (
      !selectedNumbers.includes(number) &&
      selectedNumbers.length < selectableLotteryNumbers
    ) {
      setSelectedNumbers((prevSelectedNumbers) => [
        ...prevSelectedNumbers,
        number,
      ]);
    }
  }

  return (
    <div className="app">
      <Flex flexDirection="column" gap="1rem">
        <p>
          Picked {selectedNumbers.length} of {selectableLotteryNumbers} numbers
        </p>

        <Flex flexWrap="wrap" gap="0.25rem">
          {Array.from({ length: lotteryNumbersAmount }, (_, index) => (
            <LotteryNumber
              disabled={selectedNumbers.includes(index)}
              key={index}
              value={index}
              onClick={() => handleLotteryNumberClick(index)}
            />
          ))}
        </Flex>

        <p>Selected numbers: {selectedNumbers.join(", ")}</p>

        <button
          disabled={selectedNumbers.length !== selectableLotteryNumbers}
          style={{ padding: "1rem" }}
          onClick={() => console.log("PLAY")}
        >
          Play
        </button>
      </Flex>
    </div>
  );
}

export default App;
