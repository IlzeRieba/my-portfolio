import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { ShaderMaterial } from "three";
import { TextureLoader } from "three";
import { extend } from "@react-three/fiber";
import "./RippleImage.css"; // Import the CSS file

const RippleShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uTexture: { value: null },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D uTexture;
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      float dist = distance(uv, uMouse);
      float ripple = 0.05 * sin(20.0 * dist - uTime * 2.5);
      uv += normalize(uv - uMouse) * ripple;
      gl_FragColor = texture2D(uTexture, uv);
    }
  `,
};

extend({ RippleMaterial: ShaderMaterial });

function RippleImageMesh({ imageUrl }) {
  const meshRef = useRef();
  const materialRef = useRef();
  const texture = useLoader(TextureLoader, imageUrl);
  const { viewport } = useThree();
  const [aspect, setAspect] = useState(1);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setAspect(img.width / img.height);
    };
  }, [imageUrl]);

  useFrame(({ clock, mouse }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
      materialRef.current.uniforms.uMouse.value.set(
        mouse.x * 0.5 + 0.5,
        1.0 - (mouse.y * 0.5 + 0.5)
      );
    }
  });

  // scale based on screen dimensions
  const scale =
    aspect >= 1
      ? [viewport.width, viewport.width / aspect, 1]
      : [viewport.height * aspect, viewport.height, 1];

  return (
    <mesh ref={meshRef} scale={scale}>
      <planeGeometry args={[1, 1, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        attach="material"
        args={[RippleShaderMaterial]}
        uniforms-uTexture-value={texture}
      />
    </mesh>
  );
}

export default function RippleImage({ imageUrl }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <div className="headingLine1">trauma informed</div>

      <div className="heading">SOMATIC COUNSELLING</div>

      {/* Canvas */}
      <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 10] }}>
        <ambientLight intensity={1} />
        <RippleImageMesh imageUrl={imageUrl} />
      </Canvas>
    </div>
  );
}
