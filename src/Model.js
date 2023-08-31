import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model({ scale = [1, 1, 1], position = [0, 0, 0] }) {
  const { nodes, materials } = useGLTF("/lifeworld.glb");
  return (
    <group scale={scale} position={position} dispose={null}>
      <group
        position={[-0.55, -1.1, -1.2]}
        rotation={[Math.PI, -0.052, Math.PI]}
        scale={[2.085, 1, 1.974]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shadow001.geometry}
          material={materials.shadow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shadow001_1.geometry}
          material={materials["Material_0.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shadow001_2.geometry}
          material={materials.Material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shadow001_3.geometry}
          material={materials["Material_0.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shadow001_4.geometry}
          material={materials.colorchart}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shadow001_5.geometry}
          material={materials["Material_0.003"]}
        />
      </group>
    </group>
  );
}
