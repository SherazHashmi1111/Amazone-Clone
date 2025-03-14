import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import MetaData from "../components/layout/MetaData";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/layout/Loader";

function MyAccount() {
  // ❌ Removed `user` prop
  const { loading, isAuthenticated, user } = useSelector((state) => state.user); // ✅ Get `user` from Redux
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

  if (!user || Object.keys(user).length === 0) {
    // ✅ Prevents error when `user` is empty
    return <Loader />; // Show loading message
  }

  return (
    <Fragment>
      <MetaData title={user.name || "Profile"} />
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-[91vh] w-full flex md:flex-row flex-col items-center justify-center">
          <div className="h-[70vh] md:w-[35vw] w-full">
            <h1 className="text-3xl font-semibold mt-10 ml-10 text-gray-600">
              My Profile
            </h1>
            <img
              src={user?.avatar?.url || "/default-avatar.png"} // ✅ Safe optional chaining
              alt="Profile"
              className="w-60 mx-auto rounded-[50%] mt-10 transform hover:scale-105 duration-300"
            />
            <Link
              to={"me/update"}
              className="md:w-[50%] w-[90%] mx-auto block text-center bg-purple-700 text-xl md:text-2xl py-1 rounded-xl text-white cursor-pointer hover:text-purple-700 border hover:border-purple-700 hover:bg-white mt-10"
            >
              Update Profile
            </Link>
          </div>
          <div className="md:h-[70vh] h-[50vh] md:w-[35vw] w-[80%]  flex flex-col justify-between py-10 pl-5">
            <div>
              <h4 className="text-2xl font-semibold">Full Name</h4>
              <p className="text-gray-500 ml-2">{user.name || "N/A"}</p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold">Email</h4>
              <p className="text-gray-500 ml-2">{user.email || "N/A"}</p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold">Joined On</h4>
              <p className="text-gray-500 ml-2">
                {user.createdAt
                  ? String(user.createdAt).substring(0, 10)
                  : "N/A"}
              </p>
            </div>
            <div className="flex flex-col items-center w-full h-[30%] md:h-[20%] justify-between">
              <Link
                to={"/orders"}
                className="md:w-[50%] w-[90%] bg-gray-700 text-white text-center py-1 text-sm md:text-lg transform hover:-translate-y-1 duration-300 hover:scale-105 rounded"
              >
                My Orders
              </Link>
              <Link
                to={"/password/update"}
                className="md:w-[50%]  w-[90%] bg-gray-700 text-white text-center py-1 text-sm md:text-lg transform hover:-translate-y-1 duration-300 hover:scale-105 rounded"
              >
                Change Password
              </Link>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default MyAccount;
