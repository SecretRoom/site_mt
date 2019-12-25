import React from 'react'
import { Link } from 'react-router-dom'
import './index.sass'

const Header = ({
  buttonActive,
  handleClick,
}) => (
  <>
    {buttonActive? (
      <div className='header'>
        <Link to='/morth' className='link'>
          <button 
            className={buttonActive[0]?'button-link-click':'button-link'} 
            onClick={()=>handleClick(0)}
          >
            Morth
          </button>
        </Link>
        <Link to='/test' className='link'>
          <button 
            className={buttonActive[1]?'button-link-click':'button-link'} 
            onClick={()=>handleClick(1)}
          >
            Test
          </button>
        </Link>
        <Link to='/galery' className='link'>
          <button  
            className={buttonActive[2]?'button-link-click':'button-link'} 
            onClick={()=>handleClick(2)}
          >
            Galery
          </button>
        </Link>
        <Link to='/clock' className='link'>
          <button 
            className={buttonActive[3]?'button-link-click':'button-link'} 
            onClick={()=>handleClick(3)}
          >
            Clock
          </button>
        </Link>
      </div>
    ):null}
  </>
)

export default Header;
