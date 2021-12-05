import TopLogo from "../../common/component/TopLogo";
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const EditProfile = () => {
  const [profileInfo, setProfileInfo] = useState({
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

  return (
    <>
      <TopLogo />
      <div style={{ textAlign: "center" }}>
        <div>
          <TextField
            id=""
            label="경력"
            style={styles.inputStyle}
            variant="standard"
            onChange={(e) => setValue("career", e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="elementrySchool"
            label="초등학교"
            style={styles.inputStyle}
            variant="standard"
            onChange={(e) => setValue("elementrySchool", e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="middleSchool"
            label="중학교"
            style={styles.inputStyle}
            variant="standard"
            onChange={(e) => setValue("middleSchool", e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="highSchool"
            label="고등학교"
            style={styles.inputStyle}
            variant="standard"
            onChange={(e) => setValue("highSchool", e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="university"
            label="대학교"
            style={styles.inputStyle}
            variant="standard"
            onChange={(e) => setValue("university", e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="originPlace"
            label="출신지"
            style={styles.inputStyle}
            variant="standard"
            onChange={(e) => setValue("originPlace", e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="residence"
            label="거주지"
            style={styles.inputStyle}
            variant="standard"
            onChange={(e) => setValue("residence", e.target.value)}
          />
        </div>
        <Button>수정</Button>
      </div>
    </>
  );
};

const styles = {
  inputStyle: {
    marginTop: 55,
    width: 300,
  },
};

export default EditProfile;
