import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import ModalContentCreateTask from 'shared/components/ModalContentCreateTask';
import CardsList from 'shared/components/CardsList';
import Modal from 'shared/components/Modal';
import s from './PlanningPage.module.scss';
import { getAllTasks } from 'redux/task/task.selector';
import iconAddTasks from 'assets/images/icon/icon-addTasks.svg';
import { getRewardsPlanned } from 'redux/task/task.selector';


const PlanningPage = () => {
  const tasks = useSelector(getAllTasks, shallowEqual);
  const [open, setOpen] = useState(false);
  const plannedPoints = useSelector(getRewardsPlanned || 0, shallowEqual);

  return (
    <>
      <div className={s.planForWeek}>

        <div className={s.tasksForPoints}>
          <span className={s.weekDate}>Plan for the week</span>
          {/* <div className={s.plannedPoints}>{plannedPoints}</div> */}
        </div>

        <div className={s.tasksForPoints}>
          <span className={s.description}>Defined tasks for</span>
          <div className={s.plannedPoints}>{plannedPoints}</div>
          <span className={s.description}>points</span>
        </div>
      
        <div className={s.AddTasks}>
          <p className={s.description}>If you want to get more prizes - add tasks :)</p>
          <button className={s.btnAddTasks} type="button" onClick={() => setOpen(true)}>
            <img src={iconAddTasks} alt="iconAddTasks" />
          </button>
        </div>
        
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalContentCreateTask />
      </Modal>
      <div className={s.cards_wrapper}>
        <CardsList tasks={tasks} />
      </div>
    </>
  );
};

export default PlanningPage;
