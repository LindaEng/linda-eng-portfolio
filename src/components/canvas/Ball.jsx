import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three'
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'


const Ball = (props) => {
  const meshRef = useRef()
  const [decal] = useTexture([props.imgUrl])

  const [propsSpring, set] = useSpring(() => ({
    rotation: [0,0,0],
    config: { friction: 50 }
  }))

  const onPointerOver = () => set({ rotation: [0, 2 * Math.PI ,0] })
  const onPointerOut = () => set({ rotation: [0, 0, 0] })

  return (
    <a.mesh 
    ref={meshRef} 
    castShadow 
    receiveShadow 
    scale={2.75} 
    {...propsSpring}
    onPointerOver={onPointerOver}
    onPointerOut={onPointerOut}
    >

        <ambientLight intensity={0.75} />
        <directionalLight position={[0,0,0.05]} />
          <icosahedronGeometry args={[1,1]} />
          <meshStandardMaterial 
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0,0,1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
            map={decal}
          />
    </a.mesh>
  )
}

const BallCanvas = ({icon}) => {
  return(
    <>
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls
          enableZoom={false}
        />
        <Ball imgUrl={icon}/>
      </Suspense>
      <Preload all />
    </Canvas>
    </>
  )
}

export default BallCanvas