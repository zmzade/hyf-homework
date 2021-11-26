import React, { useContext } from "react";
import { searchContext } from "./searchContext";
const RenderUsers = () => {
  const value = useContext(searchContext);
  const users = value.githubUsers;

  return (
    <div>
      {value.loading && <h3>loading ..</h3>}
      {!users && <p> problem with github API rate</p>}
      {users && users.length === 0 ? (
        <p>No results</p>
      ) : (
        <ul>
          {users &&
            users.map((aUser) => {
              return <li key={aUser.id}>{aUser.login}</li>;
            })}
          {value.isError && <h3>please relaod the page</h3>}
        </ul>
      )}
    </div>
  );
};

export { RenderUsers };
