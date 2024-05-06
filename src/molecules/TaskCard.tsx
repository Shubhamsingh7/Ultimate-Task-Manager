import { useNavigate } from "react-router-dom";
import { TaskCardType } from "../Types/Type";

function TaskCard(props: TaskCardType) {
  const navigate = useNavigate();
  const {
    description,
    dueDate,
    id,
    priority,
    title,
    handleDelete,
    hasMarkedDone,
  } = props;

  return (
    <div className={`task-card ${hasMarkedDone ? "task-completed" : ""}`}>
      <h4 className="title">{title}</h4>
      <p className="description">{description}</p>
      <div className="info-wrapper">
        <div className="data-card">
          Due Date: {new Date(dueDate).toISOString().split("T")[0]}
        </div>
        <div className="data-card">Priority: {priority}</div>
      </div>
      <div className="doneStatusContainer">
        <h4>
          Done Status:{" "}
          <span className={hasMarkedDone ? "done-class" : ""}>
            {hasMarkedDone ? "Done" : "Pending"}
          </span>
        </h4>
      </div>
      <div className="action-container">
        <button
          onClick={() => {
            navigate(`/edit-task/${id}`);
          }}
        >
          Edit
        </button>
        <button onClick={() => handleDelete(id, title)}>delete</button>
      </div>
    </div>
  );
}

export default TaskCard;
