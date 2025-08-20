import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserTable from "./components/UserTable";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/components/UserTable", element: <UserTable /> }],
  },
]);

export default router;
