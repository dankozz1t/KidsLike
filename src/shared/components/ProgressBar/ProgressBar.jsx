import s from './ProgressBar.module.scss';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

const ProgressBar = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.pointsInfo}>
        Points earned this week:
        <span className={s.points}>0</span>
      </p>
      <p className={s.pointsInfo}>
        Planned points for this week:
        <span className={s.points}>0</span>
      </p>
      <div className={s.progressWrapper}>
        <span className={s.pointsAmount}>
          <span className={s.collectedPoints}>0</span> / 0
        </span>
        <div className={s.progressTool}>
          <Progress
            percent={30}
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
