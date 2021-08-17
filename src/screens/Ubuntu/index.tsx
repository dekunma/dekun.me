import React, { useState, useEffect } from "react";
import BootingScreen from "../BootingScreen";
import Desktop from "../desktop.js";
import LockScreen from "../LockScreen";
import Navbar from "../../components/NavBar";

const Ubuntu = () => {
  const [screenLocked, setScreenLocked] = useState(false);
  const [bgImageName, setBgImageName] = useState("wall-2");
  const [bootingScreen, setBootingScreen] = useState(true);
  const [shutDownScreen, setShutDownScreen] = useState(false);

  useEffect(() => {
    getLocalData();
  }, []);

  const setTimeOutBootScreen = () => {
    setTimeout(() => {
      setBootingScreen(false);
    }, 3000);
  };

  const getLocalData = () => {
    // Get Previously selected Background Image
    let bgImageName = localStorage.getItem("bg-image");
    if (bgImageName !== null && bgImageName !== undefined) {
      setBgImageName(bgImageName);
    }

    let bootingScreen = localStorage.getItem("booting_screen");
    if (bootingScreen !== null && bootingScreen !== undefined) {
      // user has visited site before
      setBootingScreen(false);
    } else {
      // user is visiting site for the first time
      localStorage.setItem("booting_screen", "false");
      setTimeOutBootScreen();
    }

    // get shutdown state
    let shutDownState = localStorage.getItem("shut-down");
    if (
      shutDownState !== null &&
      shutDownState !== undefined &&
      shutDownState === "true"
    )
      shutDown();
    else {
      // Get previous lock screen state
      let screenLocked = localStorage.getItem("screen-locked");
      if (screenLocked !== null && screenLocked !== undefined) {
        setScreenLocked(screenLocked === "true" ? true : false);
      }
    }
  };

  const lockScreen = () => {
    // TODO: change this
    document.getElementById("status-bar")?.blur();
    setTimeout(() => {
      setScreenLocked(true);
    }, 100); // waiting for all windows to close (transition-duration)
    localStorage.setItem("screen-locked", "true");
  };

  const unLockScreen = () => {
    window.removeEventListener("click", unLockScreen);
    window.removeEventListener("keypress", unLockScreen);

    setScreenLocked(false);
    localStorage.setItem("screen-locked", "false");
  };

  const changeBackgroundImage = (imgName) => {
    setBgImageName(imgName);
    localStorage.setItem("bg-image", imgName);
  };

  const shutDown = () => {
    // TODO: change this
    document.getElementById("status-bar")?.blur();
    setShutDownScreen(true);
    localStorage.setItem("shut-down", "true");
  };

  const turnOn = () => {
    setShutDownScreen(false);
    setBootingScreen(true);
    setTimeOutBootScreen();
    localStorage.setItem("shut-down", "false");
  };

  return (
    <div className="w-screen h-screen overflow-hidden" id="monitor-screen">
      <LockScreen
        isLocked={screenLocked}
        bgImgName={bgImageName}
        unLockScreen={unLockScreen}
      />
      <BootingScreen
        visible={bootingScreen}
        isShutDown={shutDownScreen}
        turnOn={turnOn}
      />
      <Navbar lockScreen={lockScreen} shutDown={shutDown} />
      <Desktop
        bg_image_name={bgImageName}
        changeBackgroundImage={changeBackgroundImage}
      />
    </div>
  );
};

export default Ubuntu;
