import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../public/image/logo.png";
import LoginService from "../service";
import { Button } from "@mui/material";
import * as LocalStorage from "../../lib/localStorage";

const Login = () => {
  const pageHistory = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickLoginButton = async () => {
    const response = await LoginService.login({ email, password });

    const userInfo = response.data.userInfo;
    if (!userInfo) {
      alert("해당 유저는 존재하지 않습니다.");
      return;
    }
    saveUserInfo({
      userId: userInfo.userId,
      userEmail: userInfo.userEmail,
    });
    pageHistory.push("/helpList");
  };

  const saveUserInfo = ({ userId, userEmail }) => {
    LocalStorage.setItem("userId", userId);
    LocalStorage.setItem("userEmail", userEmail);
  };

  const emailOnChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const passwordOnChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

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
              value={password}
              onChange={passwordOnChange}
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
