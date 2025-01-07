import React, { useState, useEffect } from "react";

export const GitHubUserSearch = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  const handleData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`
      );
      const data = await response.json();
      setUsers(data.items || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>GitHub User Search</div>
      <input
        type="text"
        placeholder="Enter username"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleData}>Search</button>
      <ul>
        {users.map((user) => (
          <li key={user.login}>
            <img src={user.avatar_url} alt={user.login} width="50" />
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
