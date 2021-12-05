import Request from "../../request";

const MypageService = () => {
  const self = {};

  self.findProfile = async ({ id }) => {
    return await Request({
      path: `/profile/${id}`,
      method: "get",
    });
  };

  self.findPostList = async ({ id }) => {
    return await Request({
      path: `/profile/post/${id}`,
      method: "get",
    });
  };

  return self;
};

export default MypageService();
