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
    <div className="flex items-center justify-between py-3 border-b border-gray-200 mb-7">
      <div className="flex items-center gap-4">
        <Link to={"/"}>Create</Link>
        <Link to={"/users"}>All Users ({user?.length})</Link>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="border w-[550px] h-12 shadow-md indent-2 rounded-lg outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
