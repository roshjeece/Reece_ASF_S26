import React from 'react';
import NavBar from "./components/NavBar.jsx";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router";
import AppRoutes from "./components/AppRoutes.jsx";

const App = () => {
    return (
        <>
          <Router>
              <NavBar/>
              <AppRoutes/>
          </Router>
        </>
    );
};

export default App;