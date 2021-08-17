import React from "react";

type BootingScreenProps = {
  visible: boolean;
  isShutDown: boolean;
  turnOn: () => void;
};

const BootingScreen = (props: BootingScreenProps) => {
  const { visible, isShutDown, turnOn } = props;

  return (
    <div
      style={visible || isShutDown ? { zIndex: 100 } : { zIndex: -20 }}
      className={
        (visible || isShutDown
          ? " visible opacity-100"
          : " invisible opacity-0 ") +
        " absolute duration-500 select-none flex flex-col justify-around items-center top-0 right-0 overflow-hidden m-0 p-0 h-screen w-screen bg-black"
      }
    >
      <img
        className="md:w-1/4 w-1/2"
        src="./themes/Yaru/status/cof_orange_hex.svg"
        alt="Ubuntu Logo"
      />
      <div
        className="w-10 h-10 flex justify-center items-center rounded-full outline-none cursor-pointer"
        onClick={turnOn}
      >
        {isShutDown ? (
          <div className="bg-white rounded-full flex justify-center items-center w-10 h-10 hover:bg-gray-300">
            <img
              className="w-8"
              src="./themes/Yaru/status/power-button.svg"
              alt="Power Button"
            />
          </div>
        ) : (
          <img
            className={" w-10 " + (visible ? " animate-spin " : "")}
            src="./themes/Yaru/status/process-working-symbolic.svg"
            alt="Ubuntu Process Symbol"
          />
        )}
      </div>
      <img
        className="md:w-1/5 w-1/2"
        src="./themes/Yaru/status/ubuntu_white_hex.svg"
        alt="Ubuntu Name"
      />
      <div className="text-white mb-4">
        <a
          className="underline"
          href="https://www.linkedin.com/in/TBD/"
          rel="noreferrer noopener"
          target="_blank"
        >
          linkedin
        </a>
        <span className="font-bold mx-1">|</span>
        <a
          href="https://github.com/dekunma"
          rel="noreferrer noopener"
          target="_blank"
          className="underline"
        >
          github
        </a>
      </div>
    </div>
  );
};

export default BootingScreen;
