import React, { useState } from "react";

import { ButtonOrange } from "./Button.styled";
import { Popover } from "../Popover";

interface Ibuttton {
  text?: string;
}

export const Button: React.FC<Ibuttton> = ({ text }) => {
  const [showPopover, setShowPopover] = useState(false);

  const Click = () => {
    setShowPopover(true);
  };

  setTimeout(() => {
    setShowPopover(false);
  }, 5000);

  return (
    <>
      <ButtonOrange onClick={Click}>{text}</ButtonOrange>
      <Popover open={showPopover} />
    </>
  );
};
