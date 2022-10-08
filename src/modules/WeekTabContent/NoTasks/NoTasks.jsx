import Button from "shared/components/Button";
import s from "./NoTasks.module.scss";

const NoTasks = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>No tasks on this day</h2>
      <Button>Schedule tasks</Button>
    </div>
  )
}

export default NoTasks
