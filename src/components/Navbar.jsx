import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchData} from "../features/userDetailSice";
import { showUsers } from "../services/user/userRequsets";

const Navbar = () => {
  const user = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(showUsers());
  }, []);

  useEffect(() => {
    dispatch(searchData(search));
  }, [search]);

  return (
    <div className="flex flex-col gap-3 items-center justify-between py-3 border-b border-gray-200 my-7 md:flex-row">
      <div className="flex items-center gap-4">
        <Link to={"/"}>Create</Link>
        <Link to={"/users"}>All Users ({user?.length})</Link>
      </div>
      <div className="w-full md:w-auto">
        <input
          type="text"
          placeholder="Search..."
          className="border w-full md:w-[500px] h-12 shadow-md indent-2 rounded-lg outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
