import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TopLogo from "../../common/component/TopLogo";
import Footer from "../../common/component/Footer";

const Mypage = () => {
  return (
    <>
      <div style={{ marginTop: 55, marginBottom: 70 }}>
        <TopLogo />
        <div>
          <Button
            component={Link}
            to={"/editprofile"}
            style={styles.editProfileButton}
            // onClick={onEditProfileButton}
          >
            프로필 편집
          </Button>
        </div>
        <div style={{ marginTop: 30 }}>
          <Button
            component={Link}
            to={"/editpost"}
            style={styles.editPostButton}
            // onClick={onEditPostButton}
          >
            게시글 작성
          </Button>
        </div>
        <Footer />
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
