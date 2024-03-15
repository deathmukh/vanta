import { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

const App = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x90922,
          birdSize: 1.50,
          wingSpan: 17.00,
          speedLimit: 3.00,
          separation: 32.00,
          alignment: 34.00,
          cohesion: 72.00,
          quantity: 3.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1 
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translate(-50%, -50%)",
          textAlign: "left",
          fontFamily: "Roboto"
        }}
      >
        <p style={{ color: "#fff", fontSize: "30px", fontWeight: "bold"}}>
          a vanta website
        </p>
        <p style={{ color: "#ffff00", fontSize: "15px"}}>
hover around, play with it i guess</p>

      </div>
    </div>
  );
};

export default App;
