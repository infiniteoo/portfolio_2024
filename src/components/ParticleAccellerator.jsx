import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const ParticleAcellerator = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "-1", // Ensure it's below your content
      }}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 30,
        particles: {
          color: {
            value: ["rgb(20, 146, 255)", "rgb(255, 134, 20)"],
          },
          move: {
            enable: true,
            speed: 1,
            random: true,
          },
          number: {
            value: 50,
          },
          opacity: {
            value: 0.5,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 100,
              line_linked: {
                opacity: 0.5,
              },
            },
          },
        },
      }}
    />
  );
};
export default ParticleAcellerator;
