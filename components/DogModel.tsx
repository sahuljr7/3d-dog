'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Mesh } from 'three'

export default function DogModel() {
  const groupRef = useRef<THREE.Group>(null)

  // Create geometries for different parts of the dog
  const bodyGeometry = new THREE.CylinderGeometry(0.3, 0.4, 1, 8, 1)
  const headGeometry = new THREE.CylinderGeometry(0.2, 0.3, 0.5, 8, 1)
  const snoutGeometry = new THREE.CylinderGeometry(0.1, 0.2, 0.4, 8, 1)
  const legGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.5, 8, 1)
  const tailGeometry = new THREE.CylinderGeometry(0.05, 0.08, 0.3, 8, 1)

  // Create material with wireframe
  const material = new THREE.MeshStandardMaterial({
    color: 0x000000,
    wireframe: true,
    wireframeLinewidth: 2,
  })

  const solidMaterial = new THREE.MeshStandardMaterial({
    color: 0x000000,
    roughness: 0.7,
    metalness: 0.1,
  })

  return (
    <group ref={groupRef}>
      {/* Body */}
      <group position={[0, 0.25, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <mesh geometry={bodyGeometry} material={solidMaterial} castShadow receiveShadow />
        <mesh geometry={bodyGeometry} material={material} />
      </group>

      {/* Head */}
      <group position={[0.6, 0.4, 0]} rotation={[0, 0, -Math.PI / 2.5]}>
        <mesh geometry={headGeometry} material={solidMaterial} castShadow />
        <mesh geometry={headGeometry} material={material} />
      </group>

      {/* Snout */}
      <group position={[0.9, 0.3, 0]} rotation={[0, 0, -Math.PI / 2.5]}>
        <mesh geometry={snoutGeometry} material={solidMaterial} castShadow />
        <mesh geometry={snoutGeometry} material={material} />
      </group>

      {/* Legs */}
      <group position={[0.3, 0, 0.2]}>
        <mesh geometry={legGeometry} material={solidMaterial} castShadow />
        <mesh geometry={legGeometry} material={material} />
      </group>
      <group position={[0.3, 0, -0.2]}>
        <mesh geometry={legGeometry} material={solidMaterial} castShadow />
        <mesh geometry={legGeometry} material={material} />
      </group>
      <group position={[-0.3, 0, 0.2]}>
        <mesh geometry={legGeometry} material={solidMaterial} castShadow />
        <mesh geometry={legGeometry} material={material} />
      </group>
      <group position={[-0.3, 0, -0.2]}>
        <mesh geometry={legGeometry} material={solidMaterial} castShadow />
        <mesh geometry={legGeometry} material={material} />
      </group>

      {/* Tail */}
      <group position={[-0.6, 0.4, 0]} rotation={[0, 0, Math.PI / 4]}>
        <mesh geometry={tailGeometry} material={solidMaterial} castShadow />
        <mesh geometry={tailGeometry} material={material} />
      </group>
    </group>
  )
}

