import { forwardRef, useRef, useEffect, useImperativeHandle, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { SkeletonUtils } from "three-stdlib";

interface Props {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  rotationSpeed?: number;
}

const SmallCage = forwardRef<THREE.Group, Props>(
  (
    {
      scale = 1,
      position = [0, 0, 0],
      rotation = [0, 0, 0],
      rotationSpeed = 0.01,
    },
    ref
  ) => {
    const parentGroupRef = useRef<THREE.Group>(null);
    const groupRef = useRef<THREE.Group>(null);

    // forward groupRef to the parent ref (callback or object)
    useImperativeHandle(ref, () => groupRef.current!);

    const { animations, scene } = useGLTF(
      "/models/small_island1.glb"
    );
    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

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

    useFrame((_state, delta) => {
      if (groupRef.current) {
        groupRef.current.rotation.x += rotationSpeed * delta * 4;
        groupRef.current.rotation.y += rotationSpeed * delta * 4;
        groupRef.current.rotation.z += rotationSpeed * delta * 4;
      }
    });

    return (
      <group ref={parentGroupRef} position={position}>
        <primitive
          ref={groupRef}
          object={clone}
          rotation={rotation}
          scale={scale}
        />
      </group>
    );
  }
);

export default SmallCage;