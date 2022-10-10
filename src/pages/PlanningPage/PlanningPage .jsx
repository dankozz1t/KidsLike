import React from 'react';
import { useState } from 'react';
import Modal from 'shared/components/Modal';
import modalRobot from 'image/modal-image/modal-robot.png';
import modalImage from 'image/modal-image/modal-image.svg';
import modalEditInput from 'image/modal-image/edit-24px 2.svg';
import s from './PlanningPage.module.scss';

const PlanningPage = () => {
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [reward, setReward] = useState("");

  const onHandleChangeTaskName = (e) => {
    setTaskName(e.target.value);
  };
  
  const onHandleChangeReward = (e) => {
    setReward(e.target.value);
  };

  
  return (
    <>
      <h1>planning</h1>
      <button type='button' onClick={() => setOpen(true)} >Open</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={s.container}>
          {<img className={s.modalRobot} src={modalRobot} alt="modalcat" />}
          {<img className={s.modalImage} src={modalImage} alt="modalImage" />}

          <form className={s.modalForm}>
            <div className={s.addTask}>
              <label className={s.modalInputLabel}>
                <img className={s.modalEditInput} src={modalEditInput} alt="modalEditInput" />
                <input
                  className={s.modalInput}
                  type="text"
                  placeholder="Add task..."
                  value={taskName}
              onChange={onHandleChangeTaskName}
                />
              </label>
            </div>
            <div className={s.addTask}>
              <label className={s.modalInputLabel}>
                <img className={s.modalEditInput} src={modalEditInput} alt="modalEditInput" />
                <input
                  className={s.modalInput}
                  type="number"
                  placeholder="Add points..."
                  value={reward}
              onChange={onHandleChangeReward}
                />
              </label>
            </div>
              <button className={s.modalButton} type="submit">
                Ок
              </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default PlanningPage;

