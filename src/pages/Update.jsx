import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Create from "./Create"

const Update = () => {
  const { id } = useParams();
  const userDetail = useSelector(state => state.user.users)
  const getUserDetail = userDetail?.find(item => item.id === id);

  return <div>
    <Create getUserDetail={getUserDetail} type="update"/>
  </div>;
};

export default Update;
