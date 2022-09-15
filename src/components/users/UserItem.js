import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card shadow-md compact side bg-base-100 bg-slate-700 rounded-md">
      <div className="flex flex-row items-center space-x-4 card-body p-2.5">
        <div className="avatar">
          <div className="rounded-full shadow w-14 h-14 ">
            <img src={avatar_url} alt="" className="rounded-full" />
          </div>
        </div>
        <div>
          <h2 className="card-title text-gray-50">{login}</h2>
          <Link className="text-slate-400" to={`/user/${login}`}>
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
