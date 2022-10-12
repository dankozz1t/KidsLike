import React, { useState } from 'react';
import ModalContentCreateTask from 'shared/components/ModalContentCreateTask';
import CardsList from 'shared/components/CardsList';
import Modal from 'shared/components/Modal';

import s from './PlanningPage.module.scss';

const PlanningPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>planning</h1>
      <button type="button" onClick={() => setOpen(true)}>
        Open
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalContentCreateTask />
      </Modal>
      <div className={s.cards_wrapper}>
        <CardsList
          tasks={[
            {
              _id: '1',
              title: 'Test',
              imageUrl:
                'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
              reward: '3',
            },
            {
              _id: '2',
              title: 'Test Test',
              imageUrl:
                'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
              reward: '1',
            },
            {
              _id: '3',
              title: 'Test Test Test',
              imageUrl:
                'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
              reward: '5',
            },
            {
              _id: '4',
              title: 'NE TEST',
              imageUrl:
                'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
              reward: '6',
            },
          ]}
        />
      </div>
    </>
  );
};

export default PlanningPage;
