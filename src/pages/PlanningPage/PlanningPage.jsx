import Footer from 'modules/Footer';
import { shallowEqual, useSelector } from 'react-redux';
import { getAllTasks } from 'redux/task/task.selector';

import CardsList from 'shared/components/CardsList';
import CardListLoader from 'shared/components/CardListLoader';
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

      <div className={s.footer}>
        <Footer />
      </div>
    </>
  );
};

export default PlanningPage;
