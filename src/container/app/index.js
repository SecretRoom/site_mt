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
          <div className="body"> {/* koly */}
            <Head />
            <MainK />
          </div>
        )
      }
      <div className="basement">
        <button className="button-left" onClick={()=>handleClick(true)}>
          lera
        </button>
        <button className="button-right" onClick={()=>handleClick(false)}>
          koly
        </button>

      </div>
    </div>
  )
}

export default App;
