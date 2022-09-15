import React from "react";
import UserResults from "../users/UserResults";
import UserSearch from "../users/UserSearch";

const HomePage = () => {
  return (
    <div>
      <UserSearch />
      <UserResults />
    </div>
  );
};

export default HomePage;
