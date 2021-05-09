import React, { useState, useContext } from "react";
import fan from "./fan-image.png";
import talent from "./talent-image.png";
import { UserContext } from "../contexts/UserContext";
import "./SignUp.css";

function SignUp() {
    const { userinfo } = useContext(UserContext);
    console.log(userinfo);

    return (
        <>
            <div className="content">
                <h1 style={{ color: "white", textAlign: "center" }}>Who Are You ? </h1>
                <div className="group-btn">
                    <div className="fan-btn">
                        <a href="/fan">
                            <img src={fan} alt="" />
                        </a>
                        <h3 style={{ color: "white", textAlign: "center" }}>Fan</h3>
                    </div>
                    <div className="talent-btn">
                        <a href="/talent">
                            <img src={talent} alt="" />
                        </a>
                        <h3 style={{ color: "white", textAlign: "center" }}>Talent</h3>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SignUp;
