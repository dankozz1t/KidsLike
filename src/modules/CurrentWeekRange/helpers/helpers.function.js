export const getCurrentWeekRange = weekRange => {
  if (typeof weekRange.currentMonth === 'object') {
    return `Week: ${weekRange.startDate} ${weekRange.currentMonth[0]} - ${weekRange.endDate} ${weekRange.currentMonth[1]}`;
  }
  return `Week: ${weekRange.startDate}-${weekRange.endDate}
    ${weekRange.currentMonth}`;
};
