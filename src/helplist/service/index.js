import Request from "../../request";

const HelpListService = () => {
  const self = {};

  self.findSosList = async () => {
    return await Request({
      path: "/sos/list",
      method: "get",
    });
  };

  return self;
};

export default HelpListService();
