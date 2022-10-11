import { createSelector } from '@reduxjs/toolkit';

export const selectAuthUser = state => state.auth;
export const getLoggedIn = state => state.auth.status;

export const getUser = state => state.auth.user;

export const selectStartWeekDate = state => state?.auth?.week?.startWeekDate;
export const selectEndWeekDate = state => state?.auth?.week?.endWeekDate;

export const getCurrentDay = () => {
  const day = new Date().toLocaleString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
  const formatDay = day.replaceAll('/', '-');
  return formatDay;
};

// memoization
export const getWeekRange = createSelector(
  [selectStartWeekDate, selectEndWeekDate],
  (start, end) => {
    const startDate = new Date(start).getDate();
    const endDate = new Date(end).getDate();
    const startMonth = new Date(start).toLocaleString('en-US', {
      month: 'long',
    });
    const endMonth = new Date(end).toLocaleString('en-US', { month: 'long' });

    // for check that it's work with different months
    // const endMonth = new Date('2020-12-28').toLocaleString('en-US',{month: 'long'});

    console.log('startMonth', startMonth);
    console.log('endMonth', endMonth);

    const currentMonth =
      startMonth === endMonth ? endMonth : [startMonth, endMonth];
    console.log(endDate, startDate);
    return {
      endDate,
      startDate,
      currentMonth,
    };
  }
);

export const getDates = createSelector(
  [selectStartWeekDate, selectEndWeekDate],
  (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const obj = {};
    while (startDate <= endDate) {
      let dayNow = startDate;

      const day = new Date(dayNow).toISOString().split('T')[0];
      const week = new Date(dayNow).toLocaleString('en-US', {
        weekday: 'long',
      });

      obj[week] = day;

      dayNow = startDate.setDate(startDate.getDate() + 1);
    }

    console.log(obj);
    return obj;
  }
);
