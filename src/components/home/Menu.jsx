import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/ai.webp";
import burger2 from "../../assets/ml.webp";
import burger3 from "../../assets/pro.webp";

const Menu = () => {
  const addToCartHandler = (itemNum) => {};

  return (
    <section id="menu">
      <h1>COURSES</h1>

      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="AI Full courses"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={250}
          title="Ml Full courses"
          delay={0.5}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={180}
          title="Prompt Engineer courses"
          delay={0.8}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Menu;
