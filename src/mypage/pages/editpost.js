import TopLogo from "../../common/component/TopLogo";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import MypageService from "../service";
import * as LocalStorage from "../../lib/localStorage";

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

    console.log(document.getElementById("content").placeholder);

    const response = await MypageService.enrollPost(postInfo);
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

  return (
    <>
      <TopLogo />
      <div style={{ marginTop: 55, marginBottom: 70 }}>
        <div>
          마이페이지
          <Button
            variant="contained"
            onClick={onClickPostButton}
            style={styles.postButton}
          >
            Post
          </Button>
        </div>
        <div>
          <textarea
            id="content"
            name="content"
            placeholder="글 입력"
            style={styles.inputContentStyle}
            onChange={(e) => setValue("content", e.target.value)}
          />
        </div>
        <div>
          <input
            type="file"
            id="image"
            name="사진 업로드"
            accept="image/png, image/jpeg"
            style={styles.uploadImageStyle}
            onChange={(e) => setValue("imageUrl", e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

const styles = {
  postButton: {
    marginTop: 5,
    marginLeft: 200,
    marginRight: 10,
    height: 30,
    width: 30,
  },
  inputContentStyle: {
    height: 300,
    width: 200,
    marginLeft: 5,
    marginTop: 5,
  },
  uploadImageStyle: {
    height: 30,
    weight: 30,
    marginTop: 5,
    marginLeft: 5,
  },
};

export default EditPost;
