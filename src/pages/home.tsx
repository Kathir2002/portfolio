import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/loader";
import Island from "../3DModels/island";
import Sky from "../3DModels/sky";
import Bird from "../3DModels/bird";
import Plane from "../3DModels/plane";
import HomeInfo from "../components/homeInfo";
import sakuraAudio from "../assets/sakura.mp3";
import Soundoff from "../assets/icons/soundoff.png";
import Soundon from "../assets/icons/soundon.png";

const Home = () => {
  const audioRef = useRef(new Audio(sakuraAudio));
  audioRef.current.volume = 1;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -0.6, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }
    return [screenScale, screenPosition];
  };
  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            // @ts-ignore
            skyColor="rgb(177, 225, 255)"
            groundColor="#000000"
            intensity={1}
          />
          <Sky isRotating={isRotating} />
          <Bird />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            position={islandPosition}
            screenScale={islandScale}
            rotation={[0.1, 4.7077, 0]}
            setCurrentStage={setCurrentStage}
            currentStage={currentStage}
          />
          <Plane
            isRotating={isRotating}
            rotation={[0, 20.1, 0]}
            position={planePosition}
            scale={planeScale}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img
          className="w-10 h-10 cursor-pointer object-contain"
          src={!isPlayingMusic ? Soundoff : Soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default Home;
