import ProgressBar from 'shared/components/ProgressBar';
import NoTasks from './NoTasks';
import s from './WeekTabContent.module.scss';

const WeekTabContent = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__header}>
        <div className={s.weekTabInfo}>
          <p className={s.weekTabInfo__week}>Week: 21-27 December</p>
          <p className={s.weekTabInfo__dayWrapper}>My tasks:
          <span className={s.weekTabInfo__day}>Tuesday, 22-12-2020</span>
          </p>
        </div>
        <ProgressBar/>
      </div>
      <NoTasks/>


    </div>
  )
}

export default WeekTabContent
