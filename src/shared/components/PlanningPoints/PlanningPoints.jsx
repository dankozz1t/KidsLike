import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  selectEndWeekDate,
  selectStartWeekDate,
} from 'redux/auth/auth.selector';
import { getRewardsGained, getRewardsPlanned } from 'redux/task/task.selector';

import Modal from 'shared/components/Modal';
import ModalContentCreateTask from 'shared/components/ModalContentCreateTask';
import Loader from 'shared/components/Loader';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import iconAddTasks from 'assets/images/icon/icon-addTasks.svg';

import s from './PlanningPoints.module.scss';

const PATH_NAME = Object.freeze({
  MAIN: '/main',
  PLANNING: '/planning',
  AWARD: '/award',
});

const PlanningPoints = () => {
  const [open, setOpen] = useState(false);
  const points = useSelector(getRewardsGained || 0, shallowEqual);
  const plannedPoints = useSelector(getRewardsPlanned || 0, shallowEqual);
  const startDate = useSelector(selectStartWeekDate, shallowEqual);
  const endDate = useSelector(selectEndWeekDate, shallowEqual);
  const { pathname } = useLocation();
  const percent = parseInt((points / plannedPoints) * 100);

  if (!startDate && !endDate) {
    return <Loader width="229" />;
  }

  const configuredStartDate = () => new Date(startDate).getDate();

  const configuredEndDate = () => {
    const date = new Date(endDate);
    const day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (month.toString().length === 1) {
      month = '0' + month;
    }

    return `${day}.${month}.${year}`;
  };

  const startingDate = configuredStartDate();
  const endingDate = configuredEndDate();

  return (
    <>
      <div className={s.planForWeek}>
        {pathname === PATH_NAME.PLANNING && (
          <div className={s.actualWeek}>
            <span className={s.actualWeekDscr}>Plan for the week:</span>
            <div className={s.actualWeekDate}>
              {startingDate} <span> - </span> {endingDate}
            </div>
          </div>
        )}
        <div className={s.tasks}>
          {pathname === PATH_NAME.PLANNING ? (
            <div className={s.tasksForPoints}>
              <span className={s.description}>Defined tasks for</span>
              <div className={s.box}>
                <div className={s.plannedPoints}>{plannedPoints}</div>
              </div>
              <span className={s.description}>points</span>
              <span className={s.userDescription}>POINTS</span>
            </div>
          ) : (
            <div className={s.progressWrapper}>
              <span className={s.pointsAmount}>
                <span className={s.collectedPoints}>{points}</span> /{' '}
                {plannedPoints}
              </span>
              <div className={s.progressTool}>
                <Progress
                  percent={percent >= 100 ? 100 : percent}
                  theme={{
                    success: {
                      color: 'rgb(223, 105, 180)',
                    },
                    active: {
                      color: '#fbc630',
                    },
                    default: {
                      color: '#fbc630',
                    },
                  }}
                />
              </div>
            </div>
          )}
          <div className={s.AddTasks}>
            <p className={s.description}>
              If you want to get more prizes - add tasks :)
            </p>
            <button
              className={s.btnAddTasks}
              type="button"
              onClick={() => setOpen(true)}
            >
              <img src={iconAddTasks} alt="iconAddTasks" />
            </button>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalContentCreateTask />
      </Modal>
    </>
  );
};

export default React.memo(PlanningPoints);
