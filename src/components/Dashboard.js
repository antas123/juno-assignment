import React, { useState } from "react";
import Searchbar from "./Searchbar";
import Table from "./Table";
import CloseAccount from "./CloseAcount";

const Dashboard = ({ isPending, isModalOpen, setModalClose }) => {
  const [searchedUser, setSearchedUser] = useState("");
  const [clearSortConfig, setClearSortConfig] = useState(true);

  const setSearchedUserHandler = (username) => {
    setSearchedUser(username);
  };

  const clearSortConfigHandler = (state) => setClearSortConfig(state);

  return (
    <div>
      <Searchbar
        setUser={setSearchedUserHandler}
        searchedUser={searchedUser}
        setSortConfigIsClear={clearSortConfigHandler}
        isClearSortConfigButtonVisible={clearSortConfig}
      />
      {isModalOpen && <CloseAccount setModalClose={setModalClose} />}
      <Table
        isPending={isPending}
        searchedUser={searchedUser}
        setSortConfigIsClear={clearSortConfigHandler}
        clearSortConfig={clearSortConfig}
      />
    </div>
  );
};

export default Dashboard;