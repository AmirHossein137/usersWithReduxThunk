const UsersCard = ({ title, value }) => {
  return (
    <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-5">
      <span className="text-sm text-gray-600">{`${title} :`}</span>
      <span className="text-slate-900 font-semibold">{value}</span>
    </div>
  );
};

export default UsersCard;
