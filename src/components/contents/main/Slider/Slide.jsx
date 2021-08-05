import React from 'react';
import css from './slider.css';

const Slide = ({ children, color }) => {
  return (
    <div className={css.containerSlider}>
      <div className={css.content} style={{ background: color }} />
      <footer className={css.footerSlider}>
        {children}
      </footer>
    </div>
  );
};

export default Slide;