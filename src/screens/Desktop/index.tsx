import React, { useState, useEffect } from "react";
import apps from "apps.config";
import { useEventListener } from "utils/useEventListener";
import $ from "jquery";

const Desktop = () => {
  const [focusedWindows, setFocusedWindows] = useState({});
  const [closedWindows, setClosedWindows] = useState({});
  const [allAppsView, setAllAppsView] = useState(false);
  const [overLappedWindows, setOverLappedWindows] = useState({});
  const [disabledApps, setDisabledApps] = useState({});
  const [favouriteApps, setFacouriteApps] = useState({});
  const [hideSideBar, setHideSideBar] = useState(false);
  const [minimizedWindows, setMinimizedWindows] = useState({});
  const [desktopApps, setDesktopApps] = useState([]);
  const [contextMenus, setContextMenus] = useState({
    desktop: false,
    default: false,
  });

  useEffect(() => {
    fetchAppsData();
  }, []);

  const setEventListeners = () => {
    document.getElementById("open-settings")?.addEventListener("click", () => {
      this.openApp("settings");
    });
  };

  const focus = (objId) => {
    // removes focus from all window and
    // gives focus to window with 'id = objId'
    var focused_windows = focusedWindows;
    focused_windows[objId] = true;
    for (let key in focused_windows) {
      if (focused_windows.hasOwnProperty(key)) {
        if (key !== objId) {
          focused_windows[key] = false;
        }
      }
    }
    setFocusedWindows(focusedWindows);
  };

  const openApp = (objId) => {
    // if the app is disabled
    if (disabledApps[objId]) return;

    if (minimizedWindows[objId]) {
      // focus this app's window
      focus(objId);

      // set window's last position
      let r = document.querySelector("#" + objId) as HTMLElement;
      r.style.transform = `translate(${r.style.getPropertyValue(
        "--window-transform-x"
      )},${r.style.getPropertyValue("--window-transform-y")}) scale(1)`;

      // tell childs that his app has been not minimised
      let newMinimizedWindows = minimizedWindows;
      newMinimizedWindows[objId] = false;
      setMinimizedWindows(newMinimizedWindows);
      return;
    }

    //if app is already opened
    if (this.app_stack.includes(objId)) this.focus(objId);
    else {
      let closed_windows = this.state.closed_windows;
      let favourite_apps = this.state.favourite_apps;
      var frequentApps = localStorage.getItem("frequentApps")
        ? JSON.parse(localStorage.getItem("frequentApps"))
        : [];
      var currentApp = frequentApps.find((app) => app.id === objId);
      if (currentApp) {
        frequentApps.forEach((app) => {
          if (app.id === currentApp.id) {
            app.frequency += 1; // increase the frequency if app is found
          }
        });
      } else {
        frequentApps.push({ id: objId, frequency: 1 }); // new app opened
      }

      frequentApps.sort((a, b) => {
        if (a.frequency < b.frequency) {
          return 1;
        }
        if (a.frequency > b.frequency) {
          return -1;
        }
        return 0; // sort according to decreasing frequencies
      });

      localStorage.setItem("frequentApps", JSON.stringify(frequentApps));

      setTimeout(() => {
        favourite_apps[objId] = true; // adds opened app to sideBar
        closed_windows[objId] = false; // openes app's window
        this.setState(
          { closed_windows, favourite_apps, allAppsView: false },
          this.focus(objId)
        );
        this.app_stack.push(objId);
      }, 200);
    }
  };

  const checkContextMenu = (e) => {
    e.preventDefault();
    hideAllContextMenu();
    switch (e.target.dataset.context) {
      case "desktop-area":
        showContextMenu(e, "desktop");
        break;
      default:
        showContextMenu(e, "default");
    }
  };

  const showContextMenu = (e, menuName /* context menu name */) => {
    let { posx, posy } = getMenuPosition(e);
    let contextMenu = document.getElementById(`${menuName}-menu`);

    if (posx + $(contextMenu).width() > window.innerWidth)
      posx -= $(contextMenu).width();
    if (posy + $(contextMenu).height() > window.innerHeight)
      posy -= $(contextMenu).height();

    contextMenu!.style.left = posx.toString() + "px";
    contextMenu!.style.top = posy.toString() + "px";

    setContextMenus({
      ...contextMenus,
      [menuName]: true,
    });
  };

  const hideAllContextMenu = () => {
    let menus = contextMenus;
    Object.keys(menus).forEach((key) => {
      menus[key] = false;
    });
    setContextMenus(menus);
  };

  const getMenuPosition = (e) => {
    var posx = 0;
    var posy = 0;

    if (!e) e = window.event;

    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posy =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    return {
      posx,
      posy,
    };
  };

  useEventListener("contextmenu", checkContextMenu);
  useEventListener("click", hideAllContextMenu);

  const fetchAppsData = () => {
    let focusedWindows = {},
      closedWindows = {},
      disabledApps = {},
      favouriteApps = {},
      overlappedWindows = {},
      minimizedWindows = {};

    let desktop_apps: string[] = [];

    apps.forEach((app) => {
      focusedWindows = {
        ...focusedWindows,
        [app.id]: false,
      };
      closedWindows = {
        ...closedWindows,
        [app.id]: true,
      };
      disabledApps = {
        ...disabledApps,
        [app.id]: app.disabled,
      };
      favouriteApps = {
        ...favouriteApps,
        [app.id]: app.favourite,
      };
      overlappedWindows = {
        ...overlappedWindows,
        [app.id]: false,
      };
      minimizedWindows = {
        ...minimizedWindows,
        [app.id]: false,
      };

      if (app.desktopShortcut) {
        desktop_apps.push(app.id);
      }
    });
    setFocusedWindows(focusedWindows);
    setClosedWindows(closedWindows);
    setDisabledApps(disabledApps);
    setFacouriteApps(favouriteApps);
    setOverLappedWindows(overLappedWindows);
    setMinimizedWindows(minimizedWindows);
    setDesktopApps(desktopApps);
    // this.initFavourite = { ...favouriteApps };
  };
};
