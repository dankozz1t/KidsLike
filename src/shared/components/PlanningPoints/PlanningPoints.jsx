import React, { useState } from 'react';
import iconAddTasks from 'assets/images/icon/icon-addTasks.svg';
import { selectEndWeekDate, selectStartWeekDate } from 'redux/auth/auth.selector';
import { getRewardsPlanned } from 'redux/task/task.selector';
import { shallowEqual, useSelector } from 'react-redux';
import Modal from 'shared/components/Modal';
import ModalContentCreateTask from 'shared/components/ModalContentCreateTask';
import s from './PlanningPoints.module.scss'


const PlanningPoints = () => {
    const [open, setOpen] = useState(false);
    const plannedPoints = useSelector(getRewardsPlanned || 0, shallowEqual);
    const startDate = useSelector(selectStartWeekDate, shallowEqual);
    const endDate = useSelector(selectEndWeekDate, shallowEqual);


    const configuredStartDate = () => new Date(startDate).getDate();
  
    const configuredEndDate = () => {
        const date = new Date(endDate);
        const day = date.getDate();
        let month = date.getMonth() + 1;
        const year = date.getFullYear();

        if (month.toString().length === 1) {
            month = "0" + month;
        }

        return `${day}.${month}.${year}`;
    };

    const startingDate = configuredStartDate();
    const endingDate = configuredEndDate();

    return (
        <>
            <div className={s.planForWeek}>

                <div className={s.actualWeek}>
                    <span className={s.actualWeekDscr}>Plan for the week</span>
                    <div className={s.actualWeekDate}>{startingDate} <span> - </span> {endingDate} </div>
                </div>

                <div className={s.tasks}>
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
        
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalContentCreateTask />
            </Modal>
        </>
    )
};


export default PlanningPoints;