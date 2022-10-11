import CardsList from 'shared/components/CardsList';
import ProgressBar from 'shared/components/ProgressBar';
import NoTasks from './NoTasks';
import s from './WeekTabContent.module.scss';

const WeekTabContent = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__header}>
        <div className={s.weekTabInfo}>
          <p className={s.weekTabInfo__week}>Week: 21-27 December</p>
          <p className={s.weekTabInfo__dayWrapper}>My tasks:
          <span className={s.weekTabInfo__day}>Tuesday, 22-12-2020</span>
          </p>
        </div>
        <ProgressBar/>
      </div>
      <div className={s.cards_wrapper}>
      <CardsList tasks = {
      [
        {
          _id: '1',
          title: 'Test',
          imgUrl: 'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
          reward: '3',
        }, {
          _id: '2',
          title: 'Test',
          imgUrl: 'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
          reward: '3',
        }, {
          _id: '3',
          title: 'Test',
          imgUrl: 'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
          reward: '3',
        }, {
          _id: '4',
          title: 'Test',
          imgUrl: 'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
          reward: '3',
        }, {
          _id: '5',
          title: 'Test',
          imgUrl: 'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
          reward: '3',
        },
        {
          _id: '6',
          title: 'Test',
          imgUrl: 'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
          reward: '3',
        },
        {
          _id: '7',
          title: 'Test',
          imgUrl: 'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
          reward: '3',
        },
        {
          _id: '8',
          title: 'Test',
          imgUrl: 'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
          reward: '3',
        },
      ]
      }/>
      </div>
      <NoTasks/>
      


    </div>
  )
}

export default WeekTabContent
