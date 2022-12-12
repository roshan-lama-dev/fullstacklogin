import { FormComponents } from "./components/customForm/FormComponents";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "./helpers/axiosHelper";
import { UserTable } from "./components/userTable/UserTable";
function App() {
  const [userList, setUsersList] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const { users } = await fetchAllUsers();
    setUsersList(users);
  };
  return (
    <div>
      <section>
        <FormComponents getUsers={getUsers} />
      </section>
      <section className="mt-5">
        <div>{userList.length} Users Found</div>
        <UserTable userList={userList} getUsers={getUsers} />
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
