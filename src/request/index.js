import axios from "axios";

const Request = async ({
  path,
  method,
  data,
  headers = {
    "Content-Type": "application/json;charset=UTF-8",
  },
}) => {
  try {
    let response;
    if (method === "get") {
      response = await axios.get(path, { params: data }, headers);
    } else if (method === "post") {
      response = await axios.post(path, data, headers);
    } else if (method === "put") {
      response = await axios.post(path, data, headers);
    } else if (method === "delete") {
      response = await axios.post(path, { data }, headers);
    }
    return response.data;
  } catch (e) {
    throw e;
  }
};

export default Request;
