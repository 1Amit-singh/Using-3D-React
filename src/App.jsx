import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";
import Sphere from "./components/AnimatedSphere";
import Iphone from "./components/Iphone";

const App = () => {
  return (
    <Wrapper>
      <div style={{ height: "400px", padding: "5rem 3rem" }}>
        <Canvas className="canvas" /*style={{ backgroundColor: "red" }}*/>
          <OrbitControls enableZoom={false} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <ambientLight intensity={0.5} />
          <Suspense>
            <Box />
          </Suspense>
        </Canvas>
      </div>

      <div style={{ height: "400px", padding: "5rem 3rem" }}>
        <Canvas className="canvas" /*style={{ backgroundColor: "red" }}*/>
          <OrbitControls enableZoom={false} />
          <directionalLight position={[1, 10, 3]} intensity={1} />
          <ambientLight intensity={0.4} />
          <Suspense>
            <Sphere />
          </Suspense>
        </Canvas>
      </div>

      <div style={{ height: "450px", padding: "2rem 3rem" }}>
        <Canvas className="canvas" /*style={{ backgroundColor: "red" }}*/>
          <OrbitControls enableZoom={false} />
          <directionalLight position={[1, 1, -10]} intensity={1} />
          <directionalLight position={[10, -15, 1]} intensity={1} />
          <directionalLight position={[-3, 4, 15]} intensity={1} />
          <ambientLight intensity={4} />
          <Suspense>
            <Iphone />
          </Suspense>
        </Canvas>
      </div>
    </Wrapper>
  );
};

export default App;
const Wrapper = styled.div`
  position: relative;
  background-color: black;
  display: block;
  .canvas {
    background-color: black;
  }
`;
