import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>AI.SIKHO</h2>

        <p>We are trying to give you the best Knowladge possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @Ai.sikho</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="#">
          <AiFillYoutube />
        </a>
        <a href="#">
          <AiFillInstagram />
        </a>
        <a href="#">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
