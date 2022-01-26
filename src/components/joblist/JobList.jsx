import React, { useEffect, useState } from 'react';
import { getJobList } from '../../api';
import Card from '../card/Card';
import styles from './index.module.scss';

const JobList = () => {
  const [jobarr, setJobArr] = useState([]);
  useEffect(async () => {
    setJobArr(await getJobList());
  }, []);
  return (
    <section className={styles['section']}>
      {jobarr.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </section>
  );
};

export default JobList;
