import React from 'react';
import { Layout} from './Layout';
import style from './App.module.scss';

export const App = () => {
  return (
    <div className={style.container}>
      <Layout />
    </div>
  );
}

export default App;
