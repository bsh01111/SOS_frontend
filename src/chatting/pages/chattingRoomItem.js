import profile from "../../public/image/profile.jpeg";
import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom";

const ChattingRoomItem = ({ id, userNickname, mainProfileUrl }) => {
  const pageHistory = useHistory();
  const onClickChattingButton = async () => {
    pageHistory.push(`/chatting/${id}`);
  };

  return (
    <>
      <div style={styles.container} onClick={onClickChattingButton}>
        <div style={styles.profileDiv}>
          <img style={styles.profileImage} src={mainProfileUrl || profile} />
          <TextField
            id="nickName"
            size="large"
            variant="standard"
            value={userNickname || ""}
            style={styles.profileNickname}
          />
        </div>
      </div>
    </>
  );
};

const styles = {
  container: { border: "1px solid black", margin: 3, height: 100 },
  profileDiv: { height: 40 },
  profileImage: { width: 100, height: 90, marginTop: 5 },
  profileNickname: { marginTop: 30, marginLeft: 20, width: 80 },
  chattingButton: {
    width: 20,
    height: 20,
    marginRight: 5,
    float: "right",
    marginTop: 10,
  },
};

export default ChattingRoomItem;
