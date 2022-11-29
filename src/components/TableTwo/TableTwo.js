import React, { useContext } from "react";
import { MyContext } from "../context/TableContext";
import TableTwoData from "./TableTwoData";

const TableTwo = () => {
  const { users } = useContext(MyContext);
  return (
    <div>
      <h2 className="text-3xl text-center py-5">Part Two</h2>
      <div className="justify-center flex">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Name</th>

              <th>Email Address</th>

              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((newUser) => (
              <TableTwoData newUser={newUser}></TableTwoData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTwo;
