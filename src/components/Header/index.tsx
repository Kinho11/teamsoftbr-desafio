import React from 'react'
import { HeaderContainer, Address, Cart, Login,Nav, InputSearch, LogoCart, AddressText, AddressRoad, TextLoginCart, Logo, QuantityOfItemsCart } from './Header.styled'
import photo from "../../assets/logo.svg"
import {RiArrowDownSLine, RiArrowLeftSLine} from "react-icons/ri"
import {BiUserCircle} from "react-icons/bi"
import {HiOutlineShoppingCart} from "react-icons/hi"
 
export const Header: React.FC = () => {
  return (
      <HeaderContainer>

        <RiArrowLeftSLine size={23} className='arrowLeft'/>

        <Logo src={photo} alt="logo" />

        <Nav>

          <Address>
            <AddressText>Entrega</AddressText>
            <AddressRoad>R. Antonio Braune, 222</AddressRoad>
            <RiArrowDownSLine size={20} className='arrowDown'/>
          </Address>

          <InputSearch type="text" placeholder='Busque por estabelecimento ou produtos'/>

          <Login>
            <BiUserCircle size={23}/>
            <TextLoginCart>Entrar</TextLoginCart>
          </Login>

          <Cart>
            <LogoCart>
              <HiOutlineShoppingCart size={23}/>
              <QuantityOfItemsCart>1</QuantityOfItemsCart>
            </LogoCart>
            <TextLoginCart>Carrinho</TextLoginCart>
          </Cart>

        </Nav>

      </HeaderContainer>
  )
}
