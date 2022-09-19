import React from "react";
import { FaLink } from "react-icons/fa";

const RepoItem = ({ repo }) => {
  const { name, html_url } = repo || {};

  return (
    <div className="mb-2 rounded-md  bg-gray-800">
      <div className="flex p-3">
        <h3 className="text-xl font-semibold">
          <a
            href={html_url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col md:flex-row lg: flex-row xl:flex-row"
          >
            <FaLink className="inline mr-1 text white" />
            <span className="pl-2">{name}</span>
          </a>
        </h3>
      </div>
    </div>
  );
};

export default RepoItem;
