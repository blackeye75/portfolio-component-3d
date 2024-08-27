import { Canvas } from "@react-three/fiber";
import "./style.css"
import { OrbitControls } from "@react-three/drei";
function App() {
  return (
    <Canvas >
      <OrbitControls   />
      <ambientLight/>
      <mesh>
        <boxGeometry />
        <cylinderGeometry />
      </mesh>
    </Canvas>
  );
}

export default App;
