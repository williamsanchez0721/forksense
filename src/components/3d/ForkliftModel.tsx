'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ForkliftModel() {
    const forkliftRef = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (forkliftRef.current) {
            forkliftRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
            forkliftRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
        }
    })

    return (
        <group ref={forkliftRef}>
            {/* Base del montacargas */}
            <mesh castShadow position={[0, 0, 0]}>
                <boxGeometry args={[2, 1, 3]} />
                <meshStandardMaterial color="#2A2A2E" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Cabina */}
            <mesh castShadow position={[0, 1, -0.5]}>
                <boxGeometry args={[2, 1.5, 1.5]} />
                <meshStandardMaterial color="#2A2A2E" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Mástil */}
            <mesh castShadow position={[0, 1, 1.5]}>
                <boxGeometry args={[0.3, 3, 0.3]} />
                <meshStandardMaterial color="#444" metalness={0.6} roughness={0.3} />
            </mesh>

            {/* Horquillas */}
            <mesh castShadow position={[-0.5, 0.5, 2]}>
                <boxGeometry args={[0.2, 0.1, 1.5]} />
                <meshStandardMaterial color="#666" metalness={0.7} roughness={0.2} />
            </mesh>
            <mesh castShadow position={[0.5, 0.5, 2]}>
                <boxGeometry args={[0.2, 0.1, 1.5]} />
                <meshStandardMaterial color="#666" metalness={0.7} roughness={0.2} />
            </mesh>

            {/* Ruedas */}
            <mesh castShadow position={[-1, -0.3, -0.8]}>
                <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
                <meshStandardMaterial color="#111" metalness={0.5} roughness={0.4} />
            </mesh>
            <mesh castShadow position={[1, -0.3, -0.8]}>
                <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
                <meshStandardMaterial color="#111" metalness={0.5} roughness={0.4} />
            </mesh>
            <mesh castShadow position={[-1, -0.3, 0.8]}>
                <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
                <meshStandardMaterial color="#111" metalness={0.5} roughness={0.4} />
            </mesh>
            <mesh castShadow position={[1, -0.3, 0.8]}>
                <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
                <meshStandardMaterial color="#111" metalness={0.5} roughness={0.4} />
            </mesh>
        </group>
    )
} 