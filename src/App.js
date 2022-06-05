
import * as React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import NoPage from "./components/NoPage";
import Register from "./components/Register";
import Summary from "./components/Summary";
/**
 * This is the main app of this website. It contains all the other components
 * @returns {JSX.Element}
 * @constructor
 */
export default function App() {

    return (
        <div>
            <BrowserRouter>
                <Menu/>
                <hr/>
                <Routes>
                    <Route exact path="/" element={<Register/>}/>
                    <Route path="/summary" element={<Summary/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}