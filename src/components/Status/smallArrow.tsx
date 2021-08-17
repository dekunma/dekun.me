import React from "react";

export default function SmallArrow(props: {
  angle: string;
  className: string;
}) {
  let { angle } = props;
  angle = angle ? angle : "up"; // default value is up
  return <div className={" arrow-custom-" + angle}></div>;
}
