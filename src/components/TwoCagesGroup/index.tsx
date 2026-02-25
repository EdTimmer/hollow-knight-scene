import { useRef } from "react";
import * as THREE from "three";
import ComboCageGroup from "../ComboCageGroup";

interface Props {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  rotationSpeed?: number;
}

const TwoCagesGroup = (
  {
    scale = 1,
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    rotationSpeed = 0.01,
  }: Props,
) => {
  const outerGroupRef = useRef<THREE.Group>(null);
  const platformGroupRef = useRef<THREE.Group>(null);

  return (
    <group ref={outerGroupRef} position={position} rotation={rotation} scale={scale}>
      <group ref={platformGroupRef} position={[0, 0, 0]}>
        {/* <SmallCage position={[0, 0.6, 0]} rotation={[0, 0, 0]} scale={0.3} rotationSpeed={rotationSpeed} />
        <SmallCage position={[0, -0.6, 0]} rotation={[0, 0, 0]} scale={0.3} rotationSpeed={rotationSpeed} /> */}
        <ComboCageGroup position={[0, 0.6, 0]} rotation={[0, 0, 0]} scale={1.0} rotationSpeed={rotationSpeed} />
        <ComboCageGroup position={[0, -0.6, 0]} rotation={[0, 0, 0]} scale={1.0} rotationSpeed={rotationSpeed} />
        {/* <directionalLight position={[0, 0, 0.5]} intensity={1} /> */}
      </group>
    </group>
  );
} 

export default TwoCagesGroup;
