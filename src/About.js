import React from "react";
import { useSearchParams } from "react-router-dom";
import "./About.css";

function About() {
    const [searchParams, setSeratchParams] = useSearchParams();
    const detail = searchParams.get("detail");
    const mode = searchParams.get("mode");

    function onToggleDetail() {
        setSeratchParams({ detail: detail === "true" ? false : true, mode });
    }

    function onIncreaseMode() {
        const nextMode = mode === null || isNaN(mode) ? 1 : parseInt(mode) + 1;
        setSeratchParams({ detail, mode: nextMode });
    }

    return (
        <div>
            <h1>About</h1>
            <p>React Router query string Test</p>
            <div className="about-container">
                <div className="about-body">
                    <button onClick={onToggleDetail}>Toggle detail</button>
                    <button
                        onClick={onIncreaseMode}
                        style={{ marginLeft: "10px" }}
                    >
                        mode + 1{" "}
                    </button>
                    <p>detail : {detail}</p>
                    <p>mode : {mode}</p>
                </div>
            </div>
        </div>
    );
}

export default About;
