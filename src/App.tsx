import './App.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import CenterGroup from './components/PlaneComponent/CenterGroup';

function App() {
  return (
    <div className='page-container'>
      {/* <div className="plane"> */}
        <Canvas gl={{ antialias: true }}>
          <PerspectiveCamera makeDefault fov={20} position={[0, 0, 10]} />
          <ambientLight intensity={1} />
          <directionalLight position={[0, 0, 10]} intensity={10} />
          {/* <PlaneComponent /> */}
          <CenterGroup />
          
          <OrbitControls enableDamping enableZoom={false} />
        </Canvas>
      {/* </div> */}
      
    </div>
  )
}

export default App
