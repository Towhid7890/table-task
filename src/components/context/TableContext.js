import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const TableContext = ({ children }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const userInfo = { users };
  return <MyContext.Provider value={userInfo}>{children}</MyContext.Provider>;
};

export default TableContext;
