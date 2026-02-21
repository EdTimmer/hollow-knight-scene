import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Platform from "./Platform";
import Hornet from "./Hornet";

const HornetGroup = () => {
  const outerGroupRef = useRef<THREE.Group>(null);
  const platformGroupRef = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (outerGroupRef.current) {
      outerGroupRef.current.rotation.y += delta * 0.1;
    }
    if (platformGroupRef.current) {
      platformGroupRef.current.rotation.y -= delta * 0.1;
    }
  });

  return (
    <group ref={outerGroupRef}>
      <group ref={platformGroupRef} position={[-4.8, -0.3, 0]}>
        <Hornet position={[0, 0.25, 0.2]} rotation={[0, 0, 0]} scale={0.8} />
        <Platform position={[0, 0, 0]} rotation={[0.2, 0, 0]} scale={0.1} />
        <directionalLight position={[0, 0, 5]} intensity={1} />
      </group>
    </group>
  );
} 

export default HornetGroup;
