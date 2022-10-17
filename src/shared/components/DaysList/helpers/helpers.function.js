const getShortWeekDay = day => {
  return day
    .toLocaleString('en-US', {
      weekday: 'long',
    })
    .slice(0, 3);
};

export const getIsPrevDays = (dateKeys, currentDay) => {
  return dateKeys
    .filter((_, index, array) => {
      const currentWeekDay = getShortWeekDay(new Date());

      return index < array.indexOf(currentWeekDay);
    })
    .includes(getShortWeekDay(new Date(currentDay)));
};
