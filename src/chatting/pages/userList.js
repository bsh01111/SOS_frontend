import TopLogo from "../../common/component/TopLogo";
import Footer from "../../common/component/Footer";
import ChattingService from "../service";
import { useEffect, useState } from "react";
import Header from "../common/component/header";
import UserItem from "./userItem";
import * as LocalStorage from "../../lib/localStorage";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  const getUserList = async () => {
    const userId = LocalStorage.getItem("userId");
    const response = await ChattingService.findUserList({ userId });
    setUserList(response.data.userList);
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <>
      <div>
        <TopLogo />
        <Header sequence={1} />
        <div>
          {userList.map((user) => (
            <UserItem
              id={user.id}
              userId={user.userId}
              guestId={user.guestId}
              nickname={user.nickname}
              mainProfileUrl={user.mainProfileUrl}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default UserList;
