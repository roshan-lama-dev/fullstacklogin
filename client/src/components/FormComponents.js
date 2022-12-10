import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export const FormComponents = (addTask) => {
  // create a use state to hold the data from the form
  const [form, setForm] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    addTask(form);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      {" "}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> First Name</Form.Label>
          <Form.Control
            type="text"
            name="fName"
            placeholder="Enter first Name"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Last Name</Form.Label>
          <Form.Control
            name="lName"
            type="text"
            placeholder="Enter last Name"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Email Address</Form.Label>
          <Form.Control
            name="email"
            type="text"
            placeholder="Enter email address"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter password"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Users
        </Button>
      </Form>
    </div>
  );
};
