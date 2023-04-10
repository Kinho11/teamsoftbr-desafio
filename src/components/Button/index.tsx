import React from "react";
import { ButtonOrange } from "./Button.styled";

interface Ibuttton {
  text?: string;
  onClick: () => void;
}

export const Button: React.FC<Ibuttton> = ({ text, onClick }) => {
  return <ButtonOrange onClick={onClick}>{text}</ButtonOrange>;
};
