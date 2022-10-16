import { createSelector } from '@reduxjs/toolkit';
import { getDates } from 'redux/auth/auth.selector';
import { getIsPrevDays } from 'shared/components/DaysList/helpers/helpers.function';

export const isLoadingTasks = state => state.task.isLoading;
export const getTasks = state => state.task.tasks;
export const getBalance = state => state.task.balance;
export const getRewardsGained = state => state.task.rewardsGained;
export const getRewardsPlanned = state => state.task.rewardsPlanned;

export const getDaysTasks = createSelector(
  [getTasks, (_, currentDate) => currentDate],
  (tasks, currentDate) => {
    if (!currentDate) {
      return null;
    }

    const tasksDay = [];

    for (let i = 0; i < tasks.length; i++) {
      const currentTask = tasks[i];

      const activeTasks = currentTask.days.find(
        ({ date, isActive }) => date === currentDate && isActive
      );

      if (activeTasks) {
        tasksDay.push({
          _id: currentTask._id,
          title: currentTask.title,
          reward: currentTask.reward,
          imageUrl: currentTask.imageUrl,
          isCompleted: activeTasks?.isCompleted,
        });
      }
    }
    return tasksDay;
  }
);

export const getAllTasks = createSelector([getTasks], tasks =>
  tasks.map(({ _id, imageUrl, reward, title }) => ({
    _id,
    imageUrl,
    reward,
    title,
  }))
);

export const getDaysList = createSelector(
  [getTasks, getDates, (_, id) => id],
  (tasks, days, id) => {
    const weekDaysKeys = Object.keys(days).map(value => value.slice(0, 3));

    const tasksDay = [];

    const currentTask = tasks.find(task => task._id === id);

    for (let i = 0; i < currentTask?.days?.length; i++) {
      const currentDay = currentTask.days[i];

      tasksDay.push({
        day: weekDaysKeys[i],
        isChecked: currentDay.isActive,
        isDisabled: getIsPrevDays(weekDaysKeys, currentDay.date),
      });
    }

    return tasksDay;
  }
);
