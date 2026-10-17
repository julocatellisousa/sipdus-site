
import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";

import {
  Center,
  ContactShadows,
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
        dpr={[1, 2]}
        camera={{
          position: [4.5, 3.1, 5],
          fov: 35,
        }}
        gl={{
          antialias: true,
          toneMapping: THREE.NoToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
      >
        {/* Fundo original */}
        <color
          attach="background"
          args={[BACKGROUND_COLOR]}
        />

        {/* Iluminação uniforme e sem excesso de brilho */}
        <ambientLight
          intensity={1.0}
          color="#ffffff"
        />

        {/* Luz frontal principal */}
        <directionalLight
          position={[2, 4, 6]}
          intensity={1.2}
          color="#ffffff"
        />

        {/* Preenchimento frontal suave */}
        <directionalLight
          position={[-4, 1, 5]}
          intensity={0.4}
          color="#e6f7fa"
        />

        {/* Contorno ciano discreto */}
        <directionalLight
          position={[-3, 2, -4]}
          intensity={0.5}
          color="#45c9dc"
        />

        <Suspense fallback={<LoadingModel />}>
          <SipdusModel />
        </Suspense>

        {/* Sombra sutil para preservar a profundidade */}
        <ContactShadows
          position={[0, -1.8, 0]}
          opacity={0.16}
          scale={5}
          blur={3}
          far={5}
          color="#000000"
        />

        {/* Mantém a interação com o modelo */}
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
