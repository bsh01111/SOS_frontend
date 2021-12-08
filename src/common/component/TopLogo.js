import { Divider } from "@mui/material";
import logo from "../../public/image/logo.jpg";

const TopLogo = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          height: 50,
          background: "white",
          zIndex: 2,
        }}
      >
        <img style={{ width: 70, height: 50 }} src={logo} />
        <Divider flexItem style={{ background: "black" }} />
      </div>
    </>
  );
};

export default TopLogo;
