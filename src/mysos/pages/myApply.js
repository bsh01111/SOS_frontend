import TopLogo from "../../common/component/TopLogo";
import Footer from "../../common/component/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import MyApplyItem from "./myApplyItem";
import MySosService from "../service";
import * as LocalStorage from "../../lib/localStorage";

const MyApply = () => {
  const [myApplyList, setMyApplyList] = useState([]);

  const getMyApplyList = async () => {
    const id = LocalStorage.getItem("userId");
    const response = await MySosService.findMyApplyList({ id });
    setMyApplyList(response.data.applyList);
  };

  useEffect(() => {
    getMyApplyList();
  }, []);
  return (
    <>
      <div>
        <TopLogo />
        <div style={{ marginTop: 55, textAlign: "center", width: "100%" }}>
          <Button component={Link} to={"/myHelp"} style={styles.firstButton}>
            내 요청
          </Button>
          <Button variant="contained" style={styles.secondButton}>
            내 도움
          </Button>
        </div>
        <div>
          {myApplyList.map((myApply) => (
            <MyApplyItem
              sosId={myApply.sosId}
              userId={myApply.userId}
              nickname={myApply.userNickname}
              mainProfileUrl={myApply.mainProfileUrl}
              content={myApply.content}
              location={myApply.location}
              cost={myApply.cost}
              status={myApply.status}
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

export default MyApply;
