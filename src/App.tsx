import { Suspense } from 'react';
import './App.css'
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, Loader } from '@react-three/drei';
import CenterGroup from './components/CenterGroup';
import HornetGroup from './components/HornetGroup';
import TwoCagesGroup from './components/TwoCagesGroup';

function App() {
  return (
    <div className='page-container'>
        <Canvas gl={{ antialias: true, logarithmicDepthBuffer: true, toneMappingExposure: 1 }}>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 7]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-10, -10, 10]} intensity={1} />
            <directionalLight position={[10, -10, 10]} intensity={1} />

            {/* <TwoCagesGroup scale={0.8} position={[-2.2, 0, 0]} rotation={[0, 0, 0]} rotationSpeed={0.01} />
            <TwoCagesGroup scale={1} position={[2.2, 0, 0]} rotation={[0, 0, 0]} rotationSpeed={0.01} /> */}

            <CenterGroup />
            <HornetGroup />   
            <OrbitControls enableDamping enableZoom={false} target={[0, 0, 0]} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>      
        <Loader />
        
        <div className="link-container">
          <a href="https://www.edtimmer.com/" target="_blank" aria-label="Link to portfolio" title="Link to portfolio">edtimmer.com</a>
        </div>
    </div>
  )
}

export default App
