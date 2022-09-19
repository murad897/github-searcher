import React from "react";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Githubcontext } from "../context";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import RepoList from "../repos/RepoList";

const User = () => {
  let { user, getUser, getUserRepos, repos } = useContext(Githubcontext);
  const { loginName } = useParams();
  let {
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user || {};

  useEffect(() => {
    getUser(loginName);
    getUserRepos(loginName);
  }, []);

  if (user) {
    return (
      <div className="max-w-7xl mx-auto px-5 my-32">
        <div className="grid grid-cols-1  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8 ">
          <div className="flex mb-6 md:mb-0">
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
            <div className="mb-6 flex flex gap-4 flex-col items-start xl:flex-row  lg:flex-row  md:flex-row ">
              <h1 className="tracking-widest font-bold text-white text-xl ">
                {loginName}
              </h1>
              <div className="px-8 py-2 px-2.5 text-lg  badge inline-flex items-center justify-center  py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-teal-500 rounded-full ">
                {type}
              </div>
              {hireable ? (
                <div className="px-8 py-2 text-lg inline-flex items-center justify-center  py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-lime-500 rounded-full">
                  hireable
                </div>
              ) : (
                <div className="px-8 py-2 text-lg inline-flex items-center justify-center  py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-lime-500 rounded-full">
                  not hireable
                </div>
              )}
            </div>
            <div className="text-white max-w-xs">{bio}</div>
            <div className="mt-10 mb-5">
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="rounded-md text-white tracking-widest px-8 py-2 border-2"
              >
                Visit github Profile
              </a>
            </div>
            <div className="w-full rounded-lg stats bg-base-100 stats grid grid-cols-1 gap-4 ">
              {location ? (
                <div className="stat block p-6 max-w-sm text-white rounded-lg border border-gray-200 cursor-pointer shadow-md  bg-slate-700 mt-7">
                  <div className="stat-title text-md font-bold tracking-widest">
                    location
                  </div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              ) : (
                ""
              )}
              {blog ? (
                <div className="stat block p-6 max-w-sm text-white rounded-lg border border-gray-200 cursor-pointer shadow-md  bg-slate-700 mt-7">
                  <div className="stat-title text-md font-bold tracking-widest">
                    website
                  </div>
                  <div className="text-lg stat-value">
                    <a
                      href={`${blog}`}
                      target="_blank"
                      rel="noreferrer"
                      className="break-words"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              ) : (
                ""
              )}
              {twitter_username ? (
                <div className="stat block p-6 max-w-sm text-white rounded-lg border border-gray-200 cursor-pointer shadow-md  bg-slate-700 mt-7">
                  <div className="stat-title text-md font-bold tracking-widest">
                    Twitter
                  </div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="w-full mt-11 py-5 mb-6 round-lg bg-base-100 stats grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 text-white text-center">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FaUsers className="text-3xl text-rose-500 w-full" />
                </div>
                <div className="stat-title">Followers</div>
                <div className="stat-value text-3xlmd: text-4xl">
                  {followers}
                </div>
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FaUserFriends className="text-3xl text-rose-500 w-full" />
                </div>
                <div className="stat-title ">Following</div>
                <div className="stat-value  text-3xlmd: text-4xl">
                  {following}
                </div>
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FaCodepen className="text-3xl text-rose-500 w-full" />
                </div>
                <div className="stat-title ">Public repos</div>
                <div className="stat-value text-3xlmd: text-4xl">
                  {public_repos}
                </div>
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FaStore className="text-3xl text-rose-500 w-full" />
                </div>
                <div className="stat-title ">Public Gists</div>
                <div className="stat-value text-3xlmd: text-4xl">
                  {public_gists}
                </div>
              </div>
            </div>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    );
  } else {
    return (
      <h3 className="max-w-7xl  mx-auto px-5 my-32 text-white">loading...</h3>
    );
  }
};

export default User;
