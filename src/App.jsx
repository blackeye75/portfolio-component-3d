import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls } from "@react-three/drei";

import { Scene } from "./Scene";
function App() {
  
  return (
    <Canvas camera={{fov:35}}>
      <OrbitControls />
      <ambientLight />
     <Scene/>
    </Canvas>
  );
}

export default App;
