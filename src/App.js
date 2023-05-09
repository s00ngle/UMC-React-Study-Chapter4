import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import SubPage from "./SubPage";
import Profile from "./Profile";
import Nav from "./Nav";
import About from "./About";

function App() {
    return (
        <div className="App">
            <div className="App-container">
                <Router>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/sub" element={<SubPage />} />
                        <Route
                            path="/profile/:userId/*"
                            element={<Profile />}
                        />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
