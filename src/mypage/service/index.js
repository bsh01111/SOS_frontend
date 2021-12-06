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

  self.enrollPost = async ({ userId, content, imageUrl }) => {
    return await Request({
      path: "/profile/post",
      method: "post",
      data: { userId, content, imageUrl },
    });
  };

  return self;
};

export default MypageService();
