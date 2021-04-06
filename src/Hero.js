import React from "react";

const Hero = ({ handleLogOut }) => {
  return (
    <section>
      <h2>WELCOME</h2>
      <nav>
        <button onClick={(e) => handleLogOut()}>logout</button>
      </nav>
    </section>
  );
};
export default Hero;
