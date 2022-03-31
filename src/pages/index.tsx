import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./Expenses";

import NavBar from "../components/Navbar/NavbarComp"
import Home from "./Home";
import Login from "./Login";

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/expenses" element={<Expenses />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRouter;