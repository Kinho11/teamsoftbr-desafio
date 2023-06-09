import React from "react";
import * as S from "./Header.styled";
import photo from "../../assets/logo.svg";
import { RiArrowDownSLine, RiArrowLeftSLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Popover } from "../Popover";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const Header: React.FC = () => {

  const {hasItem,clickButton} = useSelector((state: RootState)=> state.cart || {})

  return (
    <S.HeaderContainer>
      <RiArrowLeftSLine size={23} className="arrowLeft" />

      <S.Logo src={photo} alt="logo" />

      <S.Nav>
        <S.Address>
          <S.AddressText>Entrega</S.AddressText>
          <S.AddressRoad>R. Antonio Braune, 222</S.AddressRoad>
          <RiArrowDownSLine size={20} className="arrowDown" />
        </S.Address>

        <S.InputSearch
          type="text"
          placeholder="Busque por estabelecimento ou produtos"
        />

        <S.Login>
          <BiUserCircle size={23} />
          <S.TextLoginCart>Entrar</S.TextLoginCart>
        </S.Login>

        <S.Cart>
          <S.LogoCart>
            <HiOutlineShoppingCart size={23} />
            {hasItem && <S.QuantityOfItemsCart>1</S.QuantityOfItemsCart>}
          </S.LogoCart>
          <S.TextLoginCart>Carrinho</S.TextLoginCart>
          {clickButton && <Popover />}
        </S.Cart>
      </S.Nav>
    </S.HeaderContainer>
  );
};
