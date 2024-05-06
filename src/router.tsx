import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import TaskList from "./pages/TaskList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskList />,
    errorElement: <h2>404 Page Not Found</h2>,
  },
  {
    path: "/add-task",
    element: <AddTask />,
  },
  {
    path: "/edit-task/:taskId",
    element: <EditTask />,
  },
  {
    path: "/not-found",
    element: <h2>404 Page Not Found</h2>,
  },
]);

export default router;
