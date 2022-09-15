import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Githubcontext } from "../context";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";

const User = () => {
  let { user, getUser } = useContext(Githubcontext);
  const { loginName } = useParams();
  let {
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user || {};

  useEffect(() => {
    getUser(loginName);
  }, []);

  if (user) {
    return (
      <div className="max-w-7xl mx-auto px-5 my-32">
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="mb-6 md:mb-0">
            <div className="rounded-lg  card image-full">
              <div className="justify-end relative ">
                <div className="absolute opacity-30 bg-black w-5/6 h-full rounded-xl"></div>
                <img src={avatar_url} alt="" className="rounded-xl w-5/6" />
                <h2 className=" mb-0 absolute -mt-20 ml-3 text-3xl  text-white tracking-widest">
                  {loginName}
                </h2>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title"></h1>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <h3 className="max-w-7xl  mx-auto px-5 my-32 text-white">loading...</h3>
    );
  }
};

export default User;
