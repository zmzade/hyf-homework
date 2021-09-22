import React from "react";
const Fetching = () => {
  return fetch(
    "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
  ).then((response) => response.json());
};
export default Fetching;
