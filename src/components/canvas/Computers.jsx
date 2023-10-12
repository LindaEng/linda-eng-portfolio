import { Suspense, useEffect, useState } from 'react';
import { MeshStandardMaterial } from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./terranium/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={5.15} groundColor="black" />
      <pointLight intensity={2} />
      <spotLight 
        position={[0, -1.5, -3.20]}
        angle={0.42}
        penumbra={4}
        intensity={6}
        castShadow
        shadow-mapSize={400}
      />
      <primitive 
        object={computer.scene}
        scale={2}
        position={[-1, -3.20, -2.5]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <>
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [10, 3, 19], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
    </>
  );
};

export default ComputersCanvas;
