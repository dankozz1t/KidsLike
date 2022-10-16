import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { getRewardsGained, getRewardsPlanned } from 'redux/task/task.selector';

import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import s from './ProgressBar.module.scss';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';

const PATH_NAME = Object.freeze({
  MAIN: '/main',
  PLANNING: '/planning',
  AWARD: '/award',
});

const ProgressBar = () => {
  const points = useSelector(getRewardsGained || 0, shallowEqual);
  const plannedPoints = useSelector(getRewardsPlanned || 0, shallowEqual);
  const { pathname } = useLocation();

  const percent = parseInt((points / plannedPoints) * 100);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  if(!isMobile){
    return (
      <div className={s.wrapper}>
        <p className={pathname === PATH_NAME.AWARD ? s.pointsInfoAward : s.pointsInfo}>
          Points earned this week:
          <span className={s.points}>{points}</span>
        </p>
        <p className={pathname === PATH_NAME.AWARD ? s.pointsInfoAward : s.pointsInfo}>
          Planned points for this week:
          <span className={s.points}>{plannedPoints}</span>
        </p>
        <div className={s.progressWrapper}>
          <span className={s.pointsAmount}>
            <span className={s.collectedPoints}>{points}</span> / {plannedPoints}
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
      </div>
    );
  }

};

export default React.memo(ProgressBar);
