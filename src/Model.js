import React from "react";
import { useGLTF } from "@react-three/drei";

useGLTF.preload('/model.gltf');

export function Model({ scale = [1, 1, 1], position = [0, 0, 0] }) {
  const { nodes, materials } = useGLTF("/lifeworld.glb");
  return (
    <group scale={scale} position={position} dispose={null}>
      <group position={[0, -0.5, 0]} rotation={[0, 0, 0]}>
        <group position={[-0.15, 0.2, -2.1]} rotation={[-Math.PI, 1.543, -Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0002_1.geometry}
            material={materials["Material_0.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0002_2.geometry}
            material={materials.Material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0002_3.geometry}
            material={materials["Material_0.001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/lifeworld2.glb");
