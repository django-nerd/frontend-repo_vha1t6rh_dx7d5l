import { Canvas } from '@react-three/fiber'
import { Float, Sparkles, Stars, Grid } from '@react-three/drei'
import * as THREE from 'three'

function NeonTorus({ color = '#60a5fa', position = [0,0,0], scale = 1, rotation = [0,0,0] }) {
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh position={position} rotation={rotation} scale={scale}>
        <torusKnotGeometry args={[1, 0.28, 220, 32, 2, 3]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.6}
          metalness={0.4}
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
}

function HoloOrb({ color = '#fb923c', position = [0,0,0], scale = 1 }) {
  return (
    <Float speed={1.1} rotationIntensity={0.6} floatIntensity={0.9}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.2}
          metalness={0.1}
          roughness={0.1}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function ChainLinks() {
  const links = new Array(8).fill(0)
  return (
    <group>
      {links.map((_, i) => {
        const t = i / links.length
        const angle = t * Math.PI * 2
        const radius = 6
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const rot = [-Math.PI / 2, 0, angle]
        return (
          <mesh key={i} position={[x, 0.5 + Math.sin(angle * 2) * 0.5, z]} rotation={rot}>
            <torusGeometry args={[0.9, 0.18, 16, 60]} />
            <meshStandardMaterial
              color="#60a5fa"
              emissive="#60a5fa"
              emissiveIntensity={1.0}
              roughness={0.3}
              metalness={0.6}
            />
          </mesh>
        )
      })}
    </group>
  )
}

export default function SciFiScene() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 3.5, 10], fov: 55 }} gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}>
        {/* Scene lights */}
        <color attach="background" args={["#05070b"]} />
        <hemisphereLight intensity={0.35} groundColor={new THREE.Color('#0b0f14')} />
        <pointLight position={[6, 6, 4]} intensity={1.6} color={'#60a5fa'} />
        <pointLight position={[-6, 4, -3]} intensity={1.3} color={'#fb923c'} />
        <spotLight position={[0, 10, 0]} angle={0.5} penumbra={0.6} intensity={0.6} color={'#38bdf8'} />

        {/* Neon grid floor */}
        <group position={[0, -1.5, 0]}>
          <Grid
            args={[40, 40]}
            sectionSize={2}
            cellSize={1}
            cellThickness={0.5}
            sectionThickness={1}
            fadeDistance={30}
            fadeStrength={1}
            infiniteGrid
            cellColor="#0ea5e9"
            sectionColor="#fb923c"
          />
        </group>

        {/* Elements */}
        <NeonTorus color="#60a5fa" position={[-2.6, 0.8, 0]} scale={1.2} rotation={[0.2, 0.1, 0]} />
        <NeonTorus color="#fb923c" position={[2.6, 1.2, -1]} scale={0.95} rotation={[0.1, 0.4, -0.1]} />
        <HoloOrb color="#fb923c" position={[0, 2.2, 0]} scale={1.2} />
        <ChainLinks />

        {/* Particles / starfield */}
        <Stars radius={60} depth={40} count={2200} factor={4} saturation={0} fade speed={0.6} />
        <Sparkles color={'#60a5fa'} count={60} size={3} speed={0.2} opacity={0.7} scale={[30, 10, 30]} position={[0, 1, 0]} />
        <Sparkles color={'#fb923c'} count={40} size={2} speed={0.25} opacity={0.5} scale={[26, 8, 26]} position={[0, 1, 0]} />
      </Canvas>

      {/* Scanline overlay for sci‑fi HUD feel */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[length:100%_3px]" />
    </div>
  )
}
