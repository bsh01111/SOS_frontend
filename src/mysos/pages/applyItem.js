import profile from "../../public/image/profile.jpeg";
import { Button, TextField } from "@mui/material";

const ApplyItem = ({ id, nickname, url, status }) => {
  let statusCode = {
    WAIT: "수락",
    ACCEPT: "메시지",
    REFUSE: "거절",
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.profileDiv}>
          <img style={styles.profileImage} src={url || profile} />
          <TextField
            id="nickName"
            size="small"
            variant="standard"
            value={nickname || ""}
            style={styles.profileNickname}
          />
          <Button
            variant="contained"
            style={
              status === "ACCEPT" ? styles.messageButton : styles.acceptButton
            }
          >
            {status === "ACCEPT" ? statusCode[status] : statusCode["WAIT"]}
          </Button>
          <Button
            variant="contained"
            style={
              status === "REFUSE"
                ? styles.foucsRefuseButton
                : styles.refuseButton
            }
          >
            거절
          </Button>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: { border: "1px solid black" },
  profileDiv: { height: 40 },
  profileImage: { width: 30, height: 30, marginTop: 5 },
  profileNickname: { marginTop: 5, marginLeft: 20, width: 80 },
  messageButton: {
    width: 80,
    height: 30,
    marginLeft: 50,
    color: "white",
    background: "black",
    marginBottom: 20,
  },
  acceptButton: {
    width: 50,
    height: 30,
    marginLeft: 50,
    color: "black",
    background: "white",
    marginBottom: 20,
  },
  foucsRefuseButton: {
    width: 50,
    height: 30,
    marginLeft: 50,
    color: "white",
    background: "black",
    marginBottom: 20,
  },
  refuseButton: {
    width: 50,
    height: 30,
    marginLeft: 50,
    color: "black",
    background: "white",
    marginBottom: 20,
  },
};

export default ApplyItem;
