import React, { useContext } from "react";
import { MyContext } from "../context/TableContext";
import TableThreeData from "./TableThreeData";

const TableThree = () => {
  const { users } = useContext(MyContext);
  return (
    <div>
      <h2 className="text-3xl text-center py-5">Part Three</h2>
      <div className="justify-center flex">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Email</th>

              <th>Joining Date</th>

              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((newUser) => (
              <TableThreeData newUser={newUser}></TableThreeData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
