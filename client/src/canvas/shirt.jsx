import React, { useState, useEffect } from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

import state from '../store';

const Shirt = () => {
  const [shirtAsset, setShirtAsset] = useState('/shirt_baked.glb');
  const snap = useSnapshot(state);

  const { nodes, materials } = useGLTF(shirtAsset, undefined, (error) => {
    console.error('Error loading GLTF:', error);
  });

  const [logoTexture, setLogoTexture] = useState(null);
  const [fullTexture, setFullTexture] = useState(null);

  useEffect(() => {
    if (snap.logoDecal) {
      const loader = new THREE.TextureLoader();
      loader.load(
        snap.logoDecal,
        (texture) => {
          setLogoTexture(texture);
        },
        undefined,
        (error) => {
          console.error('Error loading logo texture:', error);
        }
      );
    }
  }, [snap.logoDecal]);

  useEffect(() => {
    if (snap.fullDecal) {
      const loader = new THREE.TextureLoader();
      loader.load(
        snap.fullDecal,
        (texture) => {
          setFullTexture(texture);
        },
        undefined,
        (error) => {
          console.error('Error loading full texture:', error);
        }
      );
    }
  }, [snap.fullDecal]);

  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && fullTexture && (
          <Decal
            position={[0, -0.049, 0]}
            rotation={[0, 0, 0]}
            scale={0.62}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && logoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.13}
            map={logoTexture}
            anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
