import React from "react";
import Recommendation from "./Recommendation";
import "./suggestions.css";

const Suggestions = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="suggestions">
      <div className="container">
        <h3 className="suggestions-title">Вам может понравиться</h3>
        <div className="shop-cards">
          <Recommendation/>
          <Recommendation/>
          <Recommendation/>
          <Recommendation/>
        </div>
        <div className="blog-up">
          <span onClick={scrollTop}>Наверх</span>
          <img src="/img/blog/arrow.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Suggestions;