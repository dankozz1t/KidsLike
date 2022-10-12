import CurrentDay from 'modules/CurrentDay';
import CurrentWeekRange from 'modules/CurrentWeekRange';
import ProgressBar from 'shared/components/ProgressBar';
import NoTasks from './NoTasks';
import s from './WeekTabContent.module.scss';

const WeekTabContent = ({selectedDate}) => {

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__header}>
        <div className={s.weekTabInfo}>
          <CurrentWeekRange/>
          <CurrentDay selectedDate={selectedDate}/>
        </div>
        <ProgressBar />
      </div>
      <NoTasks />
    </div>
  );
};

export default WeekTabContent;
