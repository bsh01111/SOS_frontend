import { TextField } from "@mui/material";
import noImage from "../../public/image/no-image.png";

const PostItem = ({ id, userId, content, imageUrl }) => {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.postImage}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={imageUrl || noImage}
          />
        </div>
        <div style={styles.postDiv}>
          <TextField
            id="content"
            size="medium"
            variant="outlined"
            value={content || ""}
            style={styles.postContent}
          />
        </div>
      </div>
    </>
  );
};

const styles = {
  container: { border: "1px solid black", marginTop: 10 },
  postDiv: { height: 350 },
  postImage: {
    height: 250,
    marginTop: 5,
  },
  postDiv: {
    border: "1px solid black",
    height: 80,
  },
  postContent: {
    marginTop: 10,
    width: "60%",
  },
};

export default PostItem;
