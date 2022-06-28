import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./Layout/Main";
import Home from "./Pages/Home";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='/' element={<Home />}></Route>
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
