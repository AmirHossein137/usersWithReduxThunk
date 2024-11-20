import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUsers } from "../services/user/userRequsets";
import UsersCard from "../components/UsersCard";
import { Button } from "@nextui-org/button";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Users = () => {
  const dispatch = useDispatch();
  const { users, loading, status, searchText } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    dispatch(showUsers());
  }, [status, dispatch]);

  if (loading) return <Loader />;

  return (
    <div className="flex items-center justify-center mb-6">
      <div className="w-full max-w-3xl flex flex-col gap-5 p-5 bg-gray-100 rounded-xl">
        <h1 className="text-center font-bold text-xl mb-6">List Of Users</h1>
        {users &&
          users
            .filter((item) => {
              if (searchText.length === 0) {
                return item;
              } else {
                return item.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              }
            })
            .map((user) => (
              <div
                key={user?.id}
                className="bg-white py-3 px-4 rounded-lg shadow-sm"
              >
                <UsersCard title="Name" value={user?.name} />
                <UsersCard title="Email" value={user?.email} />
                <UsersCard title="Age" value={user?.age} />
                <UsersCard title="Gender" value={user?.gender} />
                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-6">
                    <Link
                      to={`/update/${user?.id}`}
                      className="h-11 w-full flex items-center justify-center text-white rounded-xl font-medium bg-slate-800"
                    >
                      Edit
                    </Link>
                  </div>
                  <div className="col-span-6">
                    <Button
                      onClick={() => dispatch(deleteUser(user?.id))}
                      color="danger"
                      className="w-full text-white font-medium h-11"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Users;
