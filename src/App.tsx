import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/main/Main";
import ProjectsPage from "./pages/projects/Projects";

import "./App.css";
import "./animations.css";

const App = () => {
    return (
        <Routes>
            <Route path="/" Component={MainPage} />
            <Route path="/projects" Component={ProjectsPage} />
        </Routes>
    );
}

export default App;
