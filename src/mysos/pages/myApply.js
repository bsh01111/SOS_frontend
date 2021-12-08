import TopLogo from "../../common/component/TopLogo";
import Footer from "../../common/component/Footer";
import { useEffect, useState } from "react";
import Header from "../common/component/header";
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
        <Header sequence={1} />
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

export default MyApply;
