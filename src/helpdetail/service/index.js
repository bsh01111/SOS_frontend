import Request from "../../request";

const HelpDetailService = () => {
  const self = {};

  self.findSosDetail = async ({ id }) => {
    return await Request({
      path: `/sos/${id}`,
      method: "get",
    });
  };

  return self;
};

export default HelpDetailService();
