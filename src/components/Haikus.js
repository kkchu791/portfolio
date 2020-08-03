import React from 'react';
import Arc from './Arc';
import styles from './Haikus.module.scss'

export const Haikus = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>
        <a
          href='http://rachael-haikus.netlify.app//'
          target="_blank"
          rel="noopener noreferrer"
        >Quarantine Haikus</a>
      </h1>
      <Arc />
    </div>
  );
}

export default Haikus;