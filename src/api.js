export const getJobList = async () => {
  const resp = await fetch(`${import.meta.env.VITE_API_URL}`);
  return await resp.json();
};
