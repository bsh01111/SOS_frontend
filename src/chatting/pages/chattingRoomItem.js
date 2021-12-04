import profile from "../../public/image/profile.jpeg";
import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom";

const ChattingRoomItem = ({ id, nickname, mainProfileUrl }) => {
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
            size="small"
            variant="standard"
            value={nickname || ""}
            style={styles.profileNickname}
          />
        </div>
      </div>
    </>
  );
};

const styles = {
  container: { border: "1px solid black", margin: 3 },
  profileDiv: { height: 40 },
  profileImage: { width: 30, height: 30, marginTop: 5 },
  profileNickname: { marginTop: 5, marginLeft: 20, width: 60 },
  chattingButton: {
    width: 20,
    height: 20,
    marginRight: 5,
    float: "right",
    marginTop: 10,
  },
};

export default ChattingRoomItem;
