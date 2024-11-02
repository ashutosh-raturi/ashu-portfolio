import React from "react";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Nested routes would be rendered here */}
      </main>
    </>
  );
};

export default App;
