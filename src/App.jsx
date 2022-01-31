import React, { useState, useEffect } from 'react';
import Filter from './components/filter/Filter';
import Card from './components/card/Card';
import styles from './index.module.scss';
import { getJobList } from './api';
import { sortJob } from './Helper';

const App = () => {
  const [jobarr, setJobArr] = useState([]);
  const [filt, setFilter] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const tagCheck = (_tag) => {
    let flag = false;
    filt.filter((tag) => tag === _tag && (flag = true));
    if (!flag) {
      setFilter([...filt, _tag]);
    }
  };
  const removeTag = (_tag) => {
    setFilter(filt.filter((tag) => tag !== _tag));
  };
  const removeAllTags = () => {
    setFilter([]);
  };
  useEffect(async () => {
    setJobArr(await getJobList());
  }, []);
  useEffect(() => {
    setFiltered(sortJob(filt, jobarr));
  }, [filt]);
  return (
    <main>
      <header>
        <div className={styles['main--header__div']}></div>
      </header>
      {filt.length > 0 && (
        <Filter
          filt={filt}
          removeTag={removeTag}
          removeAllTags={removeAllTags}
        />
      )}
      <section className={styles[filt[0] ? 'sectionwithfilter' : 'section']}>
        {filtered[0]
          ? filtered.map((job) => (
              <Card key={job.id} job={job} tagCheck={tagCheck} />
            ))
          : jobarr.map((job) => (
              <Card key={job.id} job={job} tagCheck={tagCheck} />
            ))}
      </section>
    </main>
  );
};

export default App;
