import React from 'react';
import styles from './index.module.scss';

const Tag = ({ text }) => {
  return (
    <div className={styles['div']}>
      <p className={styles['div--p']}>{text}</p>
    </div>
  );
};

export default Tag;
