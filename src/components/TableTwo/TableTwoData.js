import React from "react";

const TableTwoData = ({ newUser }) => {
  const { person, email, role } = newUser;

  return (
    <tr>
      <td className="border">
        <div className="avatar placeholder mr-3">
          <div className="bg-neutral-focus  rounded-full ">
            <span>
              <img className="h-6 w-6" src={person.avatar} alt="" />
            </span>
          </div>
        </div>
        {person.name}
      </td>
      <td className="border">{email}</td>
      <td className="border">{role}</td>
    </tr>
  );
};

export default TableTwoData;
