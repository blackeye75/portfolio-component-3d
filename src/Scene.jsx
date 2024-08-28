import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export const Scene = () => {
  let tex = useTexture("./image.png");
 let cyl= useRef(null)
  useFrame((state,delta)=>{
    cyl.current.rotation.y+=delta;
  })
  return (
    <mesh ref={cyl} rotation={[0, 1.4, 0.5]}>
      <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
      <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
    </mesh>
  );
};
