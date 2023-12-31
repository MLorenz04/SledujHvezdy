/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.11 public/models/scene.gltf 
Author: Loïc Norgeot (https://sketchfab.com/norgeotloic)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/need-some-space-d6521362b37b48e3a82bce4911409303
Title: Need some space?
*/

import React, { useRef, useFrame, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Cookies from "universal-cookie";
import { path_page } from "../config";
/**
 * Komponent Galaxie, který slouží jako pozadí
 * @param {*} props Vstupní parametry pro vykreslení
 * @returns Export komponentu
 * @author Matyáš Lorenz
 */
export function GalaxyMesh(props) {
  const cookies = new Cookies();
  const { nodes, materials } = useGLTF(path_page + "/models/scene.gltf");
  const { gl, camera } = useThree();
  var start_x = 3.557;
  var start_y = 3.294;
  var start_z = -3.636;
  if (cookies.get("cords") == null) {
    camera.position.x = start_x;
    camera.position.y = start_y;
  } else {
    camera.position.x = cookies.get("cords")[0];
    camera.position.y = cookies.get("cords")[1];
  }
  camera.position.z = start_z;
  window.addEventListener("mousemove", (e) => {
    const maxMovement = 0.5;

    const mouseXNormalized_x = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseXNormalized_y = (e.clientY / window.innerWidth) * 2 - 1;
    const cameraMovement_x = mouseXNormalized_x * maxMovement;
    const cameraMovement_y = mouseXNormalized_y * maxMovement;
    var clampedCameraMovement_x = Math.max(
      -0.5,
      Math.min(0.5, cameraMovement_x)
    );
    var clampedCameraMovement_y = Math.max(
      -0.5,
      Math.min(0.5, cameraMovement_y)
    );
    camera.position.x = start_x + clampedCameraMovement_x;
    camera.position.y = start_y + clampedCameraMovement_y;
    cookies.set("cords", [camera.position.x, camera.position.y], { path: "/" });
  });
  window.addEventListener("click", (e) => {
    let pos = {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
      scale: camera.scale,
    };
  });

  return (
    <group {...props} dispose={null}>
      <points
        geometry={nodes.Object_2.geometry}
        material={materials["Scene_-_Root"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.015}
      />
    </group>
  );
}

export const Galaxy = () => <GalaxyMesh />;

useGLTF.preload(path_page + "/models/scene.gltf");
