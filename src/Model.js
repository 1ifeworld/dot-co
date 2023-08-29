import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

useGLTF.preload('/model.gltf');

export function Model(props) {
  const { nodes, materials } = useGLTF("/lifeworld.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.28, -0.09, 0]} rotation={[0.15, -0.2, 0]} scale={0.65}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0.geometry}
          material={materials.Material_0}
          position={[-1.3, 0.2, -1.98]}
          rotation={[0, -1.05, 0]}
          scale={0.95}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0001.geometry}
          material={materials["Material_0.001"]}
          position={[0.9, 0.34, -1.69]}
          rotation={[0, 0.84, 0]}
          scale={1.06}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0002.geometry}
          material={materials["Material_0.002"]}
          position={[-0.18, 0.28, -1.98]}
          rotation={[-Math.PI, 1.54, -Math.PI]}
          scale={0.95}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/lifeworld.glb");
