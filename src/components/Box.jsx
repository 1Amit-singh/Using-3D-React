import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Box = () => {
  const boxRef = useRef();

  // Update rotation in each frame
  useFrame((state, delta) => {
    if (boxRef.current) {
      // Update rotation
      boxRef.current.rotation.x += 0 * delta;
      boxRef.current.rotation.y += 0.2 * delta;
    }
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[3.5, 3.5, 3.5]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default Box;
