import React, { useState } from "react";
import { TextField } from "@mui/material";

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
      <div style={{ textAlign: "center" }}>
        <div>
          <TextField
            id=""
            label="경력"
            style={styles.inputStyle}
            variant="standard"
            onChange={(e) => setValue("career", e.target.value)}
          ></TextField>
        </div>
        <div>
          <TextField
            id="elementrySchool"
            label="초등학교"
            style={styles.inputStyle}
            variant="standard"
            onChange={(e) => setValue("elementrySchool", e.target.value)}
          ></TextField>
          <TextField
            id="middleSchool"
            label="중학교"
            style={styles.inputStyle}
            variant="standard"
            onChange={(e) => setValue("middleSchool", e.target.value)}
          ></TextField>
          <TextField
            id="highSchool"
            label="고등학교"
            style={styles.inputStyle}
            variant="standard"
            onChange={(e) => setValue("highSchool", e.target.value)}
          ></TextField>
          <TextField
            id="university"
            label="대학교"
            style={styles.inputStyle}
            variant="standard"
            onChange={(e) => setValue("university", e.target.value)}
          ></TextField>
        </div>
        <div>
          <TextField
            id="originPlace"
            label="출신지"
            style={styles.inputStyle}
            variant="standard"
            onChange={(e) => setValue("originPlace", e.target.value)}
          ></TextField>
          <TextField
            id="residence"
            label="거주지"
            style={styles.inputStyle}
            variant="standard"
            onChange={(e) => setValue("residence", e.target.value)}
          ></TextField>
        </div>
      </div>
    </>
  );
};

const styles = {
  inputStyle: {
    marginTop: 20,
    width: 300,
  },
};

export default EditProfile;
