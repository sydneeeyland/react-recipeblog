import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home";
import Recipe from "./Pages/Recipe";
import SubmitRecipe from "./Pages/SubmitRecipe";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/recipe/:id" element={<Recipe />}></Route>
            <Route path="/recipe/create" element={<SubmitRecipe />}></Route>
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
