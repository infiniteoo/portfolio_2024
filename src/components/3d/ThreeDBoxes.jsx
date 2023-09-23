import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Box(props) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? [1.25, 1.25, 1.25] : [1, 1, 1]}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />{" "}
      {/* Reduced geometry size to 50% of the original */}
      <meshPhysicalMaterial
        color={props.color}
        clearcoat={1}
        clearcoatRoughness={0}
        metalness={0.5}
        roughness={0.2}
        reflectivity={1}
      />
    </mesh>
  );
}

const ThreeDBoxes = () => {
  return (
    <Canvas>
      <ambientLight intensity={1.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <directionalLight position={[-5, 5, 5]} intensity={0.5} />
      <Box position={[-4, 0, 0]} color="rgb(20, 146, 255)" />{" "}
      {/* Adjusted positions */}
      <Box position={[0, 0, 0]} color="rgb(255, 134, 20)" />
      <Box position={[4, 0, 0]} color="rgb(20, 146, 255)" />
    </Canvas>
  );
};

export default ThreeDBoxes;
