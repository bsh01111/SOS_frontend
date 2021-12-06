import { TextField } from "@mui/material";
import noImage from "../../public/image/no-image.png";

const PostItem = ({ id, userId, content, imageUrl }) => {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.postDiv}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={imageUrl || noImage}
          />
          <TextField
            id="content"
            size="medium"
            variant="standard"
            value={content || ""}
            style={styles.postContent}
          />
        </div>
      </div>
    </>
  );
};

const styles = {
  container: { border: "1px solid black", marginTop: 10, height: 150 },
  postDiv: { height: 500 },
  postImage: {
    height: 400,
    marginTop: 5,
  },
  postDiv: {
    border: "1px solid black",
    height: 100,
  },
  postContent: {
    width: "60%",
  },
};

export default PostItem;
