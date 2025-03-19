import './styles/hero.css';

import { Canvas } from '@react-three/fiber';

import Playlist from './Playlist';
import Model from './Model';

const Hero = () => {
    return (
        <div className="hero gradient-bg" id="hero-section">
            <div class="gradients-container">
                <div class="g1"></div>
                <div class="g2"></div>
                <div class="g3"></div>
                <div class="interactive"></div>
            </div>
            <Playlist />
            {/* <Canvas className="hero-canvas">
                <Model 
                    modelUrl="models/bluetooth_music_boombox/scene.gltf"
                    modelScale={[0.19, 0.19, 0.19]}
                    modelPosition={[-0.3, -0.3, 0]}
                    modelRotation={[0, 5.5, -0.3]}
                />
            </Canvas> */}
        </div>
    );
};

export default Hero;