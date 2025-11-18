import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlantsTable from "./components/PlantsTable";
import PlantsList from "./components/PlantsList";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },

      { path: "/components/PlantsTable", element: <PlantsTable /> },
      { path: "/components/PlantsList", element: <PlantsList /> },
    ],
  },
]);

export default router;
