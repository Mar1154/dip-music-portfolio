import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

const Model = ({ modelUrl, 
                        modelScale = [1, 1, 1], 
                        modelPosition = [0, 0, 0], 
                        modelRotation = [0, 0, 0]}) => {
    const { scene } = useGLTF(modelUrl);
    scene.scale.set(...modelScale);
    scene.position.set(...modelPosition);
    scene.rotation.set(...modelRotation);
    
    return (
        <>
            <ambientLight intensity={1} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            {/* <OrbitControls/> */}
            <primitive object={scene} />
        </>
    )
};

export default Model;

