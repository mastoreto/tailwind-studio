/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, type ThreeEvent, useThree } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import * as THREE from 'three';

import { useElementSlice } from '@tstudio/stores/elementProps';

interface DraggableSquareProps {
    position: [number, number, number];
    color: string;
}


const DraggableSquare: React.FC<DraggableSquareProps> = ({ position, color }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const { size, camera } = useThree(); // Obtenemos tamaño de pantalla y cámara
  const [dragging, setDragging] = useState(false);
  const [cursor, setCursor] = useState('auto');
  const width = useElementSlice((state) => state.width);
  const height = useElementSlice((state) => state.height);



  const onPointerDown = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setDragging(true);
    setCursor('pointer');
  };

  const onPointerUp = () => {
    setDragging(false);
    setCursor('auto');
  };

  useEffect(() => {
    const onPointerMove = (event: MouseEvent) => {
        if (dragging && mesh.current) {
          // Convertir las coordenadas del mouse a las coordenadas de la cámara ortográfica
          const x = (event.clientX / size.width) * 2 - 1;
          const y = -(event.clientY / size.height) * 2 + 1;
    
          // Usamos un vector3 para proyectar las coordenadas 2D en el espacio 3D
          const vector = new THREE.Vector3(x, y, 0).unproject(camera);
    
          // Actualizamos la posición del objeto
          mesh.current.position.x = vector.x;
          mesh.current.position.y = vector.y;
        }
      };

    if (dragging) {
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    } else {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    }

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [camera, dragging, size.height, size.width]);

  return (
    <mesh
      ref={mesh}
      position={position}
      onPointerDown={(event) => onPointerDown(event)}
    >
      <boxGeometry args={[width, height, 0]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
        className='z-1'
    >
      {/* Usar una cámara ortográfica para un espacio 2D */}
      <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={50} />
      
      {/* Fondo */}
      <color attach="background" args={["#ffffff"]} />

      {/* Objeto draggable */}
      <DraggableSquare position={[0, 0, 0]} color="blue" />
      <DraggableSquare position={[-2, 2, 0]} color="green" />
    </Canvas>
  );
};

export default App;
