import BigIsland from "./BigIsland";

const CenterGroup = () => {
  return (<group position={[0, 0, 0]}>
      {/* <mesh>
        <sphereGeometry args={[0.1, 32, 32]} />   
        <meshStandardMaterial color={'red'} />
      </mesh> */}
      <BigIsland position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.1} rotationSpeed={0.01} />  
    </group>)
} 

export default CenterGroup;
