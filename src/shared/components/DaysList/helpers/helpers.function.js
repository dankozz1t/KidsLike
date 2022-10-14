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

      if (index < array.indexOf(currentWeekDay)) {
        return true;
      }
      return false;
    })
    .includes(getShortWeekDay(new Date(currentDay)));
};
