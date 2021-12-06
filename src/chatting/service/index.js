import Request from "../../request";

const ChattingService = () => {
  const self = {};

  self.findChattingRoomList = async ({ userId }) => {
    return await Request({
      path: `chattingRoom/list?id=${userId}`,
      method: "get",
    });
  };

  self.findUserList = async ({ userId }) => {
    return await Request({
      path: `/user/list?id=${userId}`,
      method: "get",
    });
  };

  self.findChattingRoom = async ({ guestId }) => {
    return await Request({
      path: `/chattingroom/${guestId}`,
      method: "get",
    });
  };

  return self;
};

export default ChattingService();
