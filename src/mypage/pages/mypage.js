import profile from "../../public/image/profile.jpeg";
import editpost from "../../public/image/editpost.png";
import TopLogo from "../../common/component/TopLogo";
import Footer from "../../common/component/Footer";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField } from "@mui/material";
import MyPageService from "../service";
import * as LocalStorage from "../../lib/localStorage";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Mypage = () => {
  const [userProfile, setUserProfile] = useState({
    id: 0,
    userId: 0,
    userNickname: "",
    mainProfileUrl: "",
  });

  const pageHistory = useHistory();
  const onClickEditProfile = async () => {
    pageHistory.push("/editProfile");
  };

  const onClickEditPost = async () => {
    pageHistory.push("/editPost");
  };

  const getUserProfile = async () => {
    const id = LocalStorage.getItem("userId");
    const response = await MyPageService.findProfile({ id });
    const profileInfo = response.data.profile;

    if (profileInfo) {
      setUserProfile({
        id: profileInfo.id,
        userId: profileInfo.userId,
        userNickname: profileInfo.userNickname,
        mainProfileUrl: profileInfo.mainProfileUrl,
      });
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <>
      <TopLogo />
      <div style={{ textAlign: "center", marginTop: 100 }}>
        <div style={styles.profileDiv}>
          <img
            style={styles.profileImage}
            src={userProfile.mainProfileUrl || profile}
          />
          <div>
            <TextField
              id="nickName"
              size="medium"
              variant="standard"
              value={userProfile.userNickname || ""}
              textAlign="center"
            />
          </div>
        </div>
        <div style={styles.profileContainer}>
          <div style={styles.profileText}>
            프로필
            <KeyboardDoubleArrowRightIcon
              style={styles.editProfileIcon}
              onClick={onClickEditProfile}
            />
          </div>
        </div>
        <div style={styles.postContainer}>
          <img
            style={styles.editPostIcon}
            src={editpost}
            onClick={onClickEditPost}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

const styles = {
  profileImage: {
    width: 150,
    height: 150,
    marginTop: 5,
  },
  profileContainer: {
    border: "1px solid black",
    height: "50px",
    marginTop: 50,
  },
  profileText: {
    marginTop: 15,
  },
  editProfileIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    float: "right",
  },
  postContainer: {
    border: "1px solid black",
    height: "50px",
  },
  editPostIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    marginTop: 15,
    float: "right",
  },
};

export default Mypage;
