import React, { useContext } from "react";
import { MyContext } from "../context/TableContext";
import TableData from "./TableData";
import "./tableone.css";
const Tableone = () => {
  const { users } = useContext(MyContext);

  return (
    <div>
      <h2 className="text-3xl text-center py-5">Part one</h2>
      <div className="justify-center flex">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Email Address</th>
              <th>Joining Date</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <TableData user={user} key={user._id}></TableData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tableone;
