import Request from "../../request";

const ChattingService = () => {
  const self = {};

  self.findChattingRoomList = async () => {
    return await Request({
      path: "/chattingRoom/list",
      method: "get",
    });
  };

  self.findUserList = async () => {
    return await Request({
      path: "/user/list",
      method: "get",
    });
  };

  return self;
};

export default ChattingService();
