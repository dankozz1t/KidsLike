import React from 'react';
import { useState } from 'react';
import Modal from 'shared/components/Modal';
import ModalContentCreateTask from 'shared/components/ModalContentCreateTask';

const PlanningPage = () => {
  const [open, setOpen] = useState(false);
 
  return (
    <>
      <h1>planning</h1>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalContentCreateTask />
      </Modal>
    </>
  );
};

export default PlanningPage;

