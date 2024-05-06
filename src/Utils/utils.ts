import { IFormInput, storageTaskType } from "../Types/Type";

const formatDateString = (dateString: any) => {
  let date: Date | string = dateString.dueDate;
  console.log(date);

  const day = new Date(date).getDate();
  const month = new Date(date).getMonth() + 1;
  const year = new Date(date).getFullYear();
  date = `${day}-${month}-${year}`;

  return date;
};

const getDataFromLocalStorage = (key: string) => {
  let storedData = localStorage.getItem(key);
  if (!storedData) {
    return null;
  }

  return JSON.parse(storedData);
};

const storeDataToLocalStorage = (data: any, key: string) => {
  localStorage.removeItem(key);
  localStorage.setItem(key, JSON.stringify(data));
};

const addTask = (taskData: storageTaskType) => {
  // get previous task list form local storage
  const taskList = getDataFromLocalStorage("task-list");
  if (!taskList) {
    storeDataToLocalStorage([taskData], "task-list");
    return;
  }
  storeDataToLocalStorage([...taskList, taskData], "task-list");
};

const editTask = (taskData: storageTaskType) => {
  // get previous task list form local storage
  const taskList = getDataFromLocalStorage("task-list");

  const UpdatedList = taskList.map((item: any) => {
    if (item?.id === taskData.id) {
      return taskData;
    }
    return item;
  });

  storeDataToLocalStorage(UpdatedList, "task-list");
};

const foundTaskByID = (id: string) => {
  // get previous task list form local storage
  const taskList = getDataFromLocalStorage("task-list");
  if (!taskList) {
    return null;
  }
  const foundItem = taskList.find((item: any) => {
    return item?.id === id;
  });
  return foundItem;
};

const deleteTaskById = (id: string) => {
  // get previous task list form local storage
  const taskList = getDataFromLocalStorage("task-list");
  if (!taskList) {
    return null;
  }

  const filterItem = taskList.filter((item: any) => {
    return item?.id !== id;
  });
  storeDataToLocalStorage(filterItem,"task-list")
  
  return filterItem;
};



function debounce(callback:any, delay:number) {
  let timerId:any;
  
  return function(this:any,...args:any) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

export { formatDateString, addTask, editTask, foundTaskByID,deleteTaskById,getDataFromLocalStorage,debounce };
