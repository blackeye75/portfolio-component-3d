import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls } from "@react-three/drei";

import { Scene } from "./Scene";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";
function App() {
  return (
    <>
    
    <Canvas flat camera={{ fov: 35 }}>
      {/* <OrbitControls /> */}
      <ambientLight />
      <Scene />
      <EffectComposer>
        <Bloom
          intensity={7.0} // The bloom intensity.
          luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.9} // smoothness of the luminance threshold. Range is [0, 1]
          mipmapBlur
        />
        {/* <ToneMapping adaptive /> */}
      </EffectComposer>
    </Canvas>
    </>
  );
}

export default App;
