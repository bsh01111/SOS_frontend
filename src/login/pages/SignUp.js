import React, { useEffect, useState } from "react";
import LoginService from "../service";
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
    sex: "MAN",
    phoneNumber: "",
  });

  const onSignUpButton = async () => {
    if (!validateSignUp()) return;
    try {
      console.log("!!!!!!!!");
      const response = await LoginService.signUp(userInfo);
      const user = response.data.userInfo;
      LocalStorage.setItem("userId", user.Id);
      LocalStorage.setItem("userEmail", user.Email);
    } catch (e) {
      alert("아이디가 이미 존재합니다.");
    }
  };

  const validateSignUp = () => {
    const { email, password, name, nickname, birthday, sex, phoneNumber } =
      userInfo;
    if (userInfo.password !== userInfo.rePassword) {
      alert("비밀번호와 재확인이 일치하지 않습니다!");
      return false;
    }
    if (
      !email ||
      !password ||
      !name ||
      !nickname ||
      !birthday ||
      !sex ||
      !phoneNumber
    ) {
      alert("필수값이 없습니다!");
      return false;
    }
    return true;
  };

  const setValue = (key, value) => {
    userInfo[key] = value;
    setUserInfo(userInfo);
  };

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
          defaultValue={"MAN"}
          style={{ width: 300, marginTop: 20 }}
          onChange={(e) => setValue("sex", e.target.value)}
        >
          <MenuItem value={"MAN"}>남자</MenuItem>
          <MenuItem value={"WOMAN"}>여자</MenuItem>
          <MenuItem value={"NONE"}>비공개</MenuItem>
        </Select>
        <div>
          <TextField
            id="re-password"
            label="전화번호 입력"
            variant="outlined"
            style={{ width: 300, marginTop: 20 }}
            onChange={(e) => setValue("phoneNumber", e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            style={styles.signUpButton}
            onClick={onSignUpButton}
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
