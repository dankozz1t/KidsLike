export const getCurrentDay = date => {
  if (!date) {
    return null;
  }

  const day = new Date(date).toLocaleString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
  const formatDay = day.replaceAll('/', '-');
  return formatDay;
};
