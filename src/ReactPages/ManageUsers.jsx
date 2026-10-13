// import Searchbar from "../Components/Searchbar";
// import UserManagement from "../Components/UserManagement";
// import Users from "../Components/Users";
import Searchbar from "../components/labManagement/Searchbar";
import UserManagement from "../components/userManagement/UserManagement";
import Users from "../components/userManagement/Users";

function ManageUsers() {
  return (
    <div className="">
      <Users />
      <Searchbar />
      <div className="ml-2.5 mt-10">
        <UserManagement />
      </div>
    </div>
  );
}

export default ManageUsers;
