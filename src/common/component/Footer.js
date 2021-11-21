import { Button } from "@mui/material";

const Footer = () => {
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
          <Button variant="outlined" style={styles.focusButton}>
            SOS
            <br />
            목록
          </Button>
          <Button variant="outlined" style={styles.button}>
            마이
            <br />
            SOS
          </Button>
          <Button variant="outlined" style={styles.button}>
            마이
            <br />
            페이지
          </Button>
          <Button variant="outlined" style={styles.button}>
            메세지
          </Button>
        </div>
      </div>
    </>
  );
};

const styles = {
  focusButton: {
    height: "99%",
    width: "24%",
    margin: "0.5%",
  },
  button: {
    height: "99%",
    width: "24%",
    margin: "0.5%",
  },
};

export default Footer;
