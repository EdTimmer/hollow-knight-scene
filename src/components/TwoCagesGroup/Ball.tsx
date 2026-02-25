import { forwardRef, useRef, useEffect, useImperativeHandle, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { SkeletonUtils } from "three-stdlib";

interface Props {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  rotationSpeed?: number;
  variant?: "gold" | "blue";
}

const Ball = forwardRef<THREE.Group, Props>(
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
      "/models/ribbed_ball1.glb"
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

export default Ball;