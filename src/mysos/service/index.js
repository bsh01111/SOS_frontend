import Request from "../../request";

const MySosService = () => {
  const self = {};

  self.findMyHelpList = async ({ id }) => {
    return await Request({
      path: `sos/myHelp/${id}`,
      method: "get",
    });
  };

  self.findApplyList = async ({ id }) => {
    return await Request({
      path: `sos/userApply/${id}`,
      method: "get",
    });
  };

  self.acceptHelp = async ({ sosId, userId }) => {
    return await Request({
      path: `sos/myApply/accept?sosId=${sosId}&userId=${userId}`,
      method: "put",
    });
  };

  self.refuseHelp = async ({ sosId, userId }) => {
    return await Request({
      path: `sos/myHelp/refuse?sosId=${sosId}&userId=${userId}`,
      method: "put",
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
      path: `sos/myApply/cancel?sosId=${sosId}&userId=${userId}`,
      method: "put",
    });
  };

  return self;
};

export default MySosService();
