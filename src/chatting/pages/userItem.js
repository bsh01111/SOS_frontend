import profile from "../../public/image/profile.jpeg";
import { Button, TextField } from "@mui/material";
import { useHistory } from "react-router-dom";

const UserItem = ({ id, nickname, mainProfileUrl }) => {
  const pageHistory = useHistory();
  const onClickChattingButton = async () => {
    pageHistory.push(`/chattingRoom/${id}`);
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.UserDiv}>
          <img style={styles.profileImage} src={mainProfileUrl || profile} />
          <TextField
            id="nickname"
            variant="standard"
            size="small"
            value={nickname || ""}
            style={styles.profileNickname}
          />
          <Button
            variant="contained"
            size="small"
            style={styles.chattingButton}
            onClick={onClickChattingButton}
          >
            메시지
          </Button>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: { border: "1px solid black", margin: 3, height: 100 },
  UserDiv: { height: 40 },
  profileImage: { width: 100, height: 90, marginTop: 5 },
  profileNickname: { marginTop: 30, marginLeft: 20, width: 80 },
  chattingButton: {
    width: 20,
    height: 30,
    marginRight: 80,
    float: "right",
    marginTop: 30,
  },
};

export default UserItem;
