import React, { useContext, useEffect } from "react";
import { Githubcontext } from "../context";
import UserItem from "./UserItem";

const UserResults = () => {
  const { users, loading, fetchUsers } = useContext(Githubcontext);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 px-5 max-w-7xl mx-auto mt-10">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <h3 className="max-w-7xl mx-auto px-5 text-white">loading...</h3>;
  }
};

export default UserResults;
