import { useState } from "react";
import './Card.css'


function Card({ isDrawn = 'false',isMarked = 'false',onclick, id , ButtonType = 'lottoButton'}) {
  const [drawn, setDrawn] = useState(isDrawn);  
  const [isChecked, setIsChecked] = useState(isMarked);
    const baseStyles = {width : '160px',
                    padding : '25px',
                    border: '1px solid black',
                    margin : '5px'}

    const checkedStyles = {
        ...baseStyles,
        backgroundColor: 'rgba(0, 255, 0, 0.15)'
    };
    const uncheckedStyles = {
      ...baseStyles,
      backgroundColor : 'white'
  }

    const playGameStyles = {
      ...baseStyles,
      width : "1190px"
    }
    
    const lottoButtonText =`${isChecked ? 'X' : id}`;
    const gamebuttonText = 'Click here to play once you picked all numbers!';
  
    return (
      <>
        <button className="card" 
                style={ ButtonType === 'lottoButton' ? (isChecked ? checkedStyles : uncheckedStyles) : playGameStyles} 

                onClick = {()=>  
                  onclick(isChecked, setIsChecked,) 
                }
                
                >
          
              {ButtonType === 'lottoButton' ? lottoButtonText : gamebuttonText  }
   
        </button>
      </>
    )
  };

  export default Card;