import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInputField } from "../../customInputField/CustomInputField";
import { toast } from "react-toastify";
import { fetchAllUsers, sendUsers } from "../../helpers/axiosHelper";
// import { getUsers } from "../../../api/src/models/user/UserModel";
// import sendUsers from "../helpers/axiosHelper.js";
export const EditForm = () => {
  // create a use state to hol  d the data from the form
  const [newUser, setNewUser] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const inputFields = [
    {
      name: "fName",
      label: "First Name",
      type: "text",
      required: true,
      placeholder: "",
    },
    {
      name: "lName",
      label: "Last Name",
      type: "text",
      required: true,
      placeholder: "",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "You email address",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      placeholder: "",
    },
  ];
  //

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { status, message } = await sendUsers(newUser);
    toast[status](message);
    // console.log(newUser);

    status === "success" && fetchAllUsers();
  };

  // console.log(newUser);
  return (
    <div className="bg-aqua">
      {" "}
      <h3 className="text-center mt-2">Registration Form</h3>
      <Form className="mt-5 container" onSubmit={handleOnSubmit}>
        {inputFields.map((item, i) => {
          return (
            <CustomInputField key={i} {...item} onChange={handleOnChange} />
          );
        })}

        <Button className="ml-5" variant="danger" type="submit">
          Add Users
        </Button>
      </Form>
    </div>
  );
};
