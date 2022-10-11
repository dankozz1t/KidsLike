import { useState } from "react";
import modalRobot from 'assets/images/modal-image/modal-robot.png';
import modalImage from 'assets/images/modal-image/modal-image.svg';
import modalEditInput from 'assets/images/modal-image/edit-24px 2.svg';
import s from './ModalContentCreateTask.module.scss';

const ModalContentCreateTask = () => {
    const [taskName, setTaskName] = useState("");
    const [reward, setReward] = useState("");

    const onHandleChangeTaskName = (e) => {
        setTaskName(e.target.value);
    };
  
    const onHandleChangeReward = (e) => {
        setReward(e.target.value);
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        setTaskName('');
        setReward('');
    };

    return (
        <div className={s.container}>
            {<img className={s.modalRobot} src={modalRobot} alt="modalcat" />}
            {<img className={s.modalImage} src={modalImage} alt="modalImage" />}

            <form className={s.modalForm} onSubmit={onHandleSubmit}>
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
    );
};

export default ModalContentCreateTask;