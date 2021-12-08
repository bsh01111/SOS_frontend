import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const Footer = ({ sequence }) => {
  const pageHistory = useHistory();
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          height: 70,
          background: "white",
          zIndex: 1,
        }}
      >
        <div style={{ height: "100%" }}>
          <Button
            variant="outlined"
            style={sequence === 0 ? styles.focusButton : styles.button}
            onClick={() => {
              pageHistory.push(`/helpList`);
            }}
          >
            SOS
            <br />
            목록
          </Button>
          <Button
            variant="outlined"
            style={sequence === 1 ? styles.focusButton : styles.button}
            onClick={() => {
              pageHistory.push(`/myHelp`);
            }}
          >
            마이
            <br />
            SOS
          </Button>
          <Button
            variant="outlined"
            style={sequence === 2 ? styles.focusButton : styles.button}
            onClick={() => {
              pageHistory.push(`/myPage`);
            }}
          >
            마이
            <br />
            페이지
          </Button>
          <Button
            variant="outlined"
            style={sequence === 3 ? styles.focusButton : styles.button}
            onClick={() => {
              pageHistory.push(`/chattingRoomList`);
            }}
          >
            메세지
          </Button>
        </div>
      </div>
    </>
  );
};

const styles = {
  focusButton: {
    border: "1px solid white",
    height: "95%",
    width: "24%",
    margin: "0.5%",
    color: "white",
    background: "black",
  },
  button: {
    border: "1px solid black",
    height: "95%",
    width: "24%",
    margin: "0.5%",
    color: "black",
  },
};

export default Footer;
