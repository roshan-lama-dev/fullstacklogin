import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";
import { deleteuser } from "../../helpers/axiosHelper";
import { EditForm } from "../customForm/EditForm";
import { CustomModal } from "../customModal/CustomModal";

export const UserTable = ({ userList, getUsers }) => {
  const [show, setShow] = useState(false);
  const handeOnEdit = () => {
    setShow(!show);
  };
  const handleOnDelete = async (_id) => {
    if (window.confirm("Are you sure you want to delete this user")) {
      const { status, message } = await deleteuser(_id);
      getUsers();
      toast[status](message);
    }
  };
  return (
    <div>
      {show && (
        <CustomModal show={show} setShow={setShow} >
          <EditForm />
        </CustomModal>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item, i) => (
            <tr key={item._id}>
              <td>1</td>
              <td>{item.fName}</td>
              <td>{item.lName}</td>
              <td>{item.email}</td>
              <td>
                <Button onClick={() => handeOnEdit()}>Edit</Button>
                <Button
                  variant="danger"
                  onClick={() => handleOnDelete(item._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
