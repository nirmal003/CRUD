import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPost from "./Components/AddPost";
import Crud from "./Crud";

function CrudHeader() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Crud />} />
        <Route path="/update" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default CrudHeader;
