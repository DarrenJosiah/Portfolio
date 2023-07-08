import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

function Play() {
  return (
    <div className=''>
      <Parallax pages={4} speed={1}>
        
        <ParallaxLayer
          offset={0}
          style={{
            background: `url(../public/MyImages/sp.png)`,
            backgroundSize: 'cover'
          }}>
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}>
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}>
          <h2>Web is fun</h2>
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={2}>
          <h2>My name is jeff</h2>
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={3}>
          <h2>Tanjiro</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Play