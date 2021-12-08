import profile from "../../public/image/profile.jpeg";
import { Button, TextField } from "@mui/material";
import MySosService from "../service";

const ApplyItem = ({ sosId, userId, nickname, url, status }) => {
  let statusCode = {
    WAIT: "대기",
    ACCEPT: "수락",
    REFUSE: "거절",
  };

  const onClickAcceptButton = async () => {
    if (!checkStatus()) return;
    try {
      await MySosService.acceptHelp({ sosId, userId });
      alert("수락 완료!");
      window.location.replace("/myHelp");
    } catch (e) {
      alert("에러 발생! 수락을 실패하였습니다.");
    }
  };

  const onClickRefuseButton = async () => {
    if (!checkStatus()) return;
    try {
      await MySosService.refuseHelp({ sosId, userId });
      alert("거절 완료!");
      window.location.replace("/myHelp");
    } catch (e) {
      alert("에러 발생! 거절을 실패하였습니다.");
    }
  };

  const checkStatus = () => {
    if (status == "ACCEPT") {
      alert("이미 수락한 도움입니다.");
      return false;
    } else if (status == "REFUSE") {
      alert("이미 거절한 도움입니다.");
      return false;
    }
    return true;
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
              statusCode[status] == "수락"
                ? styles.foucsRefuseButton
                : styles.acceptButton
            }
            onClick={onClickAcceptButton}
          >
            수락
          </Button>
          <Button
            variant="contained"
            style={
              statusCode[status] == "거절"
                ? styles.foucsRefuseButton
                : styles.refuseButton
            }
            onClick={onClickRefuseButton}
          >
            거절
          </Button>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: { border: "1px solid black", marginTop: 5 },
  profileDiv: { height: 40 },
  profileImage: { width: 30, height: 30, marginTop: 5 },
  profileNickname: { marginTop: 5, marginLeft: 20, width: 80 },
  foucsAcceptButton: {
    width: 50,
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
