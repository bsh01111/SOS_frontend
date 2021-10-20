import React, { useEffect, useState } from "react";
import LoginService from "../service";
import { Button, TextField, Select, MenuItem } from "@mui/material";

import * as LocalStorage from "../../lib/localStorage";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passward, setPassward] = useState("");

  const onClickLoginButton = async () => {
    const response = await LoginService.login({ email, passward });
    const userInfo = response.data.userInfo;
    if (!userInfo) {
      alert("해당 유저는 존재하지 않습니다.");
      return;
    }
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
        <TextField
          id="email"
          label="이메일"
          style={styles.topInput}
          variant="outlined"
        />

        <TextField
          id="password"
          label="비밀번호"
          style={styles.largeSizeInput}
          variant="outlined"
        />

        <TextField
          id="re-password"
          label="비밀번호 재확인"
          style={styles.largeSizeInput}
          variant="outlined"
        />

        <div>
          <TextField
            id="name"
            label="이름"
            variant="outlined"
            style={styles.middleSizeInput}
          />
          <TextField
            id="nickname"
            label="닉네임"
            variant="outlined"
            style={styles.middleSizeInput}
          />
        </div>
        <TextField
          id="date"
          label="생년월일"
          type="date"
          style={styles.datePicker}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Select
          id="demo-simple-select"
          label="Age"
          defaultValue={1}
          style={{ width: 300, marginTop: 20 }}
        >
          <MenuItem value={1}>남자</MenuItem>
          <MenuItem value={2}>여자</MenuItem>
          <MenuItem value={3}>비공개</MenuItem>
        </Select>
        <div>
          <TextField
            id="re-password"
            label="전화번호 입력"
            variant="outlined"
            style={{ width: 190, marginTop: 20, marginRight: 20 }}
          />
          <Button variant="outlined" style={{ width: 90, marginTop: 20 }}>
            인증번호 받기
          </Button>
        </div>
        <TextField
          id="re-password"
          label="인증번호 입력"
          variant="outlined"
          style={styles.largeSizeInput}
        />
        <TextField
          id="re-password"
          label="닉네임"
          variant="outlined"
          style={styles.largeSizeInput}
        />
        <Button
          variant="contained"
          style={styles.SignUpButton}
          onClick={onClickLoginButton}
        >
          로그인
        </Button>
      </div>
    </>
  );
};

const styles = {
  topInput: {
    marginTop: 40,
    width: 300,
  },
  largeSizeInput: {
    marginTop: 20,
    width: 300,
  },
  middleSizeInput: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    width: 140,
  },
  smallSizeInput: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    width: 85,
  },
  SignUpButton: {
    marginTop: 20,
    color: "white",
    background: "black",
    width: 300,
  },
  datePicker: {
    width: 300,
    marginTop: 20,
  },
};

export default SignUp;
