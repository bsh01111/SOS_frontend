import { TextField } from "@mui/material";
import TopLogo from "../../common/component/TopLogo";
import Footer from "../../common/component/Footer";
import ButtonGroup from "@mui/material/ButtonGroup";

const HelpList = () => {
  return (
    <>
      <div>
        <TopLogo />
        <div style={{ marginTop: 55, marginBottom: 70 }}>
          <div>
            <TextField id="email" label="이메일1" variant="outlined" />
          </div>
          <div>
            <TextField id="email" label="이메일2" variant="outlined" />
          </div>
          <div>
            <TextField id="email" label="이메일" variant="outlined" />
          </div>
          <div>
            <TextField id="email" label="이메일" variant="outlined" />
          </div>
          <div>
            <TextField id="email" label="이메일" variant="outlined" />
          </div>
          <div>
            <TextField id="email" label="이메일" variant="outlined" />
          </div>
          <div>
            <TextField id="email" label="이메일" variant="outlined" />
          </div>
          <div>
            <TextField id="email" label="이메일" variant="outlined" />
          </div>
          <div>
            <TextField id="email" label="이메일" variant="outlined" />
          </div>
          <div>
            <TextField id="email" label="이메일" variant="outlined" />
          </div>
          <div>
            <TextField id="email" label="이메일" variant="outlined" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HelpList;
