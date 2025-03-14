import React, { Fragment, useState } from "react";
import { Alert, SpeedDial, SpeedDialAction, Backdrop } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/UserSlice";

function UserOption({ user }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const dashboard = () => {
    navigate("/dashboard");
  };
  const orders = () => {
    navigate("/orders");
  };
  const account = () => {
    navigate("/account");
  };
  const logout = () => {
    dispatch(logoutUser());
    alert("Loged Out Successfully");
  };
  const options = [
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    { icon: <PersonIcon />, name: "Profile", func: account },
    { icon: <ExitToAppIcon />, name: "Logout", func: logout },
  ];
  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }
  if (!user || Object.keys(user).length === 0) {
    // ✅ Prevents error when `user` is empty
    return <Loader />; // Show loading message
  }

  return (
    <Fragment>
      <Backdrop open={open} className="z-100" />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        // onClose={() => {
        //   setOpen(false);
        // }}
        // onOpen={() => {
        //   setOpen(true);
        // }}
        onClick={() => setOpen(!open)}
        direction="down"
        open={open}
        icon={
          <img
            src={user?.avatar?.url || "/default-avatar.png"}
            alt="profile"
            className="h-[56px] w-[56px] rounded-[50%]"
          ></img>
        }
      >
        {options.map((item, p) => (
          <SpeedDialAction
            key={p}
            icon={item.icon}
            label={item.name}
            onClick={item.func}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
}

export default UserOption;
