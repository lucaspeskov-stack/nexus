import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const REDUCED =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2  uMouse;
  uniform float uPixelRatio;
  uniform float uSize;

  attribute float aScale;
  attribute float aSpeed;
  attribute vec3  aSeed;

  varying float vLife;

  void main() {
    vec3 pos = position;
    float range = 24.0;

    // sobe com o tempo e dá a volta (loop infinito)
    float y = pos.y + uTime * aSpeed * 0.6;
    y = mod(y + 12.0, range) - 12.0;
    pos.y = y;

    // deriva sinuosa, como ar quente
    pos.x += sin(uTime * 0.3 * aSpeed + aSeed.x * 6.2831) * 0.7;
    pos.z += cos(uTime * 0.25 * aSpeed + aSeed.z * 6.2831) * 0.7;

    // vida: 0 embaixo (quente) -> 1 em cima (frio)
    vLife = clamp((pos.y + 12.0) / range, 0.0, 1.0);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

    // empurrão sutil do cursor (mais forte nas brasas baixas)
    mvPosition.xy += uMouse * 0.5 * (1.0 - vLife);

    gl_Position = projectionMatrix * mvPosition;

    gl_PointSize = uSize * aScale * uPixelRatio;
    gl_PointSize *= 1.0 / max(-mvPosition.z, 0.1);
  }
`

const fragmentShader = /* glsl */ `
  precision mediump float;
  uniform vec3 uColorHot;
  uniform vec3 uColorCool;
  varying float vLife;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float alpha = smoothstep(0.5, 0.0, d);
    vec3 col = mix(uColorHot, uColorCool, vLife);
    // brasa esfria e some ao subir
    alpha *= mix(0.95, 0.05, vLife);
    if (alpha < 0.01) discard;
    gl_FragColor = vec4(col, alpha);
  }
`

function Embers({ count }) {
  const pointsRef = useRef()
  const matRef = useRef()
  const { size, viewport } = useThree()
  const mouse = useRef(new THREE.Vector2(0, 0))
  const target = useRef(new THREE.Vector2(0, 0))

  const { positions, scales, speeds, seeds } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const scales = new Float32Array(count)
    const speeds = new Float32Array(count)
    const seeds = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 22
      positions[i * 3 + 1] = (Math.random() - 0.5) * 24
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2
      scales[i] = Math.random() * 1.6 + 0.4
      speeds[i] = Math.random() * 1.4 + 0.5
      seeds[i * 3 + 0] = Math.random()
      seeds[i * 3 + 1] = Math.random()
      seeds[i * 3 + 2] = Math.random()
    }
    return { positions, scales, speeds, seeds }
  }, [count])

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 1.8) },
      uSize: { value: 70 },
      uColorHot: { value: new THREE.Color('#FFD9A8') },
      uColorCool: { value: new THREE.Color('#E2360F') },
    }),
    [],
  )

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = REDUCED ? 0 : t

      // pointer normalizado da própria r3f (-1..1)
      target.current.set(state.pointer.x, state.pointer.y)
      mouse.current.lerp(target.current, Math.min(delta * 3, 1))
      matRef.current.uniforms.uMouse.value.copy(mouse.current)
    }
    if (pointsRef.current && !REDUCED) {
      // parallax de profundidade: o campo inclina levemente com o cursor
      pointsRef.current.rotation.y = THREE.MathUtils.lerp(
        pointsRef.current.rotation.y,
        state.pointer.x * 0.18,
        Math.min(delta * 2, 1),
      )
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        -state.pointer.y * 0.1,
        Math.min(delta * 2, 1),
      )
    }
  })

  // mantém o pixelRatio coerente em resize
  uniforms.uPixelRatio.value = Math.min(viewport.dpr || window.devicePixelRatio, 1.8)
  void size

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-aScale" count={count} array={scales} itemSize={1} />
        <bufferAttribute attach="attributes-aSpeed" count={count} array={speeds} itemSize={1} />
        <bufferAttribute attach="attributes-aSeed" count={count} array={seeds} itemSize={3} />
      </bufferGeometry>
      <shaderMaterial
        ref={matRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Anel wireframe distante girando devagar — assinatura sutil (eco do sint.gg)
function Ring() {
  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current && !REDUCED) {
      ref.current.rotation.z += delta * 0.05
      ref.current.rotation.x = -0.6
    }
  })
  return (
    <mesh ref={ref} position={[0, 1, -6]}>
      <torusGeometry args={[6.5, 0.01, 8, 90]} />
      <meshBasicMaterial color="#FF6B1A" transparent opacity={0.18} />
    </mesh>
  )
}

export default function ForgeBackground() {
  // menos partículas no mobile
  const count =
    typeof window !== 'undefined' && window.innerWidth < 768
      ? REDUCED
        ? 250
        : 900
      : REDUCED
        ? 400
        : 1700

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* base: brasa ambiente no rodapé + vinheta (CSS, sempre presente) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 115%, rgba(226,54,15,0.20) 0%, rgba(255,107,26,0.06) 30%, rgba(10,10,11,0) 60%), #0A0A0B',
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 14], fov: 55 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <Embers count={count} />
        <Ring />
      </Canvas>
      {/* vinheta superior pra leitura do conteúdo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,10,11,0.55) 0%, rgba(10,10,11,0) 25%, rgba(10,10,11,0) 70%, rgba(10,10,11,0.6) 100%)',
        }}
      />
    </div>
  )
}
