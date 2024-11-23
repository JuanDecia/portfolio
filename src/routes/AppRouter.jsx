/* 
    - Component with project paths, is applying within app.jsx
*/

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages and Components
import NotFound from '../pages/NotFound';
import Header from "../components/Header";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const AppRouter = () => {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />

                {/* Projects Section Page */}
                <Route path="/projects/:id" element={ <Projects /> } />
                {/* Not Found Page */}
                {/* <Route exact path="*" element={ <NotFound /> } /> */}
            </Routes>
        </Router>
    );
};

export default AppRouter;