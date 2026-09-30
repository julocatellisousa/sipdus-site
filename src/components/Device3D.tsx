import {
  Suspense,
  useMemo,
} from "react";

import {
  Canvas,
  useLoader,
} from "@react-three/fiber";

import {
  Center,
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
} from "@react-three/drei";

import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

import * as THREE from "three";

function SipdusModel() {
  const geometry = useLoader(
    STLLoader,
    "/models/sipdus3d.stl"
  );

  const scale = useMemo(() => {
    geometry.computeBoundingBox();

    if (!geometry.boundingBox) {
      return 1;
    }

    const size =
      new THREE.Vector3();

    geometry.boundingBox.getSize(size);

    const largestDimension =
      Math.max(
        size.x,
        size.y,
        size.z
      );

    if (!largestDimension) {
      return 1;
    }

    return 3.4 / largestDimension;
  }, [geometry]);

  return (
    <Float
      speed={1.1}
      rotationIntensity={0.06}
      floatIntensity={0.15}
    >
      <Center>
        <mesh
          geometry={geometry}
          scale={scale}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial
            color="#62dce5"
            roughness={0.27}
            metalness={0.03}
            emissive="#087f93"
            emissiveIntensity={0.08}
            side={THREE.DoubleSide}
          />
        </mesh>
      </Center>
    </Float>
  );
}

function LoadingModel() {
  return (
    <mesh>
      <boxGeometry
        args={[3.2, 1.5, 2.2]}
      />

      <meshStandardMaterial
        color="#62dce5"
        roughness={0.3}
      />
    </mesh>
  );
}

export default function Device3D() {
  return (
    <div className="h-[430px] w-full lg:h-[570px]">

      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          position: [4.5, 3.1, 5],
          fov: 35,
        }}
        gl={{
          antialias: true,
          toneMapping:
            THREE.ACESFilmicToneMapping,
          outputColorSpace:
            THREE.SRGBColorSpace,
        }}
      >

        <color
          attach="background"
          args={["#dff7f9"]}
        />

        <ambientLight intensity={1.8} />

        <directionalLight
          position={[5, 7, 5]}
          intensity={3}
          castShadow
        />

        <directionalLight
          position={[-4, 3, -4]}
          intensity={1.3}
        />

        <pointLight
          position={[0, 3, 3]}
          intensity={1.2}
          color="#08b9d1"
        />

        <Environment preset="studio" />

        <Suspense fallback={<LoadingModel />}>
          <SipdusModel />
        </Suspense>

        <ContactShadows
          position={[0, -1.8, 0]}
          opacity={0.25}
          scale={6}
          blur={2}
          far={5}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.75}
          minPolarAngle={Math.PI / 3.2}
          maxPolarAngle={Math.PI / 1.7}
        />

      </Canvas>
    </div>
  );
}