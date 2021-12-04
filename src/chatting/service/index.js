import Request from "../../request";

const ChattingService = () => {
  const self = {};

  self.findChattingRoomList = async ({ id }) => {
    return await Request({
      path: `/chattingRoom/list`,
      params: { id },
      method: "get",
    });
  };

  self.findUserList = async ({ id }) => {
    return await Request({
      path: "/user/list",
      params: { id },
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
