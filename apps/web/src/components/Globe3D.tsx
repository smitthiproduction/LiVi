'use client';
import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type { Group } from 'three';
import { INDICES, placeParId, versSphere } from '@livi/market-data';

function Points() {
  const groupe = useRef<Group>(null);
  useFrame((_, dt) => { if (groupe.current) groupe.current.rotation.y += dt * 0.05; });
  const pts = useMemo(() => INDICES.map((i) => { const p = placeParId(i.place)!; const v = versSphere(p.lat, p.lon); return { code: i.code, v }; }), []);
  return (
    <group ref={groupe}>
      <mesh><sphereGeometry args={[1, 64, 64]} /><meshStandardMaterial color="#1a1a1d" /></mesh>
      {pts.map((p) => (
        <mesh key={p.code} position={[p.v.x * 1.01, p.v.y * 1.01, p.v.z * 1.01]}><sphereGeometry args={[0.012, 12, 12]} /><meshBasicMaterial color="#5cc8ff" /></mesh>
      ))}
    </group>
  );
}

/** Globe WebGL. Ne pas monter si prefers-reduced-motion ou faible performance : afficher CarteMarches2D. */
export function Globe3D() {
  return (
    <Canvas camera={{ position: [0, 0.6, 2.6], fov: 45 }} aria-label="Globe des marchés mondiaux">
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 2, 2]} intensity={0.8} />
      <Points />
    </Canvas>
  );
}
