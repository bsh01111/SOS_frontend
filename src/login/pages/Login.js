import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; //'react-router-dom'에서 제공하는 {Link}를 import
import logo from "../../public/image/logo.png";
import LoginService from "../service";
import { Button } from "@mui/material";

import * as LocalStorage from "../../lib/localStorage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passward, setPassward] = useState("");

  const onClickLoginButton = async () => {
    const response2 = await LoginService.test({ email, passward });
    console.log(response2);
    const response = await LoginService.login({ email, passward });

    const userInfo = response.data.userInfo;
    if (!userInfo) {
      alert("해당 유저는 존재하지 않습니다.");
      return;
    }
    console.log("성공!");
    saveUserInfo({
      userId: userInfo.userId,
      userEmail: userInfo.userEmail,
    });
  };

  const saveUserInfo = ({ userId, userEmail }) => {
    LocalStorage.setItem("userId", userId);
    LocalStorage.setItem("userEmail", userEmail);
  };

  const loadUserInfo = () => {
    const userId = LocalStorage.getItem("userId");
    if (userId) {
      console.log("자동 로그인~");
    }
  };

  const emailOnChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const passwardOnChange = (e) => {
    const passward = e.target.value;
    setPassward(passward);
  };

  useEffect(() => {
    loadUserInfo();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div style={{ margin: 30 }}>
          <img src={logo} />
        </div>

        <div>
          <div>
            <input
              name="email"
              placeholder="이메일"
              style={styles.inputStyle}
              value={email}
              onChange={emailOnChange}
            ></input>
          </div>
          <div>
            <input
              placeholder="PASSWORD"
              type="password"
              style={styles.inputStyle}
              value={passward}
              onChange={passwardOnChange}
            ></input>
          </div>
        </div>
        <div>
          <button onClick={onClickLoginButton} style={styles.loginButton}>
            로그인
          </button>
        </div>

        <div style={{ marginTop: 30 }}>
          <Button component={Link} to={"/signup"} style={styles.signupLink}>
            회원가입
          </Button>
          <Button component={Link} to={"/signup"} style={styles.findEmailLink}>
            아이디/비밀번호 찾기
          </Button>
        </div>
      </div>
    </>
  );
};

const styles = {
  inputStyle: {
    textAlign: "center",
    marginTop: 20,
    height: 30,
    width: 200,
  },
  loginButton: {
    marginTop: 20,
    height: 30,
    width: 200,
  },
  signupLink: {
    marginRight: 20,
    color: "blue",
    textDecoration: "none",
  },
  findEmailLink: {
    color: "blue",
    textDecoration: "none",
  },
};

export default Login;
