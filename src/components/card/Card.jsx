import React, { useEffect, useState } from 'react';
import photosnapLogo from '../../images/photosnap.svg';
import manageLogo from '../../images/manage.svg';
import accountLogo from '../../images/account.svg';
import myhomeLogo from '../../images/myhome.svg';
import loopstudiosLogo from '../../images/loop-studios.svg';
import faceitLogo from '../../images/faceit.svg';
import shortlyLogo from '../../images/shortly.svg';
import insureLogo from '../../images/insure.svg';
import eyecamcoLogo from '../../images/eyecam-co.svg';
import theairfliterLogo from '../../images/the-air-filter-company.svg';
import { getAllTags } from '../../Helper';
import Tag from '../../ui/tag/Tag';
import styles from './index.module.scss';

const lib = {
  Photosnap: photosnapLogo,
  Manage: manageLogo,
  Account: accountLogo,
  MyHome: myhomeLogo,
  'Loop Studios': loopstudiosLogo,
  FaceIt: faceitLogo,
  Shortly: shortlyLogo,
  Insure: insureLogo,
  'Eyecam Co.': eyecamcoLogo,
  'The Air Filter Company': theairfliterLogo,
};

const Card = ({ job }) => {
  const [tags, setTags] = useState([]);
  const { company, contract, featured, location, position, postedAt } = job;
  useEffect(() => {
    setTags(getAllTags(job));
  }, []);
  return (
    <article
      className={
        styles[`${featured && job.new ? 'articlewithborder' : 'article'}`]
      }
    >
      <div className={styles['article--logoDiv']}>
        <img src={lib[company]} alt="logo" />
      </div>
      <div className={styles['article--infoDiv']}>
        <div className={styles['article--infoDiv__firstSubDiv']}>
          <p className={styles['article--infoDiv__firstSubDiv--p']}>
            {company}
          </p>
          {job.new && (
            <p className={styles['article--infoDiv__firstSubDiv--new']}>NEW!</p>
          )}
          {featured && (
            <p className={styles['article--infoDiv__firstSubDiv--featured']}>
              FEATURED
            </p>
          )}
        </div>
        <div className={styles['article--infoDiv__title']}>
          <p>{position}</p>
        </div>
        <div className={styles['article--infoDiv__secondSubDiv']}>
          <p>{postedAt}</p>
          {'•'}
          <p>{contract}</p>
          {'•'}
          <p>{location}</p>
        </div>
      </div>
      <div className={styles['article--tagsDiv']}>
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </article>
  );
};

export default Card;
