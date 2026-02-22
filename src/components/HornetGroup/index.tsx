import { useRef } from "react";
import * as THREE from "three";
import Hornet from "./Hornet";

const HornetGroup = () => {
  const outerGroupRef = useRef<THREE.Group>(null);
  const platformGroupRef = useRef<THREE.Group>(null);

  return (
    <group ref={outerGroupRef}>
      <group ref={platformGroupRef} position={[0, 0, 0]}>
        <Hornet position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1.4} />
        {/* <Platform position={[0, 0, 0]} rotation={[0.2, 0, 0]} scale={0.1} /> */}
        <directionalLight position={[0, 0, 0.5]} intensity={1} />
      </group>
    </group>
  );
} 

export default HornetGroup;
