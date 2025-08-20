import React from "react";
import UserTable from "./components/UserTable";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
