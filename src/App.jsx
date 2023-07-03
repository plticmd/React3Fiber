import { useState } from 'react'
import './App.css';
import {Canvas} from "react-three-fiber";
import {OrbitControls, PresentationControls, Float, Text} from "@react-three/drei";
import React, { useRef } from 'react'
import { useGLTF, } from '@react-three/drei'


function App() {
   const macbook = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
   );

   const fryingpan = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/frying-pan/model.gltf"
   );

   const pancake = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/pancakes/model.gltf"
   );

  

  return (
    <div>
      <Canvas camera={{fov: 45, near: 0.1, far: 2000}}>
        <color args={["#2a487c"]} attach="background"/>
        <OrbitControls />
        <ambientLight />
        <directionalLight intensity={1.4}/>
        {/* <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh> */}
      <PresentationControls global
          config={{mass:2, tension: 400}} snap={{mass:4, tension:300}}
      >
        <Float rotationIntensity={1}>
        <rectAreaLight 
          color={"#0021a7"} 
          intensity={100} 
          rotation={[0.1, Math.PI, 0]}
          width={2.0}
          height={10}
          position={[0, 0, -1]}
        />
        <primitive object={macbook.scene} position={[0, -1.5, 0]} />
        </Float>

        <Float rotationIntensity={1}>
        <rectAreaLight 
          color={"#0021a7"} 
          intensity={100} 
          rotation={[0.1, Math.PI, 0]}
          width={2.0}
          height={10}
          position={[0, 0, -1]}
          
        />
        <primitive object={fryingpan.scene} position={[-5, -1.5, 0.2]} scale={[3, 3, 3]} />
        </Float>

        <Float rotationIntensity={3}>
        <rectAreaLight 
          color={"#0021a7"} 
          intensity={100} 
          rotation={[0.1, Math.PI, 0]}
          width={2.0}
          height={10}
          position={[3, 0, 1]}

        />
        <primitive object={pancake.scene} position={[-5, 0, 0.2]} scale={[3, 3, 3]} rotation-x={[0.4]}/>
        </Float>

        <Text>Bi+nance</Text>
        
      </PresentationControls>
     
      </Canvas>
    </div>
  );
}

export default App
