import express, { application } from "express";
import {
  insertUser,
  getUsers,
  updateUser,
  deleteUserById,
} from "../models/user/UserModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    console.log(users);
    // get all data from db and return to the client
    res.json({
      status: "success",
      message: "here are the users",
      // this is also users: users but changes ti
      users,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "faliure",
      message: error.message,
    });
  }
});
router.post("/", async (req, res) => {
  try {
    const user = req.body;
    const result = await insertUser(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "here are the users",
        })
      : res.json({
          status: "error",
          message: "unable to create user, try again",
        });
    // get all data from db and return to the client
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});
router.put("/", async (req, res) => {
  try {
    // const { _id, password } = req.body;
    const { _id, ...rest } = req.body;

    // const
    // converting the req.body into object before sending as a parame
    const filter = { _id };
    // const updateObj = { password };
    const result = await updateUser(filter, rest);

    result?._id
      ? res.json({
          status: "success",
          message: "Users are updated successfully",
        })
      : res.json({
          status: "error",
          message: "unable to create user, try again",
        });
    // get all data from db and return to the client
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// using params
router.delete("/:_id", async (req, res) => {
  try {
    // const { _id, password } = req.body;
    const { _id } = req.params;

    // const
    // converting the req.body into object before sending as a parame
    // const filter = { _id };
    // const updateObj = { password };

    const result = await deleteUserById(_id);

    result?._id
      ? res.json({
          status: "success",
          message: "Users are updated successfully",
        })
      : res.json({
          status: "error",
          message: "unable to create user, try again",
        });
    // get all data from db and return to the client
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
export default router;
