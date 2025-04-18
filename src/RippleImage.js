import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { ShaderMaterial } from "three";
import { TextureLoader } from "three";
import { extend } from "@react-three/fiber";
import "./RippleImage.css";
import { Link } from "react-router-dom";
import Header from "./Header"; // 

const RippleShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uTexture: { value: null },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uHover: { value: 0 },
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
    uniform float uHover;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      float dist = distance(uv, uMouse);
      float ripple = 0.02 * sin(40.0 * dist - uTime * 0.5) * uHover;
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
    img.onload = () => setAspect(img.width / img.height);
  }, [imageUrl]);

  useFrame(({ clock, mouse, raycaster }) => {
    if (materialRef.current && meshRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
      materialRef.current.uniforms.uMouse.value.set(
        mouse.x * 0.5 + 0.5,
        1.0 - (mouse.y * 0.5 + 0.5)
      );

      const intersects = raycaster.intersectObject(meshRef.current);
      materialRef.current.uniforms.uHover.value =
        intersects.length > 0 ? 1.0 : 0.0;
    }
  });

  const screenAspect = viewport.width / viewport.height;
  const scale =
    aspect > screenAspect
      ? [viewport.height * aspect, viewport.height, 1]
      : [viewport.width, viewport.width / aspect, 1];

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
    <div className="HeroSection">
      {/* 🧭 Absolute Navbar over the ripple */}
      <Header darkText={false} />

      {/* 🌊 Ripple canvas */}
      <Canvas
        orthographic
        camera={{ zoom: 0.005, position: [0, 0, 5] }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: "70%",
          zIndex: 0, // 👈 important
        }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={1} />
        <RippleImageMesh imageUrl={imageUrl} />
      </Canvas>

      {/* 🧾 Heading + Description */}
      <div className="heroContent">
        <div className="heading">
          <span className="line1">ocean waves</span>
          <span className="line2">therapy</span>
        </div>

        <div className="subHeading">
          Gentle therapy for deep wounds — held with care, guided by the body.
        </div>
        <p className="mainParagraph">
          I’m a certified somatic therapist offering a holistic, trauma-informed
          approach. In our work together, you’ll find a warm, supportive space
          grounded in deep empathy, gentleness, and care for your unique
          experience and rhythm.
          <div>
            <Link to="/about">
              <button className="mainButton">more</button>
            </Link>
          </div>
        </p>
      </div>
    </div>
  );
}
