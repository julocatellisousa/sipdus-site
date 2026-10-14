
import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";

import {
  Center,
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
  Html,
} from "@react-three/drei";

import * as THREE from "three";

const BACKGROUND_COLOR = "#102329";

function SipdusModel() {
  const { scene } = useGLTF("/models/sipdus3d.glb");

  const model = useMemo(() => {
    const clone = scene.clone(true);

    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());

    const largestDimension = Math.max(
      size.x,
      size.y,
      size.z
    );

    if (largestDimension > 0) {
      clone.scale.multiplyScalar(3.4 / largestDimension);
    }

    return clone;
  }, [scene]);

  return (
    <Center>
      <primitive object={model} />
    </Center>
  );
}

function LoadingModel() {
  return (
    <Html center>
      <div className="text-sm text-cyan-100">
        Carregando modelo 3D...
      </div>
    </Html>
  );
}

export default function Device3D() {
  return (
    <div
      className="h-[430px] w-full overflow-hidden rounded-3xl lg:h-[570px]"
      style={{ backgroundColor: BACKGROUND_COLOR }}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          position: [4.5, 3.1, 5],
          fov: 35,
        }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
      >
        {/* Fundo exato: #102329 */}
        <color
          attach="background"
          args={[BACKGROUND_COLOR]}
        />

        {/* Iluminação ambiente */}
        <ambientLight intensity={1.2} />

        {/* Luz principal branca */}
        <directionalLight
          position={[5, 7, 5]}
          intensity={2.8}
          color="#ffffff"
          castShadow
        />

        {/* Luz frontal para revelar detalhes */}
        <directionalLight
          position={[0, 2, 6]}
          intensity={1.8}
          color="#e4faff"
        />

        {/* Luz lateral ciano */}
        <directionalLight
          position={[-4, 3, -4]}
          intensity={2.0}
          color="#55dfff"
        />

        {/* Reflexo superior */}
        <pointLight
          position={[0, 4, 2]}
          intensity={1.2}
          color="#55dfff"
        />

        <Environment
          preset="studio"
          environmentIntensity={0.65}
        />

        <Suspense fallback={<LoadingModel />}>
          <SipdusModel />
        </Suspense>

        {/* Sombra de contato */}
        <ContactShadows
          position={[0, -1.8, 0]}
          opacity={0.4}
          scale={6}
          blur={2.5}
          far={5}
          color="#000000"
        />

        {/* Rotação e zoom */}
        <OrbitControls
          enableZoom
          enablePan={false}
          rotateSpeed={0.75}
          minPolarAngle={Math.PI / 3.2}
          maxPolarAngle={Math.PI / 1.7}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/sipdus3d.glb");
