import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A Passionate Software Developer",
          "MERN Stack Developer",
          "DJANGO Developer",
          "Btech Prefinal Year Student MNNIT Allahabad",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
