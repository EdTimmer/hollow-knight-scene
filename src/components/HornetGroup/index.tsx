import { useRef } from "react";
import * as THREE from "three";
import Hornet from "./Hornet";

const HornetGroup = () => {
  const outerGroupRef = useRef<THREE.Group>(null);
  const platformGroupRef = useRef<THREE.Group>(null);

  return (
    <group ref={outerGroupRef}>
      <group ref={platformGroupRef} position={[0, -0.16, 0]}>
        <Hornet position={[0, 0.16, 0]} rotation={[0, 0, 0]} scale={1.3} />
        <directionalLight position={[-1.3, -0.2, 0.5]} intensity={1.0} />
        <directionalLight position={[1.3, -0.2, 0.5]} intensity={1.0} />
      </group>
    </group>
  );
} 

export default HornetGroup;
