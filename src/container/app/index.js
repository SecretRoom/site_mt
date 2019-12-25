import React, { useState } from 'react';
import './index.sass'
import Header from '../lera/header'
import Main from '../lera/main'
import Head from '../koly/header'
import MainK from '../koly/main'

const App = () => {
  const [visiable, setVisiable] = useState(true)

  const handleClick = (e) => {
    setVisiable(e)
  }

  return(
    <div className="app">
      {visiable?(
        <div className="body"> {/*lera*/}
          <Header />
          <Main />
        </div>
      ):(
        <div className="body-koly"> {/* koly */}
          <Head />
          <MainK />
        </div>
      )
      }
      <div className="basement">
        <button className={!visiable?"button":"button-click"} onClick={()=>handleClick(true)}>
          <h2>Lera</h2>
        </button>
        <button className={!visiable?"button-click":"button"} onClick={()=>handleClick(false)}>
          <h2>Koly</h2>
        </button>

      </div>
    </div>
  )
}

export default App;
