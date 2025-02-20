'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function PhoneModel() {
    const phoneRef = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (phoneRef.current) {
            phoneRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1 + 0.4
            phoneRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
        }
    })

    return (
        <group ref={phoneRef}>
            {/* Cuerpo principal del teléfono */}
            <mesh position={[0, 0, 0]} castShadow>
                <boxGeometry args={[2, 4, 0.2]} />
                <meshStandardMaterial color="#2A2A2E" metalness={0.6} roughness={0.2} />
            </mesh>

            {/* Pantalla */}
            <mesh position={[0, 0, 0.11]}>
                <boxGeometry args={[1.8, 3.8, 0.01]} />
                <meshStandardMaterial color="#000000" metalness={0.5} roughness={0.2} />
            </mesh>

            {/* Detalles de la pantalla - líneas de código simuladas */}
            <mesh position={[0, 0.5, 0.12]}>
                <planeGeometry args={[1.6, 3]} />
                <meshBasicMaterial color="#1a1a1a">
                    <canvasTexture attach="map" />
                </meshBasicMaterial>
            </mesh>

            {/* Botón circular */}
            <mesh position={[0, -1.7, 0.11]}>
                <cylinderGeometry args={[0.15, 0.15, 0.01, 32]} />
                <meshStandardMaterial color="#333333" metalness={0.7} roughness={0.2} />
            </mesh>
        </group>
    )
} 