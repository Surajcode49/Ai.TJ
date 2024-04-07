import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/sk.png";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>TerseJob</h4>
          <p>
            We are from TerseJob.The place for learning Ai
            
          </p>

          <p>
            Explore the various type of courses . Click below to see the
            Courses details
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Tanuj Vyas</h3>
            </div>

            <p>
              I am Tanuj Vyas, the founder of TerseJob. The way of success..
             
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
