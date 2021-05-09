import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./FanSignUp.css";

function FanSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="fan-form">
        <form action="">
          <h1>Sign Up</h1>
          <TextField
            className="input"
            variant="filled"
            label="Name"
            type="text"
          />
          <TextField
            className="input"
            variant="filled"
            label="Email"
            type="text"
          />
          <TextField
            className="input"
            variant="filled"
            label="Password"
            type="password"
          />
          <TextField
            className="input"
            variant="filled"
            label="Confirm Password"
            type="password"
          />
          <div>
            <Button
              style={{
                background: "rgb(47, 154, 76)",
                borderColor: "rgb(47, 154, 76)",
                color: "white",
                width: "342px",
                height: "48px",
                marginTop: "10px",
              }}
              variant="contained"
              color="secondary"
            >
              Sign Up
            </Button>
            <a
              style={{
                textDecoration: "none",
              }}
              href="/signup"
            >
              <Button
                style={{
                  background: "transparent",
                  color: "white",
                  width: "342px",
                  height: "48px",
                  marginTop: "10px",
                  border: "1px solid white",
                }}
                variant="contained"
                color="secondary"
              >
                Back
              </Button>
            </a>
          </div>
          <div className="txt-center">
            <span>Already have a Clique account? </span>
            <a href="/login">Sign In</a>
          </div>
        </form>
      </div>
    </>
  );
}

export default FanSignUp;
