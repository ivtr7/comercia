import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Text, Environment } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCube({ isHovered }: { isHovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const targetRotationSpeed = useRef(0.005);

  useFrame((state) => {
    // Speed up rotation on hover
    targetRotationSpeed.current = isHovered ? 0.02 : 0.005;
    
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * (isHovered ? 0.2 : 0.1);
      meshRef.current.rotation.y += targetRotationSpeed.current;
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * (isHovered ? 0.2 : 0.1);
      edgesRef.current.rotation.y += targetRotationSpeed.current;
    }
  });

  const edgesGeometry = useMemo(() => {
    const boxGeo = new THREE.BoxGeometry(2.2, 2.2, 2.2);
    return new THREE.EdgesGeometry(boxGeo);
  }, []);

  return (
    <Float speed={isHovered ? 4 : 2} rotationIntensity={isHovered ? 1 : 0.5} floatIntensity={isHovered ? 2 : 1}>
      <group scale={isHovered ? 1.1 : 1}>
        {/* Main cube with glass effect */}
        <mesh ref={meshRef}>
          <boxGeometry args={[2, 2, 2]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.5}
            chromaticAberration={isHovered ? 0.4 : 0.2}
            anisotropy={0.3}
            distortion={isHovered ? 0.2 : 0.1}
            distortionScale={0.2}
            temporalDistortion={0.1}
            iridescence={isHovered ? 1.5 : 1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[0, 1400]}
            color={isHovered ? "#A855F7" : "#8B5CF6"}
            transmission={0.95}
            roughness={0.1}
          />
        </mesh>

        {/* Glowing edges */}
        <lineSegments ref={edgesRef} geometry={edgesGeometry}>
          <lineBasicMaterial color={isHovered ? "#C084FC" : "#A855F7"} linewidth={2} transparent opacity={isHovered ? 1 : 0.8} />
        </lineSegments>

        {/* Inner glow sphere */}
        <mesh scale={isHovered ? 1.4 : 1.2}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshBasicMaterial color={isHovered ? "#A855F7" : "#8B5CF6"} transparent opacity={isHovered ? 0.8 : 0.6} />
        </mesh>
      </group>
    </Float>
  );
}

function OrbitingIcons({ isHovered }: { isHovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * (isHovered ? 0.4 : 0.2);
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const iconPositions = [
    { position: [3, 0, 0] as [number, number, number], label: '💬' },
    { position: [-3, 0, 0] as [number, number, number], label: '📱' },
    { position: [0, 3, 0] as [number, number, number], label: '🤖' },
    { position: [0, -3, 0] as [number, number, number], label: '📊' },
    { position: [0, 0, 3] as [number, number, number], label: '📅' },
    { position: [0, 0, -3] as [number, number, number], label: '⚡' },
  ];

  return (
    <group ref={groupRef}>
      {iconPositions.map((icon, index) => (
        <Float key={index} speed={isHovered ? 5 : 3} floatIntensity={isHovered ? 1 : 0.5}>
          <group position={icon.position}>
            <mesh>
              <sphereGeometry args={[0.4, 16, 16]} />
              <meshBasicMaterial color={isHovered ? "#60A5FA" : "#3B82F6"} transparent opacity={isHovered ? 0.5 : 0.3} />
            </mesh>
            <Text fontSize={0.5} anchorX="center" anchorY="middle">
              {icon.label}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  );
}

function Particles({ isHovered }: { isHovered: boolean }) {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 100;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * (isHovered ? 0.15 : 0.05);
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={isHovered ? 0.08 : 0.05} color="#60A5FA" transparent opacity={isHovered ? 1 : 0.8} sizeAttenuation />
    </points>
  );
}

function ConnectionLines({ isHovered }: { isHovered: boolean }) {
  const linesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * (isHovered ? 0.2 : 0.1);
    }
  });

  const lines = useMemo(() => {
    const lineData = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 2.5;
      lineData.push({
        start: new THREE.Vector3(0, 0, 0),
        end: new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * 0.5, Math.sin(angle) * radius),
      });
    }
    return lineData;
  }, []);

  return (
    <group ref={linesRef}>
      {lines.map((line, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([line.start.x, line.start.y, line.start.z, line.end.x, line.end.y, line.end.z])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#8B5CF6" transparent opacity={isHovered ? 0.6 : 0.3} />
        </line>
      ))}
    </group>
  );
}

function Scene({ isHovered }: { isHovered: boolean }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={isHovered ? 1.5 : 1} color="#8B5CF6" />
      <pointLight position={[-10, -10, -10]} intensity={isHovered ? 1 : 0.5} color="#3B82F6" />
      <FloatingCube isHovered={isHovered} />
      <OrbitingIcons isHovered={isHovered} />
      <Particles isHovered={isHovered} />
      <ConnectionLines isHovered={isHovered} />
      <Environment preset="night" />
    </>
  );
}

export default function TechCube() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full h-[400px] lg:h-[500px] cursor-pointer transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} style={{ background: 'transparent' }}>
        <Scene isHovered={isHovered} />
      </Canvas>
    </div>
  );
}
