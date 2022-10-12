import CardsList from 'shared/components/CardsList';
import CurrentDay from 'modules/CurrentDay';
import CurrentWeekRange from 'modules/CurrentWeekRange';
import ProgressBar from 'shared/components/ProgressBar';
import NoTasks from './NoTasks';
import s from './WeekTabContent.module.scss';
import { getDaysTasks } from 'redux/task/task.selector';
import { useSelector } from 'react-redux';

const WeekTabContent = ({ selectedDate }) => {
  const tasks = useSelector(state => getDaysTasks(state, selectedDate));
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__header}>
        <div className={s.weekTabInfo}>
          <CurrentWeekRange />
          <CurrentDay selectedDate={selectedDate} />
        </div>
        <ProgressBar />
      </div>

      {tasks.length ? (
        <div className={s.cards_wrapper}>
          <CardsList tasks={tasks} />
        </div>
      ) : (
        <NoTasks />
      )}
    </div>
  );
};

export default WeekTabContent;
