import CardsList from 'shared/components/CardsList';
import CurrentDay from 'modules/CurrentDay';
import CurrentWeekRange from 'modules/CurrentWeekRange';
import ProgressBar from 'shared/components/ProgressBar';
import NoTasks from './NoTasks';
import s from './WeekTabContent.module.scss';

const WeekTabContent = ({ selectedDate }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__header}>
        <div className={s.weekTabInfo}>
          <CurrentWeekRange />
          <CurrentDay selectedDate={selectedDate} />
        </div>
        <ProgressBar />
      </div>
      <div className={s.cards_wrapper}>
        <CardsList
          tasks={[
            {
              _id: '1',
              title: 'Test',
              imgUrl:
                'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
              reward: '3',
            },
            {
              _id: '2',
              title: 'Test',
              imgUrl:
                'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
              reward: '3',
            },
            {
              _id: '3',
              title: 'Test',
              imgUrl:
                'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
              reward: '3',
            },
            {
              _id: '4',
              title: 'Test',
              imgUrl:
                'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
              reward: '3',
            },
            {
              _id: '5',
              title: 'Test',
              imgUrl:
                'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
              reward: '3',
            },
            {
              _id: '6',
              title: 'Test',
              imgUrl:
                'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
              reward: '3',
            },
            {
              _id: '7',
              title: 'Test',
              imgUrl:
                'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
              reward: '3',
            },
            {
              _id: '8',
              title: 'Test',
              imgUrl:
                'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
              reward: '3',
            },
          ]}
        />
      </div>
      <NoTasks />
    </div>
  );
};

export default WeekTabContent;
