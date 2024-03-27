//Fetching data with useReducer part1
import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    const info = axios.get("https://jsonplaceholder.typicode.com/posts/1");
    info.then((response) => {
      setLoading(false);
      setPost(response.data);
      setError("");
    });
    info.catch((error) => {
      setLoading(false);
      setPost({});
      setError("Something went wrong!");
    });
  }, []);
  return (
    <div>
      {loading ? "loading" : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
