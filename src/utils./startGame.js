const startGame = (numOfButtons,howManyButtonsShouldBePicked) => {
    console.log(howManyButtonsShouldBePicked)
    const drawnNumbers = [];
    for (let i = 0; i < howManyButtonsShouldBePicked; i++) {
      
      const drawnNumber = Math.floor(Math.random() * numOfButtons)+1;
      drawnNumbers.push(drawnNumber)
      
    }
    console.log(drawnNumbers)
  };

  export default startGame;