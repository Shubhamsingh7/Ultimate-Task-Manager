import { useNavigate } from "react-router-dom";
import { TaskCardType } from "../Types/Type";
import DueDate from "../atoms/DueDate";

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
      <h4
        className="title"
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      />
      <p
        className="description"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
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
      <div>
        <DueDate date={dueDate} />
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
