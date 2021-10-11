import React from "react";
import { Link } from "react-router-dom"; //'react-router-dom'에서 제공하는 {Link}를 import
import logo from "../../public/image/logo.png";
class Login extends React.Component {
  render() {
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <div style={{ margin: 30 }}>
            <img src={logo} />
          </div>

          <div>
            <div>
              <input placeholder="이메일" style={styles.inputStyle}></input>
            </div>
            <div>
              <input
                placeholder="PASSWORD"
                type="password"
                style={styles.inputStyle}
              ></input>
            </div>
          </div>
          <div>
            <button style={styles.loginButton}>로그인</button>
          </div>

          <div style={{ marginTop: 30 }}>
            <Link to="/signup" style={styles.signupLink}>
              회원가입
            </Link>
            <Link to="/signup" style={styles.findEmailLink}>
              아이디/비밀번호 찾기
            </Link>
          </div>
        </div>
      </>
    );
  }
}

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
    textDecoration: "none",
  },
  findEmailLink: {
    textDecoration: "none",
  },
};

export default Login;
