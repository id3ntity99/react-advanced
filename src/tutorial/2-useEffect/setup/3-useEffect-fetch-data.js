import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch(url);
    const users = await res.json();
    // If use setUsers without dependency list, it will trigger infinite loop. (Remember that setState triggers rerender.)
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <React.Fragment>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default UseEffectFetchData;
