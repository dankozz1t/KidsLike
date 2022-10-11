import React from 'react';

const CardFooter = ({ ...taskInfo }) => {
    const { title, taskPoints } = taskInfo;

    return (
      <div>
        <div>
          <CardTitle title={title} />
          <PointAmount point={taskPoints} />
        </div>
      </div>
    );
  };
  
  export default CardFooter;