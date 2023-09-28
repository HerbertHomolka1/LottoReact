const markThatButton = (isChecked, setIsChecked, numOfChecked,setNumOfChecked, howManyButtonsShouldBePicked)  => {
    
    // console.log(
    //      howManyButtonsShouldBePicked,
    //      numOfChecked,
    //    )
    console.log(numOfChecked, howManyButtonsShouldBePicked)
    if (numOfChecked < howManyButtonsShouldBePicked) {
      
      setIsChecked((isChecked) => !isChecked);
      setNumOfChecked((numOfChecked) =>
        isChecked ? numOfChecked - 1 : numOfChecked + 1
      );
    } else {
      if (isChecked === true) {
        setNumOfChecked((numOfChecked) => numOfChecked - 1);
        setIsChecked(false);
      }
    }
  };


export default markThatButton;