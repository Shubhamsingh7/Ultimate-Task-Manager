import { RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "./App.css";
import router from "./router";

function App() {
  return (
    <main>
      <div className="container">
        <h1>Ultimate Task Manager</h1>
        <RouterProvider router={router} />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="dark"
      />
    </main>
  );
}

export default App;
