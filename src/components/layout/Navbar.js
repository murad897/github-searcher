import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Githubcontext } from "../context";
import { useContext } from "react";

const Navbar = () => {
  let { getUser } = useContext(Githubcontext);

  return (
    <div className="nav-container shadow-lg bg-zinc-900 text-white">
      <nav className="navbar flex items-center justify-between h-20  mb12 max-w-7xl mx-auto px-5">
        <div className="nav-logo">
          <Link to="/">
            <FaGithub
              className="text-3xl cursor-pointer"
              onClick={async () => await getUser(null)}
            />
          </Link>
        </div>
        <div className="navigation flex gap-7">
          <Link
            to="/"
            className="btn btn-ghost btn-sm rounded-md border-2 py-1 px-2.5 hover:border-blue-500"
            onClick={async () => await getUser(null)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="btn btn-ghost btn-sm rounded-md border-2 py-1 px-2.5 hover:border-blue-500"
          >
            About
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
