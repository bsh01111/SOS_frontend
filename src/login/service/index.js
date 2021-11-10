import Request from "../../request";

const LoginService = () => {
  const self = {};

  self.login = async ({ email, passward }) => {
    return await Request({
      path: "/user/login",
      method: "post",
      data: { email, passward },
    });
  };

  self.test = async () => {
    return await Request({
      path: "/user/hello",
      method: "get",
    });
  };

  return self;
};

export default LoginService();
