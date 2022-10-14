import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createTaskThunk } from 'redux/task/task.thunk';

import modalRobot from 'assets/images/modal-image/modal-robot.png';
import modalImage from 'assets/images/modal-image/modal-image.svg';
import modalEditInput from 'assets/images/modal-image/edit-24px 2.svg';

import s from './ModalContentCreateTask.module.scss';
import { toast } from 'react-toastify';


const ModalContentCreateTask = () => {
  const dispatch = useDispatch();
  const imageInputRef = useRef(null);

  const [taskName, setTaskName] = useState('');
  const [reward, setReward] = useState('');
  const [image, setImage] = useState(null);

  const onHandleChangeTaskName = e => {
    setTaskName(e.target.value);
  };

  const onHandleChangeReward = e => {
    setReward(e.target.value);
  };

  const onHandleChangeImage = e => {
    setImage(e.target.files[0]);
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    if (image.size > 2048000) {
      return toast.error('Too big size image');
    }

    const body = new FormData();

    body.append('title', taskName);
    body.append('reward', reward);
    body.append('file', image);

    dispatch(createTaskThunk(body));

    setTaskName('');
    setReward('');
  };

  return (
    <div className={s.container}>
      {<img className={s.modalRobot} src={modalRobot} alt="modalcat" />}
      <button
        type="button"
        className={s.addImageBtn}
        onClick={() => imageInputRef.current?.click()}
      >
        <img className={s.modalImage} src={modalImage} alt="" />
      </button>

      <form className={s.modalForm} onSubmit={onHandleSubmit}>
        <input
          type="file"
          hidden
          ref={imageInputRef}
          onChange={onHandleChangeImage}
        />

        <div className={s.addTask}>
          <label className={s.modalInputLabel}>
            <img
              className={s.modalEditInput}
              src={modalEditInput}
              alt="modalEditInput"
            />
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
            <img
              className={s.modalEditInput}
              src={modalEditInput}
              alt="modalEditInput"
            />
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
  );
};

export default ModalContentCreateTask;
