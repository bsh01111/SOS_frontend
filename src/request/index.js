import axios from "axios";

const url = "http://localhost:8080";

const Request = async ({
  path,
  method,
  data,
  headers = {
    "Content-Type": "application/json;charset=UTF-8",
  },
}) => {
  try {
    if (method === "get") {
      return await axios.get(url + path, { params: data }, headers);
    } else if (method === "post") {
      return await axios.post(url + path, data, headers);
    } else if (method === "put") {
      return await axios.post(url + path, data, headers);
    } else if (method === "delete") {
      return await axios.post(url + path, { data }, headers);
    }
  } catch (e) {
    throw e;
  }
};

export default Request;
