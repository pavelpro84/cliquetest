import React, { useState, useEffect, useContext } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { UserContext } from "../contexts/UserContext";
import { login } from "../network/index";
import TextField from "@material-ui/core/TextField";

const responseFacebook = (response) => {
  console.log(response);
};

function Login() {
  let history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [userInfo, updateUserInfo] = useContext(UserContext);
  const [disableBtn, setDisableBtn] = useState(false);

  // function tesstaxiospost() {

  //     //js-cookie
  //     const token = Cookie.get('token');
  //     const url = `${api_url}/portal/app/login`;
  //     axios.post(url,
  //         { username: user.username, password: user.password },
  //         {
  //             headers: {
  //                 'Authorization': token
  //             }
  //         })
  //
  // }

  function handleSubmit(event) {
    setDisableBtn(true);
    login(user.username, user.password)
      .then((resp) => {
        console.log(resp);
        if (resp.error) {
          alert("Login fail");
          setDisableBtn(false);
          return;
        }
        updateUserInfo(resp.responseData);
        alert("Login success");
        history.push("/LoginSuccess");
        console.log(resp.data);
      })
      .catch((error) => {
        alert("Login fail");
      });
    setDisableBtn(false);
    event.preventDefault();
  }

  return (
    <div>
      <form style={{ paddingTop: "50px" }} onSubmit={handleSubmit}>
        <div className="container">
          <h1
            style={{
              textAlign: "left",
              paddingLeft: "57px",
            }}
            className="whiteText "
          >
            Sign In
          </h1>
          <TextField
            className="input"
            variant="filled"
            label="Email"
            type="text"
            onChange={(event) =>
              setUser({
                ...user,
                username: event.target.value,
              })
            }
          />
          <TextField
            className="input"
            color="primary"
            variant="filled"
            label="Password"
            type="password"
            onChange={(event) =>
              setUser({
                ...user,
                password: event.target.value,
              })
            }
          />
          <p className="toright whiteText">
            <a href>Forgot Password ?</a>
          </p>
          <button
            className="bt1 center whiteText"
            disabled={disableBtn}
            type="submit"
          >
            {disableBtn ? "Loading..." : "Login"}
          </button>
          <p className="txt-center whiteText">Or Login With</p>
          <FacebookLogin
            appId="788651002082043"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
            render={(renderProps) => (
              <button className="btnFb" onClick={renderProps.onClick}>
                <svg
                  id="facebook_2_"
                  data-name="facebook (2)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                >
                  <g id="Group_3" data-name="Group 3">
                    <path
                      id="Path_2"
                      data-name="Path 2"
                      d="M18.375,0H2.625A2.628,2.628,0,0,0,0,2.625v15.75A2.628,2.628,0,0,0,2.625,21H10.5V13.781H7.875V10.5H10.5V7.875a3.937,3.937,0,0,1,3.938-3.937h2.625V7.219H15.75c-.724,0-1.312-.068-1.312.656V10.5h3.281l-1.312,3.281H14.438V21h3.937A2.628,2.628,0,0,0,21,18.375V2.625A2.628,2.628,0,0,0,18.375,0Z"
                      fill="#fff"
                    />
                  </g>
                </svg>
                Facebook Login
              </button>
            )}
          />
          <div>
            <span style={{ color: "white" }}>New to clique? </span>
            <a style={{ textDecoration: "none", color: "red" }} href="/signup">
              Sign Up
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
