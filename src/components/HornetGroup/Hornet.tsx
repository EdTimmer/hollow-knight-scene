import { forwardRef, useRef, useEffect, useImperativeHandle } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

interface Props {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  rotationSpeed?: number;
}

const Hornet = forwardRef<THREE.Group, Props>(
  (
    {
      scale = 1,
      position = [0, 0, 0],
      rotation = [0, 0, 0],
    },
    ref
  ) => {
    const parentGroupRef = useRef<THREE.Group>(null);
    const groupRef = useRef<THREE.Group>(null);

    // forward groupRef to the parent ref (callback or object)
    useImperativeHandle(ref, () => groupRef.current!);

    const { animations, scene } = useGLTF(
      "/models/hornet3.glb"
    );

    const { actions } = useAnimations(animations, parentGroupRef);

    useEffect(() => {
      Object.values(actions).forEach((a) => a && a.play());
    }, [actions]);

    // set initial rotation
    useEffect(() => {
      if (groupRef.current) {
        groupRef.current.rotation.set(
          rotation[0],
          rotation[1],
          rotation[2]
        );
      }
    }, [rotation]);

    return (
      <group ref={parentGroupRef} position={position}>
        <primitive
          ref={groupRef}
          object={scene}
          rotation={rotation}
          scale={scale}
        />
      </group>
    );
  }
);

export default Hornet;