import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTheme } from '../hooks/useTheme'

function Shape({ mousePosition }) {
  const mesh = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!mesh.current) return

    const time = state.clock.elapsedTime

    mesh.current.rotation.x += 0.003
    mesh.current.rotation.y += 0.005

    const targetRotX = (mousePosition.y - 0.5) * 0.3
    const targetRotY = (mousePosition.x - 0.5) * 0.3

    mesh.current.rotation.x += (targetRotX - mesh.current.rotation.x) * 0.02
    mesh.current.rotation.y += (targetRotY - mesh.current.rotation.y) * 0.02

    mesh.current.position.y = Math.sin(time * 0.5) * 0.2
  })

  return (
    <mesh
      ref={mesh}
      scale={hovered ? 1.1 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[1, 4]} />
      <meshStandardMaterial
        color="#ef4444"
        roughness={0.2}
        metalness={0.8}
        emissive="#ef4444"
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

export const Scene3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  const { isDark } = useTheme()

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    })
  }

  return (
    <div className="w-full h-full" onMouseMove={handleMouseMove}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={isDark ? 0.3 : 0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ef4444" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
        <Shape mousePosition={mousePosition} />
      </Canvas>
    </div>
  )
}
