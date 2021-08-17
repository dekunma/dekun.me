import React, { useState } from "react";
import Clock from "../../components2/Clock";
import Status from "../Status";
import StatusCard from "../Status/statusCard";

type NavBarProps = {
  shutDown: () => void;
  lockScreen: () => void;
};

const NavBar = (props: NavBarProps) => {
  const [statusCard, setStatusCard] = useState(false);

  const { shutDown, lockScreen } = props;

  return (
    <div className="main-navbar-vp absolute top-0 right-0 w-screen shadow-md flex flex-nowrap justify-between items-center bg-ub-grey text-ubt-grey text-sm select-none z-50">
      <div
        tabIndex={0}
        className={
          "pl-3 pr-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1 "
        }
      >
        Activities
      </div>
      <div
        tabIndex={0}
        className={
          "pl-2 pr-2 text-xs md:text-sm outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1 "
        }
      >
        <Clock />
      </div>
      <div
        id="status-bar"
        tabIndex={0}
        onFocus={() => {
          setStatusCard(true);
        }}
        // removed onBlur from here
        className={
          "relative pr-3 pl-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1 "
        }
      >
        <Status />
        <StatusCard
          shutDown={shutDown}
          lockScreen={lockScreen}
          visible={statusCard}
          toggleVisible={() => {
            // this prop is used in statusCard component in handleClickOutside callback using react-onclickoutside
            setStatusCard(false);
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
