import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { getRewardsGained, getRewardsPlanned } from 'redux/task/task.selector';

import Loader from 'shared/components/Loader';

import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import s from './ProgressBar.module.scss';

const ProgressBar = () => {
  const points = useSelector(getRewardsGained || 0, shallowEqual);
  const plannedPoints = useSelector(getRewardsPlanned || 0, shallowEqual);

  if (!points && !plannedPoints) {
    return <Loader width="40" />;
  }

  const percent = parseInt((points / plannedPoints) * 100);

  return (
    <div className={s.wrapper}>
      <p className={s.pointsInfo}>
        Points earned this week:
        <span className={s.points}>{points}</span>
      </p>
      <p className={s.pointsInfo}>
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
                symbol: '🏄‍',
                color: 'rgb(223, 105, 180)',
              },
              active: {
                symbol: '😀',
                color: '#fbc630',
              },
              default: {
                symbol: '🤔',
                color: '#fbc630',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProgressBar);
