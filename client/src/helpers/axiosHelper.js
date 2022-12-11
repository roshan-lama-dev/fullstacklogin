import axios from "axios";

const apiEp = "http://localhost:8000/users";
// const userApi = baseUrl + "/users";

// send new user
export const sendUsers = async (obj) => {
  try {
    const { data } = await axios.post(apiEp, obj);
    return data;
    // console.log(result);
  } catch (error) {
    // console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
// get user from the database
// update the user in the database
// delete the single user from the database

export const fetchAllUsers = async () => {
  try {
    const { data } = await axios.get(apiEp);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const updateUser = async (obj) => {
  try {
    const { data } = await axios.put(apiEp, obj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteuser = async (_id) => {
  try {
    const { data } = await axios.delete(apiEp + "/" + _id);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const udpateUsers = () => {};
