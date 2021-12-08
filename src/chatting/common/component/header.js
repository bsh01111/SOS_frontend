import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const Header = ({ sequence }) => {
  const pageHistory = useHistory();

  return (
    <>
      <div style={{ marginTop: 55, textAlign: "center", width: "100%" }}>
        <Button
          variant="outlined"
          style={sequence === 0 ? styles.focusButton : styles.button}
          onClick={() => {
            pageHistory.push("/chattingRoomList");
          }}
        >
          채팅
        </Button>
        <Button
          variant="outlined"
          style={sequence === 1 ? styles.focusButton : styles.button}
          onClick={() => {
            pageHistory.push("/userList");
          }}
        >
          사람들
        </Button>
      </div>
      ;
    </>
  );
};

const styles = {
  focusButton: {
    border: "1px solid white",
    height: "95%",
    width: "49%",
    margin: "0.5%",
    color: "white",
    background: "black",
  },
  button: {
    border: "1px solid black",
    height: "95%",
    width: "49%",
    margin: "0.5%",
    color: "black",
  },
};

export default Header;
