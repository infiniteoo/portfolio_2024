import React from "react";
import { useWindowSize } from "react-use";

import Confetti from "react-confetti";

const ConfettiComponent = () => {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={150}
      colors={["black", "gray", "white", "orange", "teal"]}
      className="z-0"
      opacity={0.9}
      drawShape={(ctx) => {
        ctx.beginPath();
        let length = 6;
        for (let i = 0; i < 5; i++) {
          ctx.lineTo(
            Math.cos((Math.PI * 2 * i) / 5) * length,
            Math.sin((Math.PI * 2 * i) / 5) * length
          );
          ctx.lineTo(
            Math.cos((Math.PI * 2 * (i + 2)) / 5) * length,
            Math.sin((Math.PI * 2 * (i + 2)) / 5) * length
          );
        }
        ctx.closePath();
        ctx.fill();
      }}
    />
  );
};

export default ConfettiComponent;
