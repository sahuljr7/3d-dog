import * as THREE from 'three'

export function createBody(texture: THREE.Texture) {
  const geometry = new THREE.CapsuleGeometry(0.5, 1, 8, 16)
  const material = new THREE.MeshStandardMaterial({ map: texture, color: 0x8B4513 })
  return <primitive object={new THREE.Mesh(geometry, material)} />
}

export function createHead(texture: THREE.Texture) {
  const geometry = new THREE.SphereGeometry(0.35, 32, 32)
  const material = new THREE.MeshStandardMaterial({ map: texture, color: 0x8B4513 })
  return <primitive object={new THREE.Mesh(geometry, material)} />
}

export function createLeg(texture: THREE.Texture) {
  const geometry = new THREE.CylinderGeometry(0.08, 0.08, 0.5, 16)
  const material = new THREE.MeshStandardMaterial({ map: texture, color: 0x8B4513 })
  return <primitive object={new THREE.Mesh(geometry, material)} />
}

export function createTail(texture: THREE.Texture) {
  const geometry = new THREE.CylinderGeometry(0.05, 0.01, 0.5, 16)
  const material = new THREE.MeshStandardMaterial({ map: texture, color: 0x8B4513 })
  return <primitive object={new THREE.Mesh(geometry, material)} />
}

export function createEar(texture: THREE.Texture) {
  const geometry = new THREE.ConeGeometry(0.1, 0.2, 16)
  const material = new THREE.MeshStandardMaterial({ map: texture, color: 0x8B4513 })
  return <primitive object={new THREE.Mesh(geometry, material)} />
}

export function createEye() {
  const eyeGeometry = new THREE.SphereGeometry(0.05, 16, 16)
  const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
  const eye = new THREE.Mesh(eyeGeometry, eyeMaterial)

  const pupilGeometry = new THREE.SphereGeometry(0.02, 16, 16)
  const pupilMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 })
  const pupil = new THREE.Mesh(pupilGeometry, pupilMaterial)
  pupil.position.z = 0.04

  const group = new THREE.Group()
  group.add(eye)
  group.add(pupil)

  return <primitive object={group} />
}

export function createNose() {
  const geometry = new THREE.SphereGeometry(0.05, 16, 16)
  const material = new THREE.MeshBasicMaterial({ color: 0x000000 })
  return <primitive object={new THREE.Mesh(geometry, material)} />
}

