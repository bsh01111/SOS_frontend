import Request from "../../request";

const LoginService = () => {
  const self = {};

  self.login = async ({ email, password }) => {
    return await Request({
      path: "/user/login",
      method: "post",
      data: { email, password },
    });
  };

  self.signUp = async ({
    email,
    password,
    name,
    nickname,
    birthday,
    sex,
    phoneNumber,
  }) => {
    return await Request({
      path: "/user/signUp",
      method: "post",
      data: { email, password, name, nickname, birthday, sex, phoneNumber },
    });
  };
  return self;
};

export default LoginService();
