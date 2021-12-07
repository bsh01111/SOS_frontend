import Request from "../../request";

const MySosService = () => {
  const self = {};

  self.findMyHelpList = async ({ id }) => {
    return await Request({
      path: `sos/myHelp/${id}`,
      method: "get",
    });
  };

  self.findMyApplyList = async ({ id }) => {
    return await Request({
      path: `sos/myApply/${id}`,
      method: "get",
    });
  };

  self.cancelSosApply = async ({ sosId, userId }) => {
    return await Request({
      path: `sos/myApply?sosId=${sosId}&userId=${userId}`,
      method: "put",
    });
  };

  return self;
};

export default MySosService();
