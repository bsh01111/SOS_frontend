import Request from "../../request";

const HelpDetailService = () => {
  const self = {};

  self.findSosDetail = async ({ id }) => {
    return await Request({
      path: `/sos/${id}`,
      method: "get",
    });
  };

  self.insertUserSosApply = async ({ userId, sosId }) => {
    return await Request({
      path: `/sos/userApply`,
      method: "post",
      data: { userId, sosId },
    });
  };

  return self;
};

export default HelpDetailService();
