import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useThree } from "@react-three/fiber"

export default function CameraRig() {
  const scroll = useScroll()
  const { camera } = useThree()

  useFrame(() => {
    camera.position.z = 6 - scroll.offset * 4
    camera.position.y = scroll.offset * -3
  })

  return null
}
