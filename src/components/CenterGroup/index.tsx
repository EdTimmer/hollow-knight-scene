import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import BellBeast from "./BellBeast";
import LargeCage from "./LargeCage";

const CenterGroup = () => {
  const centerGroupRef = useRef<THREE.Group>(null);
  const bellBeastGroupRef = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (bellBeastGroupRef.current) {
      bellBeastGroupRef.current.rotation.x += delta * 0.07; // Adjust 0.1 to change rotation speed
    }
    if (centerGroupRef.current) {
      centerGroupRef.current.rotation.x += delta * 0.03;
      centerGroupRef.current.rotation.y += delta * 0.03;
      centerGroupRef.current.rotation.z += delta * 0.03;
    }
  });

  return (<group ref={centerGroupRef} position={[0, 0, 0]}>
      <group ref={bellBeastGroupRef}>
        <BellBeast position={[0, 1.24, 0]} rotation={[0, 0, 0]} scale={0.13} />
      </group>
      <LargeCage position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1.25} rotationSpeed={0.01} />  
    </group>)
} 

export default CenterGroup;
