'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Grid } from '@react-three/drei'
import DogModel from './DogModel'

export default function DogScene() {
  return (
    <Canvas shadows camera={{ position: [4, 4, 4], fov: 50 }}>
      <color attach="background" args={['#f5f5f5']} />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <DogModel />
      <Grid
        args={[10, 10]}
        cellSize={1}
        cellThickness={0.5}
        cellColor="#ffa500"
        sectionSize={3}
        fadeStrength={1}
        fadeDistance={30}
        position={[0, -0.01, 0]}
      />
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
    </Canvas>
  )
}

