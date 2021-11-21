import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Select, MenuItem } from "@mui/material";

import * as LocalStorage from "../../lib/localStorage";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    rePassword: "",
    name: "",
    nickname: "",
    birthday: "",
    sex: 10,
    phoneNumber: "",
    certificationNumber: "",
  });

  const onSignUpButton = async () => {
    console.log(userInfo);
  };

  const loadUserInfo = () => {
    const userId = LocalStorage.getItem("userId");
    if (userId) {
      console.log("자동 로그인~");
    }
  };

  const setValue = (key, value) => {
    userInfo[key] = value;
    setUserInfo(userInfo);
  };

  useEffect(() => {
    loadUserInfo();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div>
          <TextField
            id="email"
            label="이메일"
            style={styles.topInput}
            variant="outlined"
            onChange={(e) => setValue("email", e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="password"
            type="password"
            label="비밀번호"
            style={styles.largeSizeInput}
            variant="outlined"
            onChange={(e) => setValue("password", e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="re-password"
            type="password"
            label="비밀번호 재확인"
            style={styles.largeSizeInput}
            variant="outlined"
            onChange={(e) => setValue("rePassword", e.target.value)}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <TextField
            id="name"
            label="이름"
            variant="outlined"
            style={styles.middleSizeInput}
            onChange={(e) => setValue("name", e.target.value)}
          />
          <TextField
            id="nickname"
            label="닉네임"
            variant="outlined"
            style={styles.middleSizeInput}
            onChange={(e) => setValue("nickname", e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="date"
            label="생년월일"
            type="date"
            style={styles.datePicker}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setValue("birthday", e.target.value)}
          />
        </div>
        <Select
          id="demo-simple-select"
          label="Age"
          defaultValue={10}
          style={{ width: 300, marginTop: 20 }}
          onChange={(e) => setValue("sex", e.target.value)}
        >
          <MenuItem value={10}>남자</MenuItem>
          <MenuItem value={20}>여자</MenuItem>
          <MenuItem value={30}>비공개</MenuItem>
        </Select>
        <div>
          <TextField
            id="re-password"
            label="전화번호 입력"
            variant="outlined"
            style={{ width: 190, marginTop: 20, marginRight: 20 }}
            onChange={(e) => setValue("phoneNumber", e.target.value)}
          />
          <Button variant="outlined" style={{ width: 90, marginTop: 20 }}>
            인증번호 받기
          </Button>
        </div>
        <div>
          <TextField
            id="re-password"
            label="인증번호 입력"
            variant="outlined"
            style={styles.largeSizeInput}
            onChange={(e) =>
              setValue("phoneNumber", e.target.certificationNumber)
            }
          />
        </div>
        <div>
          <Button
            variant="contained"
            style={styles.signUpButton}
            onClick={onSignUpButton}
            component={Link}
            to={"/helpList"}
          >
            가입하기
          </Button>
        </div>
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
  signUpButton: {
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
