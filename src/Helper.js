export const getAllTags = (job) => {
  const arr = [];
  arr.push(job.role, job.level);
  job.languages.map((tag) => arr.push(tag));
  job.tools.map((tag) => arr.push(tag));
  return arr;
};
