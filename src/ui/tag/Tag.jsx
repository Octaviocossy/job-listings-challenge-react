import React from 'react';
import styles from './index.module.scss';
import iconRemove from '../../images/icon-remove.svg';

const Tag = ({ text, tagCheck, tagInFilter, removeTag }) => {
  return (
    <div className={styles['mainDiv']}>
      <div
        className={styles[!tagInFilter ? 'div' : 'divInFilter']}
        onClickCapture={() => tagCheck(text)}
      >
        <p className={styles['div--p']}>{text}</p>
      </div>
      {tagInFilter && (
        <button
          type="button"
          className={styles['button']}
          onClick={() => removeTag(text)}
        >
          <img src={iconRemove} alt="remove svg" />
        </button>
      )}
    </div>
  );
};

export default Tag;
