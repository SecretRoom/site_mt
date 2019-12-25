import React from 'react'

function ready (callback) {
  if (document.readyState !== 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback());
}


     const setLogo = () => {
      if(document.getElementById('canvas')){
        let canv = document.getElementById('canvas')
    
        let ctx = canv.getContext('2d')
        
        canv.width = window.innerWidth
        
        canv.height = window.innerHeight
        
        let w=100
        let img = new Image(); 
        setTimeout("drawLogo()",10)
        
        let rad = 0
            
        const  drawLogo = () => {
        
          img.onload = () => {
        
            let pattern = ctx.createPattern(img, "no-repeat"); 
            ctx.fillStyle = pattern; 
            ctx.rect(0, 0, window.innerWidth,window.innerHeight); 
            ctx.fill(); 
            
              let gr = ctx.createLinearGradient(window.innerWidth/2-w, window.innerHeight/2-w, window.innerWidth/2+w,  window.innerHeight/2+w); 
              gr.addColorStop(0, "white"); 
              gr.addColorStop(0.5, "#3e4040");
              gr.addColorStop(1, "black");
        
              ctx.fillStyle = gr 
              ctx.beginPath(); 
              ctx.arc(window.innerWidth/2-w/2, window.innerHeight/2-w/2, w, 0, 2*Math.PI, true); 		
              ctx.fill(); 
        
        
              ctx.fillStyle = "#26236e" 
              ctx.beginPath(); 
              ctx.arc(window.innerWidth/2-w/2, window.innerHeight/2-w/2, w-5, 5*Math.PI/6-0.1+rad, 7*Math.PI/4+0.3+rad, true)	
              ctx.fill();
        
        
              ctx.fillStyle = "#f72525" 
              ctx.beginPath(); 
              ctx.arc(window.innerWidth/2-w/2, window.innerHeight/2-w/2, w-5, Math.PI-Math.PI/6+rad, Math.PI+3*Math.PI/4+rad, false)	
              ctx.fill();
        
              rad+=0.05
          }
            
          setTimeout("drawLogo()",50)
        }
    }
    
  }
  const Logo = () => {

    return(
      <div className='Logo'>
          {/* <canvas id="canvas" style="display: block;"> U mad bro.</canvas> */}
      </div>
    )
  }

export default Logo;