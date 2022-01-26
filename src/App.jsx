import React from 'react';
import bgHeader from './images/bg-header-desktop.svg';
import JobList from './components/joblist/JobList';
import styles from './index.module.scss';

const App = () => {
  return (
    <main>
      <header>
        <img
          className={styles['main--header__img']}
          src={bgHeader}
          alt="Header Bg"
        />
      </header>
      <JobList />
    </main>
  );
};

export default App;
