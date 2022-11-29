import React from "react";

const TableThreeData = ({ newUser }) => {
  console.log(newUser);
  const { email, joiningDate, role } = newUser;
  return (
    <tr>
      <td className="border">{email}</td>
      <td className="border">{email}</td>
      <td className="border">{role}</td>
    </tr>
  );
};

export default TableThreeData;
