import React, { useState, useContext } from "react";
import { Githubcontext } from "../context";

const UserSearch = () => {
  const [text, setText] = useState("");
  const [placeText, setPlaceText] = useState("Search");
  const { searchUsers } = useContext(Githubcontext);

  const handleChange = (e) => {
    setText(e.target.value);
    setPlaceText("your Text must be at least 3 size");
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 max-w-7xl mx-auto gap-4 lg:gap-8 mg:gap-8 px-5 p-2.5 ">
      <div className="form-control mt-5">
        <div className="relative ">
          <input
            type="text"
            placeholder={placeText}
            className="w-full pr-40 bg-gray-200 input input-lg text-black px-5 p-2.5 rounded-md"
            value={text}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="flex justify-center items-center absolute top-0 right-0 rounded-l-none w-36 btn btn-lg h-full"
            onClick={() => {
              if (text.length > 3) {
                searchUsers(text);
              }
              setText("");
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSearch;
