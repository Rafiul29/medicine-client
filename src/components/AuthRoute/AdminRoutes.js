


const AdminRoutes = ({ children }) => {

  //get user from store
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const isAdmin = user?.userFound?.isAdmin ? true : false;

  if (!isAdmin) return <h2 className="mt-20">Access denied</h2>;
  return <>{children}</>;
};

export default AdminRoutes;