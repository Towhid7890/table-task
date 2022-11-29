import React, { useContext } from "react";
import { MyContext } from "../context/TableContext";
import FourthTableData from "./FourthTableData";

const FourthTable = () => {
  const { users } = useContext(MyContext);
  return (
    <div>
      <h2 className="text-3xl text-center py-5">Part Four</h2>
      <div className="justify-center flex">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Name</th>

              <th>City</th>
              <th>Joining Date</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((newUser) => (
              <FourthTableData newUser={newUser}></FourthTableData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FourthTable;
