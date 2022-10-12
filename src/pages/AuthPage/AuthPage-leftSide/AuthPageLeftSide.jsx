import React from 'react';
import img1 from 'assets/images/hero-image/img-1.png';
import img2 from 'assets/images/hero-image/img-2.png';
import img3 from 'assets/images/hero-image/img-3.png';
import img4 from 'assets/images/hero-image/img-4.png';
import s from './AuthPage-leftSide.module.scss';

const AuthPageLeftSide = () => {
  return (
    <div className={s.block}>
      <div className={s.thumb__img1}>
        <img className={s.img1} src={img1} alt="joystick" />
      </div>
      <div className={s.thumb__img2}>
        <img className={s.img2} src={img2} alt="home1" />
      </div>
      <div className={s.thumb__img3}>
        <img className={s.img3} src={img3} alt="robot" />
      </div>
      <div className={s.thumb__img4}>
        <img className={s.img4} src={img4} alt="home2" />
      </div>
    </div>
  );
};

export default AuthPageLeftSide;
