import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Cat } from './Cat';

function ElementShow() {

    const objectRef = useRef();
    useFrame(() => {
      objectRef.current.rotation.y-= 0.001;
    })

    return(
        <>
            {/* OrbitControls - helps move camera around a fixed point */}
            <OrbitControls target0={[0, 0.35, 0]} maxPolarAngle={3.14} /> 

            {/* forwardbackward / updown / leftright */}
            <PerspectiveCamera makeDefault fov={40} position={[6.2, 1, -7.2]} />

            {/* Mesh – a  Three.js class that represents a 3D object in the scene */}
            <mesh ref={ objectRef }>
              <Cat />
            </mesh>

            {/* What you're doing for args is by telling Three.js -> let color = new Color(0,0,0); */}
            {/* Background = black */}
            {/* <color args={[1, 0.3, 0]} attach="background"/> */}
            <color args={[0.8, 0.1, 0]} attach="background"/>

            <spotLight 
              intensity={1.5}
              angle={3.14}
              penumbra={0.5}
              position={[5, 5, 0]}
            />

            {/* Lights cast on Cat's belly */}
            <spotLight
                color={[0.14, 0.5, 1]}
                intensity={1} 
                angle={2}
                position={[5, 5, 0]}
                castShadow
            />
        </>
    )
}

export default function Model() {
  return (
    // Suspense - a feature in the React library for handling asynchronous rendering
    <Suspense fallback={null}> 
      {/* Canvas - Three.js uses to render 3D graphics */}
      <Canvas shadows>
        <ElementShow />
      </Canvas>
    </Suspense>
  )
}