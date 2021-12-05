import Request from "../../request";

const MypageService = () => {
  const self = {};

  self.findProfile = async ({ id }) => {
    return await Request({
      path: `/profile/${id}`,
      method: "get",
    });
  };

  return self;
};

export default MypageService();
