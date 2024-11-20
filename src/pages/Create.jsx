import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, updateUser } from "../services/user/userRequsets";
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";
import LoaderBtn from "../components/LoaderBtn";
import toast from "react-hot-toast";

const Create = ({ getUserDetail, type }) => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.user);

  const handleChangeUserDetail = (e) => {
    const { value } = e.target;
    setUser({ ...user, [e.target.name]: value });
  };

  useEffect(() => {
    if (getUserDetail) {
      setUser(getUserDetail);
    }
  }, [getUserDetail]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (type === "update") {
      const userId = user.id;
      dispatch(updateUser({ userId, user, navigate }));
    } else {
      if (user.name && user.email && user.age && user.gender) {
        dispatch(createUser({ user, navigate }));
      } else {
        toast.error("Please fill in all fields");
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        className="w-full max-w-2xl flex flex-col gap-6 bg-gray-100 rounded-xl p-6"
        onSubmit={handleFormSubmit}
      >
        {getUserDetail ? (
          <h2 className="text-center text-xl text-slate-800 font-bold pb-3 border-b border-gray-300">
            Edit User
          </h2>
        ) : (
          <h2 className="text-center text-xl text-slate-800 font-bold pb-3 border-b border-gray-300">
            Create User
          </h2>
        )}

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold pl-3">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={user?.name}
            placeholder="Enter Your Name..."
            className="h-12 rounded-xl border border-gray-200 indent-3 outline-none focus:border-blue-400"
            onChange={handleChangeUserDetail}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold pl-3">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={user?.email}
            placeholder="Enter Your Email..."
            className="h-12 rounded-xl border border-gray-200 indent-3 outline-none focus:border-blue-400"
            onChange={handleChangeUserDetail}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="age" className="font-semibold pl-3">
            Age
          </label>
          <input
            type="text"
            id="age"
            name="age"
            value={user?.age}
            placeholder="Enter Your Age..."
            className="h-12 rounded-xl border border-gray-200 indent-3 outline-none focus:border-blue-400"
            onChange={handleChangeUserDetail}
          />
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <input
              id="male"
              type="radio"
              name="gender"
              value="male"
              onChange={handleChangeUserDetail}
              checked={user?.gender === "male"}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              id="famele"
              type="radio"
              name="gender"
              value="famele"
              onChange={handleChangeUserDetail}
              checked={user?.gender === "famele"}
            />
            <label htmlFor="famele">Famele</label>
          </div>
        </div>
        <Button
          type="submit"
          color="primary"
          className="text-white h-12 rounded-xl"
        >
          {loading ? <LoaderBtn /> : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default Create;
