import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/sk.png";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>
          <span>TANUJ VYAS</span>
        </h3>

        <p>
          Hey, Everyone I am <span>TANUJ VYAS</span>, the founder of TerseJob
          <br />
          Our mission is to provide quality education to the world
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
