import React, {useState} from 'react';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Player } from './Player';
import { RadioDays } from './RadioDays';
import { Haikus } from './Haikus';
import { NextPageButton } from './NextPageButton';
import { PrevPageButton } from './PrevPageButton';
import styles from './Layout.module.scss'

export const Layout = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = {
    0: <Home />,
    1: <RadioDays />,
    2: <Haikus />,
  }

  return (
    <div className={styles.layout}>
      <Navbar
        tabs={tabs}
        setCurrentTab={setCurrentTab}
      />
      <PrevPageButton
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      />
      {tabs[currentTab]}
      <NextPageButton
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      />
      <Player
        currentTab={currentTab}
      />
    </div>
  );
}

export default Layout;
