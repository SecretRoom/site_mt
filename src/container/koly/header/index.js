import React, { useState, useEffect } from 'react'
import Head from '../../../component/koly/header'

const HeadContainer = () => {
  const [buttonActive, setButtonActive] = useState() 
  
  useEffect(() => {
    let active = []
    for (let i = 0; i < 4; i++) {
      if(i===1){
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
      <Head
        handleClick={handleClick}
        buttonActive={buttonActive}
      />
    </>
  )
}

export default HeadContainer;
