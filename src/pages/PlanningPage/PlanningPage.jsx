import { shallowEqual, useSelector } from 'react-redux';
import { getAllTasks } from 'redux/task/task.selector';
import CardListLoader from 'shared/components/CardListLoader';

import CardsList from 'shared/components/CardsList';
import PlanningPoints from 'shared/components/PlanningPoints/PlanningPoints';

import s from './PlanningPage.module.scss';

const PlanningPage = () => {
  const tasks = useSelector(getAllTasks, shallowEqual);

  return (
    <>
      <PlanningPoints />
      <div className={s.cards_wrapper}>
        {tasks.length ? <CardsList tasks={tasks} /> : <CardListLoader />}
      </div>
    </>
  );
};

export default PlanningPage;
