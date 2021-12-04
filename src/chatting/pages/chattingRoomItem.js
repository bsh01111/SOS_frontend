import profile from "../../public/image/profile.jpeg";
import { Button, TextField } from "@mui/material";
import { useHistory } from "react-router-dom";

const ChattingRoomItem = ({ id, mainProfileUrl, userNickname }) => {
  const pageHistory = useHistory();
  const onClickChattingButton = async () => {
    pageHistory.push(`/chatting/${id}`);
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.profileDiv}>
          <img style={styles.profileImage} src={mainProfileUrl || profile} />
          <TextField
            id="nickName"
            size="small"
            variant="standard"
            value={userNickname || ""}
            style={styles.prifileNickname}
          />
          <Button
            size="small"
            variant="standard"
            value="메시지"
            style={styles.chattingIcon}
            onClick={onClickChattingButton}
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
  prifileNickname: { marginTop: 5, marginLeft: 20, width: 60 },
  chattingIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    float: "right",
    marginTop: 10,
  },
};

export default ChattingRoomItem;
