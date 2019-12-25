import React from 'react'
import { Link } from 'react-router-dom'
import '../../koly/header/index.sass'

const Head = ({
  buttonActive,
  handleClick,
}) => (
  <>
    {buttonActive? (
      <div className='header-koly'>
        <Link to='/morth' className='link'>
          <button 
            className={buttonActive[0]?'button-link-click':'button-link'} 
            onClick={()=>handleClick(0)}
          >
            <h2>Morth</h2>
          </button>
        </Link>
        <Link to='/test' className='link'>
          <button 
            className={buttonActive[1]?'button-link-click':'button-link'} 
            onClick={()=>handleClick(1)}
          >
            <h2>Test</h2>
          </button>
        </Link>
        <Link to='/galery' className='link'>
          <button  
            className={buttonActive[2]?'button-link-click':'button-link'} 
            onClick={()=>handleClick(2)}
          >
            <h2>Galery</h2>
          </button>
        </Link>
        <Link to='/clock' className='link'>
          <button 
            className={buttonActive[3]?'button-link-click':'button-link'} 
            onClick={()=>handleClick(3)}
          >
            <h2>Clock</h2>
          </button>
        </Link>
      </div>
    ):null}
  </>
)

export default Head;
