import { useEffect, useRef, useState } from "react";
import TaskCard from "../molecules/TaskCard";
import { TaskCardType } from "../Types/Type";
import {
  debounce,
  deleteTaskById,
  getDataFromLocalStorage,
} from "../Utils/utils";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FilterContainer from "../molecules/FilterContainer";

function TaskList() {
  const navigate = useNavigate();
  const [taskList, settaskList] = useState<TaskCardType[]>([]);

  const tempList = useRef<TaskCardType[]>([]);

  useEffect(() => {
    const storedData = getDataFromLocalStorage("task-list");
    if (storedData) {
      settaskList(storedData);
      tempList.current = storedData;
    }
  }, []);

  const handleDelete = (id: string, title: string) => {
    const confirmation = window.confirm(
      "Do you want to delete item with title " + title
    );

    if (confirmation) {
      const filterTask = deleteTaskById(id);
      settaskList(filterTask);
      tempList.current = filterTask;
      toast("deleted task successfully");
    }
  };

  const handleSearch = (searchText: string) => {
    if (!tempList.current) {
      return;
    }
    const filterdList = tempList?.current?.filter((item: any) => {
      const { title, description } = item;
      if (title.includes(searchText) || description.includes(searchText)) {
        return item;
      }
    });

    settaskList(filterdList);
  };
  const debouncedSearch = debounce(handleSearch, 300);

  const handlePriorityFilter = (e: string) => {
    if (!tempList.current) {
      return;
    }
    if (e === "") {
      settaskList(tempList.current);
      return;
    }

    const filterdList = tempList?.current?.filter((item: any) => {
      const { priority } = item;
      if (priority === e) {
        return item;
      }
    });
    settaskList(filterdList);
  };

  const handleDoneFilter = (hasMarkedDone: any) => {
    if (!tempList.current) {
      return;
    }
    if (hasMarkedDone === "") {
      settaskList(tempList.current);
      return;
    }

    const filterdList = tempList?.current?.filter((item: any) => {
      if (item.hasMarkedDone === hasMarkedDone) {
        return item;
      }
    });
    settaskList(filterdList);
  };

  const handleDueDateSort = (sortByDueDate: boolean | string) => {
    if (!tempList.current) {
      return;
    }
    if (!sortByDueDate) {
      settaskList(tempList.current);
      return;
    }
    const unsortedList = Array.from(tempList?.current);
    unsortedList?.sort(function (a, b) {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    });

    settaskList(unsortedList);
  };

  const handleClearFilter = () => {
    settaskList(tempList.current);
  };

  return (
    <section>
      <div className="pageWrapper">
        <FilterContainer
          debouncedSearch={debouncedSearch}
          handlePriorityFilter={handlePriorityFilter}
          handleDoneFilter={handleDoneFilter}
          handleDueDateSort={handleDueDateSort}
          handleClearFilter={handleClearFilter}
        />

        <div className="button-wrapper">
          <button
            className="add-new-task"
            onClick={() => {
              navigate("/add-task");
            }}
          >
            Add new task
          </button>
        </div>
        {taskList.length > 0 ? (
          <div className="task-container">
            {taskList.map((item) => {
              return (
                <TaskCard key={item.id} {...item} handleDelete={handleDelete} />
              );
            })}
          </div>
        ) : (
          <h2 style={{ textAlign: "center" }}>No Task found</h2>
        )}
      </div>
    </section>
  );
}

export default TaskList;
