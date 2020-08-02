import React from 'react';
import radioDaysImage from '../assets/images/radioDaysImage.png'
import {Image } from './Image';
import styles from './Projects.module.scss'

export const Projects = () => {
  return (
    <div className={styles.container}>
      <Image image={radioDaysImage} width='250px' height='400px' />
      <h1 className={styles.text}>
        <a
          href='http://localbandsintown.surge.sh/'
          target="_blank"
          rel="noopener noreferrer"
        >Local Bands in Town</a>
      </h1>
    </div>
  );
}

export default Projects;
