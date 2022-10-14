import { shallowEqual, useSelector } from 'react-redux';
import CardsList from 'shared/components/CardsList';
import s from './PlanningPage.module.scss';
import { getAllTasks } from 'redux/task/task.selector';
import PlanningPoints from 'shared/components/PlanningPoints/PlanningPoints';

const PlanningPage = () => {
  const tasks = useSelector(getAllTasks, shallowEqual);


  return (
    <>
      <PlanningPoints />
   
      <div className={s.cards_wrapper}>
        <CardsList tasks={tasks} />
      </div>
    </>
  );
};

export default PlanningPage;
