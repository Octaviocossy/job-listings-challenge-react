export const getAllTags = (job) => {
  return [job.level, job.role].concat(job.tools, job.languages);
};

export const sortJob = (tags, jobarr) => {
  return jobarr.filter((user) => {
    return tags.every((tag) => getAllTags(user).includes(tag));
  });
};
