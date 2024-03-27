import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  post: {},
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, post: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, post: {}, error: "Something went wrong!" };
    default:
      return state;
  }
};
function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const FetchData = () => {
    const info = axios.get("https://jsonplaceholder.typicode.com/posts/5");
    info.then((response) => {
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    });
    info.catch((error) => {
      dispatch({ type: "FETCH_ERROR" });
    });
  };
  useEffect(() => FetchData(), []);
  return (
    <div>
      {state.loading ? "loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;
