import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Mypage = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div>
          <Button
            component={Link}
            to={"/editprofile"}
            style={styles.editProfileButton}
          >
            프로필 편집
          </Button>
        </div>
        <div style={{ marginTop: 30 }}>
          <Button
            component={Link}
            to={"/editpost"}
            style={styles.editPostButton}
          >
            게시글 작성
          </Button>
        </div>
      </div>
    </>
  );
};

const styles = {
  editProfileButton: {
    marginTop: 20,
    color: "white",
    background: "black",
    width: 300,
  },
  editPostButton: {
    marginTop: 20,
    color: "white",
    background: "black",
    width: 300,
  },
};

export default Mypage;
