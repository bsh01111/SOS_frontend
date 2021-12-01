import Request from "../../request";

const ChattingService = () => {
  const self = {};

  self.getChattingRoom = async () => {
    return await Request({
      path: "/chattingRoom/List",
      method: "get",
    });
  };

  return self;
};

export default ChattingService();
