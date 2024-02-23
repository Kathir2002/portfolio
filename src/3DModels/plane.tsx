import { useAnimations, useGLTF } from "@react-three/drei";
// @ts-ignore
import planeScene from "../assets/3DFiles/plane.glb";
import { useEffect, useRef } from "react";

const Plane = ({ isRotating, ...props }: any) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions }: any = useAnimations(animations, ref);
  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
