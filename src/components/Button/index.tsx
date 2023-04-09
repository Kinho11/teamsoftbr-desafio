import React, { useState } from "react";
import { ButtonOrange } from "./Button.styled";
import { Popover } from "../Popover";
import { useDispatch } from "react-redux";
import { showItemsCart } from "../../features/slices/showItemsCartSlice";

interface Ibuttton {
  text?: string;
  setShowItemsCart: React.Dispatch<React.SetStateAction<boolean>>
  setShowPopover: React.Dispatch<React.SetStateAction<boolean>>
}

export const Button: React.FC<Ibuttton> = ({ text, setShowItemsCart, setShowPopover}) => {
  const dispatch = useDispatch();
  // const [showPopover, setShowPopover] = useState(false);

  const Click = () => {
    setShowPopover(true);
    setShowItemsCart(true);
    dispatch(showItemsCart());
  };

  setTimeout(() => {
    setShowPopover(false);
  }, 5000);

  return (
    <>
      <ButtonOrange onClick={Click}>{text}</ButtonOrange>
    </>
  );
};
