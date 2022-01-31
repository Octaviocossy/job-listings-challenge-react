import React from 'react';
import Tag from '../../ui/tag/Tag';
import styles from './index.module.scss';

const Filter = ({ filt, removeTag, removeAllTags }) => {
  return (
    <div className={styles['div']}>
      <div className={styles['div--tagsContainer']}>
        {filt.map((tag) => (
          <div key={tag}>
            <Tag text={tag} tagInFilter={true} removeTag={removeTag} />
          </div>
        ))}
      </div>
      <button
        type="button"
        className={styles['div--clearBtn']}
        onClick={removeAllTags}
      >
        Clear
      </button>
    </div>
  );
};

export default Filter;
