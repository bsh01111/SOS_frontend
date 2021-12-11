import TopLogo from "../../common/component/TopLogo";
import Footer from "../../common/component/Footer";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import MyPageService from "../service";
import * as LocalStorage from "../../lib/localStorage";
import { styled } from "@mui/material/styles";

const EditPost = () => {
  const [postInfo, setPostInfo] = useState({
    userId: LocalStorage.getItem("userId"),
    content: "",
    imageUrl: "",
  });

  const setValue = (key, value) => {
    postInfo[key] = value;
    setPostInfo(postInfo);
  };

  const pageHistory = useHistory();
  const onClickPostButton = async () => {
    if (!validPost()) return;
    const response = await MyPageService.enrollPost(postInfo);
    pageHistory.push("/myPage");
  };

  const validPost = () => {
    const { userId, content, imageUrl } = postInfo;

    if (!content) {
      alert("내용이 입력되지 않았습니다.");
      return false;
    }
    return true;
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <>
      <TopLogo />
      <div style={{ marginTop: 55, marginBottom: 70, marginLeft: 10 }}>
        마이페이지
        <Button
          variant="contained"
          onClick={onClickPostButton}
          style={styles.postButton}
        >
          Post
        </Button>
        <div>
          <textarea
            id="content"
            name="content"
            style={styles.inputContentStyle}
            onChange={(e) => setValue("content", e.target.value)}
          />
        </div>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button
            variant="contained"
            component="span"
            style={styles.uploadButton}
            onChange={(e) => setValue("imageUrl", e.target.value)}
          >
            사진 업로드
          </Button>
        </label>
      </div>
      <Footer sequence={2} />
    </>
  );
};

const styles = {
  container: {
    border: "1px solid while",
  },
  postButton: {
    marginTop: 5,
    marginLeft: 200,
    marginRight: 10,
    height: 30,
    width: 30,
    color: "white",
    background: "black",
  },
  inputContentStyle: {
    height: 350,
    width: 250,
  },
  uploadButton: {
    color: "white",
    background: "black",
  },
};

export default EditPost;
