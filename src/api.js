export const getJobList = async () => {
  const url = 'http://localhost:4000/joblist';
  const resp = await fetch(url);
  return await resp.json();
};
