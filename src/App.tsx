import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowList from "./components/show-list";
import ShowDetails from "./components/show-page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={ShowList!} />
        <Route path="/show/:id" Component={ShowDetails!} />
      </Routes>
    </Router>
  );
};

export default App;
