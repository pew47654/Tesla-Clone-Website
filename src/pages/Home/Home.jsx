import React from "react";
import Model_Y from "../../components/Model_Y/Model_Y";
import Model_3 from "../../components/Model_3/Model_3";
import Exp_tesla from "../../components/Exp_tesla/Exp_tesla";
import Power_tesla from "../../components/Power_tesla/Power_tesla";
import Access_tesla from "../../components/Access_tesla/Access_tesla";

function Home() {
  return (
    <>
      <Model_3 />
      <Model_Y />
      <Exp_tesla />
      <Power_tesla />
      <Access_tesla />
    </>
  );
}

export default Home;
