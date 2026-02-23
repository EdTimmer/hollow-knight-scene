import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import SmallCage from "../TwoCagesGroup/SmallCage";

interface Props {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  rotationSpeed?: number;
}

const ComboCageGroup = (
  {
    scale = 1,
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    rotationSpeed = 0.01,
  }: Props,
) => {
  const outerGroupRef = useRef<THREE.Group>(null);
  const platformGroupRef = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (outerGroupRef.current) {
      outerGroupRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <group ref={outerGroupRef} position={position} rotation={rotation} scale={scale}>
      <group ref={platformGroupRef} position={[0, 0, 0]}>
        <SmallCage position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.3} rotationSpeed={rotationSpeed} variant="blue" />
        {/* <SmallCage position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.2} rotationSpeed={rotationSpeed} variant="gold" /> */}
        {/* <directionalLight position={[0, 0, 0.5]} intensity={1} /> */}
      </group>
    </group>
  );
} 

export default ComboCageGroup;
