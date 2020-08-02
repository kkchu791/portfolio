import React from 'react';
import styles from './Navbar.module.scss'

export const Navbar = ({
  tabs,
  setCurrentTab,
}) => {
  const renderTab = (tab) => {
    return (
      <div
        key={tab}
        className={styles.tab}
        onClick={() => setCurrentTab(tab)}
      >
        {tab}
      </div>
    )
  }
  return (
    <div className={styles.container}>
      {Object.keys(tabs).map(renderTab)}
    </div>
  );
}

export default Navbar;
