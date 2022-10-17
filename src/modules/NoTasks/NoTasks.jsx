import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'shared/components/Button';

import s from './NoTasks.module.scss';

import noTasksDesktop1x from 'assets/images/main-page/no-tasks-desktop@1x.png';
import noTasksDesktop2x from 'assets/images/main-page/no-tasks-desktop@2x.png';
import noTasksTablet1x from 'assets/images/main-page/no-tasks-tablet@1x.png';
import noTasksTablet2x from 'assets/images/main-page/no-tasks-tablet@2x.png';
import noTasksMobile1x from 'assets/images/main-page/no-tasks-mobile@1x.png';
import noTasksMobile2x from 'assets/images/main-page/no-tasks-mobile@2x.png';

const NoTasks = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>No tasks on this day</h2>
      <Link to="/planning" className={s.link}>
        <Button>Schedule tasks</Button>
      </Link>
      <picture>
        <source
          srcSet={`${noTasksDesktop1x} 1x, ${noTasksDesktop2x} 2x`}
          media="(min-width:1280px)"
        />
        <source
          srcSet={`${noTasksTablet1x} 1x, ${noTasksTablet2x} 2x`}
          media="(min-width:768px)"
        />
        <source
          srcSet={`${noTasksMobile1x} 1x, ${noTasksMobile2x} 2x`}
          media="(min-width:320px)"
        />
        <img src={noTasksMobile1x} alt="" />
      </picture>
    </div>
  );
};

export default NoTasks;
