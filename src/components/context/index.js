import { createContext, useReducer } from "react";
import githubReducer from "./reducers/GithubReducers";
import axios from "axios";

export const Githubcontext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

axios.defaults.headers.common["Authorization"] = `token ${GITHUB_TOKEN}`;

const initialState = {
  users: [],
  user: {},
  loading: true,
};

export const GithubContext = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${GITHUB_URL}/users`);
      const data = await response.data;
      dispatch({ type: "GET_USERS", payload: data });
    } catch (error) {
      alert(error);
    }
  };

  const getUser = async (login) => {
    try {
      if (!login) {
        dispatch({ type: "GET_USER", payload: null });
      } else {
        const response = await axios.get(`${GITHUB_URL}/users/${login}`);
        const { data } = response;
        dispatch({ type: "GET_USER", payload: data });
      }
    } catch (error) {
      alert(error);
    }
  };

  const searchUsers = async (text) => {
    const params = new URLSearchParams({ q: text });
    try {
      const response = await axios.get(`${GITHUB_URL}/search/users?${params}`);
      const { items } = await response.data;
      dispatch({ type: "GET_USERS", payload: items });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Githubcontext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        fetchUsers,
        getUser,
        searchUsers,
      }}
    >
      {children}
    </Githubcontext.Provider>
  );
};
