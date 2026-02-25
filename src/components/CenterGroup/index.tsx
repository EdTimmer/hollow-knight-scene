import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import BellBeast from "./BellBeast";
import LargeCage from "./LargeCage";
import Ball from "../TwoCagesGroup/Ball";

const CenterGroup = () => {
  const centerGroupRef = useRef<THREE.Group>(null);
  const bellBeastGroupRef = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (bellBeastGroupRef.current) {
      bellBeastGroupRef.current.rotation.z += delta * 0.07; // rotation speed
    }
    if (centerGroupRef.current) {
      centerGroupRef.current.rotation.x += delta * 0.03;
      // centerGroupRef.current.rotation.y += delta * 0.03;
      // centerGroupRef.current.rotation.z += delta * 0.03;
    }
  });

  return (<group ref={centerGroupRef} position={[0, 0, 0]}>
      <group ref={bellBeastGroupRef}>
        <BellBeast position={[0, 1.24, 0]} rotation={[0, -Math.PI / 2, 0]} scale={0.13} />
      </group>
      <LargeCage position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1.25} rotationSpeed={0.01} />

      {/* <SmallCage position={[-1.1, 0, 0]} rotation={[0, 0, 0]} scale={0.1} rotationSpeed={0.01} variant="gold" />
      <SmallCage position={[1.1, 0, 0]} rotation={[0, 0, 0]} scale={0.1} rotationSpeed={0.01} variant="gold" /> */}

      <Ball position={[-1, 0, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.1} rotationSpeed={0.01} />
      <Ball position={[1, 0, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.1} rotationSpeed={0.01} />

      {/* <SmallCage position={[0, 0.9, 0]} rotation={[0, 0, 0]} scale={0.2} rotationSpeed={0.02} variant="blue" />
      <SmallCage position={[0, -0.9, 0]} rotation={[0, 0, 0]} scale={0.2} rotationSpeed={0.02} variant="blue" /> */}
    </group>)
} 

export default CenterGroup;
