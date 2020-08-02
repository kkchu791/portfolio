import React from 'react';
import { Image } from './Image';
import profileImg from '../assets/images/profileImg.png';
import style from './Home.module.scss';

export const Home = () => {
  return (
    <div className={style.container}>
      <Image image={profileImg} width='200px' height='200px'/>
      <h1 className={style.text}>
        Building Seamless Websites
      </h1>
    </div>
  );
}

export default Home;
