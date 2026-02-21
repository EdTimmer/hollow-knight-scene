import { Suspense } from 'react';
import './App.css'
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, Loader } from '@react-three/drei';
import CenterGroup from './components/CenterGroup';
import HornetGroup from './components/HornetGroup';

function App() {
  return (
    <div className='page-container'>
        <Canvas gl={{ antialias: true }}>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 10]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-10, -10, 10]} intensity={1} />
            <directionalLight position={[10, -10, 10]} intensity={1} />
            <CenterGroup />
            <HornetGroup />   
            <OrbitControls enableDamping enableZoom={false} target={[0, 0, 0]} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>      
        <Loader />
    </div>
  )
}

export default App
