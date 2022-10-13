import ProgressBar from '../../shared/components/ProgressBar';
import { ReactComponent as GiftIcon } from 'assets/images/icon/icon-gifts.svg';

import s from './AwardHead.module.scss';

const AwardHead = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <GiftIcon />
        <p>MY PRIZES</p>
      </div>
      <ProgressBar />
    </div>
  );
};

export default AwardHead;
