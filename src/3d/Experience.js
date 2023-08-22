import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Galaxy } from "./Galaxy";
export const GalaxyBackground = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} enableRotate={false}></OrbitControls>
      <Galaxy />
    </Canvas>
  );
};
