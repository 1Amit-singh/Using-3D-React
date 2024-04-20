import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={3}>
      <MeshDistortMaterial
        color={"red"}
        attach={"material"}
        distort={0.2}
        speed={2}
        roughness={0.3}
      />
    </Sphere>
  );
};

export default AnimatedSphere;
