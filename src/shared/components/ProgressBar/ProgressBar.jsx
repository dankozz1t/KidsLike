import s from './ProgressBar.module.scss';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
// import { useState } from 'react';
import { useSelector } from 'react-redux';

const ProgressBar = () => {
  const points = useSelector(state => state.task.rewardsGained) + 6;
  const plannedPoints = useSelector(state => state.task.rewardsPlanned) + 10;

  let percent;

  if (plannedPoints) {
    percent = parseInt((points / plannedPoints) * 100);
  }

  if (points === 0) {
    percent = 0;
  }

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

export default ProgressBar;
