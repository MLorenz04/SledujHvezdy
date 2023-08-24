import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Galaxy } from "./Galaxy";
/**
 * Výkres pozadí s možností pohybu
 * @returns Export komponentu
 * @author Matyáš Lorenz
 */
export const GalaxyBackground = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} enableRotate={false}></OrbitControls>
      <Galaxy />
    </Canvas>
  );
};
