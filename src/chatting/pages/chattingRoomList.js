import TopLogo from "../../common/component/TopLogo";
import Footer from "../../common/component/Footer";
import { useEffect, useState } from "react";
import ChattingService from "../service";
import ChattingRoomItem from "./chattingRoomItem";
import Header from "../common/component/header";
import * as LocalStorage from "../../lib/localStorage";

const ChattingRoomList = () => {
  const [chattingRoomList, setChattingRoomList] = useState([]);

  const getChattingRoomList = async () => {
    const userId = LocalStorage.getItem("userId");
    const response = await ChattingService.findChattingRoomList({ userId });
    setChattingRoomList(response.data.chattingRoomList);
  };

  useEffect(() => {
    getChattingRoomList();
  }, []);

  return (
    <>
      <div>
        <TopLogo />
        <Header sequence={0} />
        <div>
          {chattingRoomList.map((chattingRoom) => (
            <ChattingRoomItem
              id={chattingRoom.id}
              userId={chattingRoom.userId}
              guestId={chattingRoom.guestId}
              userNickname={chattingRoom.userNickname}
              mainProfileUrl={chattingRoom.mainProfileUrl}
            />
          ))}
        </div>
        <Footer sequence={3} />
      </div>
    </>
  );
};

export default ChattingRoomList;
