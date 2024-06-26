import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
import Course from "./Course";

const Home = () => {
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
    <>
      <section className="home">
        <div>
          <motion.h1 {...options}>TerseJob </motion.h1>
          <motion.p
            {...options}
            transition={{
              delay: 0.5,
            }}
          >
            Give yourself a best path of learning
          </motion.p>
        </div>

        <motion.a
          href="#menu"
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
        >
          Explore Courses
        </motion.a>
      </section>

      <Founder />

      <Menu />
      <Course />
    </>
  );
};

export default Home;
