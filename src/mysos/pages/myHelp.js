import TopLogo from "../../common/component/TopLogo";
import Footer from "../../common/component/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import MyHelpItem from "./myHelpItem";
import MySosService from "../service";
import * as LocalStorage from "../../lib/localStorage";

const MyHelp = () => {
  const [myHelpList, setMyHelpList] = useState([]);

  const getMyHelpList = async () => {
    const id = LocalStorage.getItem("userId");
    const response = await MySosService.findMyHelpList({ id });
    setMyHelpList(response.data.sosList);
  };

  useEffect(() => {
    getMyHelpList();
  }, []);

  return (
    <>
      <div>
        <TopLogo />
        <div style={{ marginTop: 55, textAlign: "center", width: "100%" }}>
          <Button variant="contained" style={styles.firstButton}>
            내 요청
          </Button>
          <Button component={Link} to={"/myApply"} style={styles.secondButton}>
            내 도움
          </Button>
        </div>
        <div>
          {myHelpList.map((myHelp) => (
            <MyHelpItem
              id={myHelp.id}
              content={myHelp.content}
              location={myHelp.location}
              cost={myHelp.cost}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

const styles = {
  firstButton: {
    height: "99%",
    width: "49%",
    margin: "0.5%",
  },
  secondButton: {
    height: "99%",
    width: "49%",
    margin: "0.5%",
  },
};

export default MyHelp;
