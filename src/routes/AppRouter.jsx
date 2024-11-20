/* 
    - Component with project paths, is applying within app.jsx
*/

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages and Components
import NotFound from '../pages/NotFound';

export const AppRouter = () => {

    return (

        <Router>
            <Routes>

                {/* Not Found Page */}
                <Route exact path="*" element={ <NotFound /> } />
            </Routes>
        </Router>

    )
}