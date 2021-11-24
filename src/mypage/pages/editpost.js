import React, { useEffect } from "react";
import { Link } from "react-router-dom"; //'react-router-dom'에서 제공하는 {Link}를 import
import { Button } from "@mui/material";

const EditPost = () => {
  const contentOnChange = (e) => {
    const content = e.target.value;
    setContent(content);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div>
          마이페이지
          <Button onClick={onclickPostButton} style={styles.postButton}>
            Post
          </Button>
        </div>
        <div>
          <input
            name="content"
            placeholder="글 입력"
            style={styles.inputStyle}
            value={content}
            onChange={contentOnChange}
          ></input>
        </div>
      </div>
    </>
  );
};

const styles = {
  inputStyle: {
    marginLeft: 10,
    height: 30,
    weight: 200,
  },
};

export default EditPost;
