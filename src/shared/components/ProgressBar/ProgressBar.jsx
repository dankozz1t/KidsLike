import s from './ProgressBar.module.scss';

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
      <p className={s.progressWrapper}>
        <span className={s.pointsAmount}>
          <span className={s.collectedPoints}>{0}</span> / {0}
        </span>
        <span className={s.progressTool}></span>
      </p>
    </div>
  );
};

export default ProgressBar;
