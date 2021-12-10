import TopLogo from "../../common/component/TopLogo";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import MyPageService from "../service";
import * as LocalStorage from "../../lib/localStorage";

const EditProfile = () => {
  const [profileInfo, setProfileInfo] = useState({
    userId: LocalStorage.getItem("userId"),
    career: "",
    elementrySchool: "",
    middleSchool: "",
    highSchool: "",
    university: "",
    originPlace: "",
    residence: "",
  });

  const setValue = (key, value) => {
    profileInfo[key] = value;
    setProfileInfo(profileInfo);
  };

  const pageHistory = useHistory();
  const onClickEditProfileButton = async () => {
    const response = await MyPageService.updateProfile(profileInfo);
    pageHistory.push("/myPage");
  };

  return (
    <>
      <TopLogo />
      <div style={{ textAlign: "center" }}>
        <div>
          <TextField
            id=""
            label="경력"
            style={styles.firstInputStyle}
            variant="standard"
            onChange={(e) => setValue("career", e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="elementrySchool"
            label="초등학교 ex) OO초등학교"
            style={styles.secondInputStyle}
            variant="standard"
            onChange={(e) => setValue("elementrySchool", e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="middleSchool"
            label="중학교 ex) OO중학교"
            style={styles.secondInputStyle}
            variant="standard"
            onChange={(e) => setValue("middleSchool", e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="highSchool"
            label="고등학교 ex) OO고등학교"
            style={styles.secondInputStyle}
            variant="standard"
            onChange={(e) => setValue("highSchool", e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="university"
            label="대학교 ex) OO대학교"
            style={styles.secondInputStyle}
            variant="standard"
            onChange={(e) => setValue("university", e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="originPlace"
            label="출신지 ex) OOOO도 OO시"
            style={styles.secondInputStyle}
            variant="standard"
            onChange={(e) => setValue("originPlace", e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="residence"
            label="거주지 ex) OOOO도 OO시"
            style={styles.secondInputStyle}
            variant="standard"
            onChange={(e) => setValue("residence", e.target.value)}
          />
        </div>
        <Button
          variant="contained"
          onClick={onClickEditProfileButton}
          style={styles.editProfileButton}
        >
          수정
        </Button>
      </div>
    </>
  );
};

const styles = {
  firstInputStyle: {
    marginTop: 55,
    width: 300,
  },
  secondInputStyle: {
    marginTop: 20,
    width: 300,
  },
  editProfileButton: {
    marginTop: 10,
    width: 30,
    height: 30,
    color: "white",
    background: "black",
  },
};

export default EditProfile;
