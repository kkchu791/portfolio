import React, {useState} from 'react';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Player } from './Player';
import { Projects } from './Projects';
import styles from './Layout.module.scss'

export const Layout = () => {
  const [currentTab, setCurrentTab] = useState('Home');

  const tabs = {
    'Home': <Home />,
    'Projects': <Projects />,
  }

  return (
    <div className={styles.layout}>
      <Navbar
        tabs={tabs}
        setCurrentTab={setCurrentTab}
      />
      {tabs[currentTab]}
      <Player
        currentTab={currentTab}
      />
    </div>
  );
}

export default Layout;
