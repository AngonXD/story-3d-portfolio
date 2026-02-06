import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import CameraRig from "./CameraRig"

export default function Scene() {
  const scroll = useScroll()
  const cube = useRef()

  useFrame(() => {
    cube.current.rotation.y += 0.01
    cube.current.position.y = scroll.offset * -6
  })

  return (
    <>
      <CameraRig />

      <mesh ref={cube}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#facc15" />
      </mesh>
    </>
  )
}
