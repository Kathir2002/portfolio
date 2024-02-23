import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
// @ts-ignore
import skyScene from "../assets/3DFiles/sky.glb";
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating, ...props }: any) => {
  const sky = useGLTF(skyScene);
  const skyRef: any = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh {...props} ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
