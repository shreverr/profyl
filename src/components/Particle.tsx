import { FC } from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

interface ParticleProps {
  
}

const Particle: FC<ParticleProps> = () => {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };
  
  return (
    <Particles id="particles-here" init={particlesInit} options={{
      background: {
        color: {
          value: "#0d47a1",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode:["grab", "bubble"],
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          grab: {
            distance: 150,
            line_linked: {
              opacity: 1
            }
          }
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }} />
  )
}

export default Particle