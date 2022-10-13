import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import ModalContentCreateTask from 'shared/components/ModalContentCreateTask';
import CardsList from 'shared/components/CardsList';
import Modal from 'shared/components/Modal';
import s from './PlanningPage.module.scss';
import { getAllTasks } from 'redux/task/task.selector';
import PlanningPoints from 'shared/components/PlanningPoints/PlanningPoints';

const PlanningPage = () => {
  const tasks = useSelector(getAllTasks, shallowEqual);
  const [open, setOpen] = useState(false);


  return (
    <>
      <PlanningPoints />

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
