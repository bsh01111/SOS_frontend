import profile from "../../public/image/profile.jpeg";
import { Button, TextField } from "@mui/material";
import MySosService from "../service";

const MyApplyItem = ({
  sosId,
  userId,
  nickname,
  mainProfileUrl,
  content,
  location,
  cost,
  status,
}) => {
  let statusCode = {
    WAIT: "대기중",
    ACCEPT: "승인",
    REFUSE: "죄송합니다",
    CANCEL: "취소됨",
  };

  const onClickCancelButton = async () => {
    try {
      await MySosService.cancelSosApply({ sosId, userId });
      alert("취소가 완료되었습니다.");
      window.location.replace("/myApply");
    } catch (e) {
      alert("error!");
    }
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
            value={nickname || ""}
            style={styles.profileNickname}
          />
        </div>
        <div style={styles.helpDiv}>
          <TextField
            id="helpContent"
            multiline
            rows={2}
            value={content || ""}
            style={styles.helpContent}
          />
          <div style={styles.helpInfoDiv}>
            <TextField
              id="location"
              size="small"
              value={location || ""}
            ></TextField>
            <TextField id="cost" size="small" value={cost || 0}></TextField>
          </div>
        </div>
        <div style={styles.statusDiv}>
          <Button
            id="status"
            variant="contained"
            style={
              statusCode[status] === "대기중"
                ? styles.waitButton
                : styles.statusButton
            }
          >
            {statusCode[status]}
          </Button>
          <Button
            id="CANCEL"
            variant="contained"
            onClick={onClickCancelButton}
            style={styles.cancelButton}
          >
            취소
          </Button>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: { border: "1px solid black", margin: 10 },
  profileDiv: { height: 40 },
  profileImage: { width: 30, height: 30, marginTop: 5 },
  profileNickname: { marginTop: 5, marginLeft: 20, width: 80 },
  profileIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    float: "right",
    marginTop: 10,
  },
  helpDiv: {
    border: "1px solid black",
    height: 80,
  },
  helpContent: {
    width: "61%",
  },
  helpInfoDiv: {
    width: "38%",
    float: "right",
  },
  statusDiv: { border: "1px solid black", height: 50 },
  waitButton: {
    height: 30,
    marginTop: 10,
    marginLeft: 80,
    color: "black",
    background: "white",
  },
  statusButton: {
    height: 30,
    marginTop: 10,
    marginLeft: 80,
    color: "white",
    background: "black",
  },
  cancelButton: {
    height: 30,
    marginTop: 10,
    marginLeft: 65,
    color: "black",
    background: "white",
  },
};

export default MyApplyItem;
