import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTER_INFOS } from "./constants/constants";

const CustomRouter: React.FC = () => {
  return (
    <Routes>
      {/* {ROUTER_INFOS.map((info, index) => (
        <Route key={index} path={info.path} element={info.element} />
      ))} */}
    </Routes>
  );
};

export default CustomRouter;
