const startGame = (numOfChecked, howManyButtonsShouldBePicked) => {
    console.log(numOfChecked === howManyButtonsShouldBePicked)
    if (numOfChecked === howManyButtonsShouldBePicked) {
        let bank = Array.from({ length: 45 }, (_, i) => i + 1);
        let drawnNumbers = [];

        for (let i = 0; i < howManyButtonsShouldBePicked; i++) {
            const indexBankArr = Math.floor(Math.random() * bank.length);
            let drawnNumber = bank[indexBankArr];
            bank.splice(indexBankArr, 1);
            drawnNumbers.push(drawnNumber);
        }
        console.log(drawnNumbers)
   
    } else {
        alert('pick 6 numbers please.')
    }
};

export default startGame;
