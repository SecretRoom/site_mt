import React from 'react'
import galery from '../../flash/galery.swf'

const Galery = () => (
  <div className="galery">
      <object classID="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0">
        <param name="movie" value={galery} />
        <param name="quality" value="high" />
        <param name="wmode" value="transparent" />
        <embed src={galery} className="content__flash" width="500" height="500" quality="high" type="application/x-shockwave-flash" wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" />
      </object>
  </div>
)

export default Galery;
