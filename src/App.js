import "./App.css";
import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [isPending, setIsPending] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDash = (value) => {
    if (value === 1) {
      setIsPending(true);
    } else if (value === 2) {
      setIsPending(false);
    }
  };

  const handleSetModal = (state) => setIsModalOpen(state);

  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Header
          isPending={isPending}
          handleDash={handleDash}
          setModalOpen={handleSetModal}
        />
        <Dashboard
          setModalClose={handleSetModal}
          isPending={isPending}
          isModalOpen={isModalOpen}
        />
      </div>
    </div>
  );
}

export default App;