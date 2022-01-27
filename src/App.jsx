import React from 'react';
import JobList from './components/joblist/JobList';
import styles from './index.module.scss';

const App = () => {
  return (
    <main>
      <header>
        <div className={styles['main--header__div']}></div>
      </header>
      <JobList />
    </main>
  );
};

export default App;
