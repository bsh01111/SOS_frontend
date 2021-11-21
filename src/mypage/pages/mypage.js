import React, { useEffect } from "react";
import { Link } from "react-router-dom"; //'react-router-dom'에서 제공하는 {Link}를 import
import MypageService from "../service";
import { Button } from "@mui/material";

const Mypage = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div>
          <Button
            variant="contained"
            style={styles.editProfileButton}
            onClick={onEditProfileButton}
          >
            프로필 편집
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            style={styles.editPostButton}
            onClick={onEditPostButton}
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
