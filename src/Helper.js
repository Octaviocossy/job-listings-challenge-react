export const getAllTags = (job) => {
  const arr = [];
  arr.push(job.role, job.level);
  job.languages.map((tag) => arr.push(tag));
  job.tools.map((tag) => arr.push(tag));
  return arr;
};

export const sortJob = (tags, jobarr) => {
  return jobarr.filter((user) => {
    const allTags = [user.level, user.role].concat(user.tools, user.languages);
    return tags.every((tag) => allTags.includes(tag));
  });
};
