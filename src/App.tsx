import './App.css'
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import CenterGroup from './components/PlaneComponent/CenterGroup';

function App() {
  return (
    <div className='page-container'>
        <Canvas gl={{ antialias: true }}>
          <PerspectiveCamera makeDefault fov={20} position={[0, 0, 8]} />
          <ambientLight intensity={1} />
          <directionalLight position={[0, 0, 10]} intensity={10} />
          <CenterGroup />          
          <OrbitControls enableDamping enableZoom={false} target={[0, 0, 0]} />
          {/* <Environment files="/backgrounds/night2.hdr" background /> */}
        </Canvas>      
    </div>
  )
}

export default App
