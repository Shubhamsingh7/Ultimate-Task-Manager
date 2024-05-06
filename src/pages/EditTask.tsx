import { useParams, useNavigate } from "react-router-dom";
import TaskEditor from "../molecules/TaskEditor";
import { PriorityEnum, TaskEditorType, storageTaskType } from "../Types/Type";
import { useEffect, useState } from "react";
import { foundTaskByID } from "../Utils/utils";

function EditTask() {
  const { taskId } = useParams();
  const [task, setTask] = useState<storageTaskType>({
    description: "",
    dueDate: "",
    title: "",
    id: "",
    priority: PriorityEnum.Medium,
    hasMarkedDone: false,
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (taskId) {
      const foundTask = foundTaskByID(taskId);

      if (!foundTask) {
        navigate("/not-found", { replace: true });
        return;
      }
      setTask(foundTask);
    } else {
      navigate("/not-found", { replace: true });
    }
  }, []);

  return (
    <section>
      <h2 className="page-heading">Edit Task</h2>
      {task.title !== "" ? (
        <TaskEditor
          isEditPage={true}
          description={task?.description}
          dueDate={new Date(task.dueDate).toISOString().split("T")[0]}
          priority={task?.priority}
          title={task?.title}
          id={taskId}
          hasMarkedDone={task.hasMarkedDone}
        />
      ) : (
        <h3>Loading....</h3>
      )}
    </section>
  );
}

export default EditTask;
