import './App.css'
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import CenterGroup from './components/CenterGroup';

function App() {
  return (
    <div className='page-container'>
        <Canvas gl={{ antialias: true }}>
          <PerspectiveCamera makeDefault fov={20} position={[0, 0, 10]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-10, -10, 10]} intensity={1} />
          <directionalLight position={[10, -10, 10]} intensity={1} />
          <CenterGroup />          
          <OrbitControls enableDamping enableZoom={false} target={[0, 0, 0]} />
          <Environment preset="city" />
        </Canvas>      
    </div>
  )
}

export default App
