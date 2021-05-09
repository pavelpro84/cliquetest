import React from "react";
import "./TalentSignUp.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
function TalentSignUp() {
  return (
    <>
      <div className="container-t">
        <h1 style={{ color: "white" }}>Sign Up</h1>
        <form action="">
          <div className>
            <TextField
              className="input"
              variant="filled"
              label="Talent Name"
              type="text"
            />
            <TextField
              className="input"
              variant="filled"
              label="Website"
              type="text"
            />
            <TextField
              className="input"
              variant="filled"
              label="Contact"
              type="text"
            />
            <TextField
              className="input"
              variant="filled"
              label="Facebook"
              type="text"
            />
            <TextField
              className="input"
              variant="filled"
              label="Phone"
              type="text"
            />
            <TextField
              className="input"
              variant="filled"
              label="Instagram"
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
              label="Twitter"
              type="text"
            />
            <TextField
              className="input"
              variant="filled"
              label="Password"
              type="text"
            />
            <TextField
              className="input"
              variant="filled"
              label="Confirm Password"
              type="text"
            />
            <TextField
              style={{
                width: "100%",
                background: "white",
                margin: "7px",
                width: "685px",
                borderRadius: "5px",
              }}
              variant="filled"
              label="Description"
              type="text"
              multiline
              rows={4}
            />
          </div>
          <div>
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
                  width: "330px",
                  height: "48px",
                  margin: "7px",
                  border: "1px solid white",
                  marginRight: "18px",
                }}
                variant="contained"
                color="secondary"
              >
                Back
              </Button>
            </a>
            <Button
              style={{
                background: "rgb(47, 154, 76)",
                borderColor: "rgb(47, 154, 76)",
                color: "white",
                width: "330px",
                height: "48px",
                margin: "7px",
              }}
              variant="contained"
              color="secondary"
            >
              Sign Up
            </Button>
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

export default TalentSignUp;
