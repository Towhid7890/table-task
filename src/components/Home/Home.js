import React from "react";
import FourthTable from "../FourthTable/FourthTable";
import TableThree from "../TableThree/TableThree";

import Tableone from "./../Tableone/Tableone";
import TableTwo from "./../TableTwo/TableTwo";

const Home = () => {
  return (
    <div>
      <Tableone></Tableone>
      <TableTwo></TableTwo>
      <TableThree></TableThree>
      <FourthTable></FourthTable>
    </div>
  );
};

export default Home;
