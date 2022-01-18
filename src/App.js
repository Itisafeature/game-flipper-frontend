import React from "react";
import {Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<div>Hello World</div>}/>
                <Route path="home" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
