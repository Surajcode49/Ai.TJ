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
          <span>SURAJ PRASAD</span>
        </h3>

        <p>
          Hey, Everyone I am <span>SURAJ PRASAD</span>, the founder of AI.Sikho.
          <br />
          Our aim is to provied the Knowledge about Ai and Prompt Engineering
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
