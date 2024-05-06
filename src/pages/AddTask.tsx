import TaskEditor from "../molecules/TaskEditor";
import { PriorityEnum } from "../Types/Type";

function AddTask() {
  return (
    <section>
      <h2 className="page-heading">Add New Task</h2>
      <TaskEditor
        isEditPage={false}
        description=""
        dueDate=""
        priority={PriorityEnum.Medium}
        title=""
        hasMarkedDone={false}
      />
    </section>
  );
}

export default AddTask;
