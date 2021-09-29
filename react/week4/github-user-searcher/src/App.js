import "./App.css";
import React, { useEffect, useState } from "react";
import { fetching } from "./fetching";
import SearchBox from "./SearchBox";
import { SearchProvider } from "./searchContext";
import Header from "./Header";

function App() {
  const [githubUsers, setGithubUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [textValue, changeTextValue] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!textValue) {
      return;
    }
    setLoading(true);
    fetching(textValue)
      .then((data) => {
        setGithubUsers(data.items);
        setLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setLoading(false);
      });
  }, [textValue]);
  const contextValues = {
    githubUsers,
    isError,
    textValue,

    changeTextValue,
    loading,
  };
  return (
    <div className="App">
      <SearchProvider value={contextValues}>
        <Header />

        <SearchBox />
      </SearchProvider>
    </div>
  );
}

export default App;
