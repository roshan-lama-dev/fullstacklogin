import UserSchema from "./UserSchema.js";

//Create

export const insertUser = (userObj) => {
  return UserSchema(userObj).save();
};
//Read
export const getUsers = () => {
  return UserSchema.find();
};
//Update
//filter, updateObj must be object
export const updateUser = (filter, updateObj) => {
  return UserSchema.findOneAndUpdate(filter, updateObj, { new: true });
};
//Delete, filter must be an object datatype
export const deleteUser = (filter) => {
  return UserSchema.findOneAndDelete(filter);
};

export const deleteUserById = (filter) => {
  return UserSchema.findByIdAndDelete(filter);
};
