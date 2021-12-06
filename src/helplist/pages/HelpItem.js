import profile from "../../public/image/profile.jpeg";
import help from "../../public/image/help.png";
import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const HelpItem = ({
  id,
  mainProfileUrl,
  nickname,
  content,
  location,
  cost,
  mediaUrl,
}) => {
  const pageHistory = useHistory();
  const onClickDetailButton = async () => {
    pageHistory.push(`/helpDetail/${id}`);
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
            style={styles.prifileNickname}
          />
          <KeyboardDoubleArrowRightIcon
            style={styles.profileIcon}
            onClick={onClickDetailButton}
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
        <div style={styles.helpImageDiv}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={mediaUrl || help}
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
    width: "65%",
  },
  helpInfoDiv: {
    width: "34%",
    float: "right",
  },
  helpImageDiv: {
    border: "1px solid black",
    height: 240,
    marginTop: 5,
  },
};

export default HelpItem;
