/* 
    - Component with project paths, is applying within app.jsx
*/

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages and Components
import NotFound from '../pages/NotFound';
import Header from "../components/Header";
import Home from "../pages/Home";

const AppRouter = () => {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                {/* Not Found Page */}
                {/* <Route exact path="*" element={ <NotFound /> } /> */}
            </Routes>
        </Router>
    );
};

export default AppRouter;