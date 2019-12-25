import React, { useState, useEffect } from 'react'
import Header from '../../../component/lera/header'

const HeaderContainer = () => {
  const [buttonActive, setButtonActive] = useState() 
  
  useEffect(() => {
    let active = []
    for (let i = 0; i < 4; i++) {
      if(i===3){
        active.push(true)      
      } else {
        active.push(false)
      }      
    }
    setButtonActive(active)
  },[])

  const handleClick = (num) => {
    if(!buttonActive[num]){
      let active = []
      for (let i = 0; i < 4; i++){
        if(i===num){
          active.push(true)      
        } else {
          active.push(false)
        }      
      }
      setButtonActive(active)
    }
  }

  return(
    <>
      <Header
        handleClick={handleClick}
        buttonActive={buttonActive}
      />
    </>
  )
}

export default HeaderContainer;
