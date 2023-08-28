import { FC, ReactNode, useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt';

interface CardProps {
  children: ReactNode
}

const Card: FC<CardProps> = ({ children }) => {
  const tilt = useRef(null!);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    reverse: false,      // reverse the tilt direction
    max: 25,             // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05,          // 2 = 200%, 1.5 = 150%, etc..
    speed: 100,          // Speed of the enter/exit transition
    transition: true,    // Set a transition on enter/exit.
    axis: null,          // What axis should be disabled. Can be X or Y.
    reset: true,         // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    glare: true,         // if it should have a "glare" effect
    "max-glare": 0.2,     // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    "glare-prerender": false,   // false = VanillaTilt creates the glare elements for you, otherwise// you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
    gyroscope: true,     // Boolean to enable/disable device orientation detection,
    gyroscopeMinAngleX: -45,    // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
    gyroscopeMaxAngleX: 45,     // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
    gyroscopeMinAngleY: -45,    // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
    gyroscopeMaxAngleY: 45,
  }

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);
  return (
    <div className=' 
      flex
      flex-col
      p-4
      w-full
      sm:w-auto
      sm:gap-8
      sm:p-8
      border-t
      border-l
      border-l-white/50
      border-t-white/50
      rounded-3xl
      backdrop-blur-sm
      shadow-xl
      bg-[#09151f]/30
      ' ref={tilt}>
      {children}
    </div>)
}

export default Card