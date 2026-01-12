import { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

function GradientPlane() {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    
    // Gradiente neon azul sutil
    const gradient = ctx.createLinearGradient(0, 0, 512, 512);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.25)');
    gradient.addColorStop(0.5, 'rgba(96, 165, 250, 0.15)');
    gradient.addColorStop(1, 'rgba(147, 197, 253, 0.08)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);
    
    const tex = new THREE.CanvasTexture(canvas);
    return tex;
  }, []);

  return (
    <mesh position={[0, 0, -2]} scale={[25, 25, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={0.12}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function LaserEffect() {
  return (
    <div className="absolute inset-0 md:hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: false }}
        style={{ background: 'transparent' }}
      >
        <GradientPlane />
      </Canvas>
    </div>
  );
}
