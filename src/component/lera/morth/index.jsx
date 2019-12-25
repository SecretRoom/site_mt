import React from 'react'
import morth from '../../../flash/morth.swf'

const Morth = () => {

  return(
    <div className='morth'>
      <object classID="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0">
        <param name="movie" value={morth} />
        <param name="quality" value="high" />
        <param name="wmode" value="transparent" />
        <embed src={morth} className="content__flash" width={window.innerWidth} height={window.innerHeight/1.5} quality="high" type="application/x-shockwave-flash" wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" />
      </object>
    </div>
  )
}


export default Morth;
