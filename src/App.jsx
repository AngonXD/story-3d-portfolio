import { Canvas } from "@react-three/fiber"
import { ScrollControls } from "@react-three/drei"
import Scene from "./components/Scene"
import ChapterText from "./components/ChapterText"

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <ScrollControls pages={4} damping={0.2}>
          <Scene />
        </ScrollControls>
      </Canvas>

      <div className="scroll">
        <ChapterText />
      </div>
    </>
  )
}
