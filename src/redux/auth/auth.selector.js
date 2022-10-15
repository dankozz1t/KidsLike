import { createSelector } from '@reduxjs/toolkit';

export const selectAuthUser = state => state.auth;
export const getLoggedIn = state => state.auth.status;
export const getToken = state => state.auth.token;


export const getUser = state => state.auth.user;

export const selectStartWeekDate = state => state?.auth?.week?.startWeekDate;
export const selectEndWeekDate = state => state?.auth?.week?.endWeekDate;

export const getWeekRange = createSelector(
  [selectStartWeekDate, selectEndWeekDate],
  (start, end) => {
    if (!start && !end) {
      return null;
    }

    const startDate = new Date(start).getDate();
    const endDate = new Date(end).getDate();
    const startMonth = new Date(start).toLocaleString('en-US', {
      month: 'long',
    });
    const endMonth = new Date(end).toLocaleString('en-US', { month: 'long' });

    const currentMonth =
      startMonth === endMonth ? endMonth : [startMonth, endMonth];
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

    return obj;
  }
);
