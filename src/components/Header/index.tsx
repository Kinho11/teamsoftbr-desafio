import React from 'react'
import { HeaderContainer, Address, Cart } from './Header.styled'
import photo from "../../assets/logo.svg"
import quantityOfItems from "../../assets/numero.svg"
import {RiArrowDownSLine, RiArrowLeftSLine} from "react-icons/ri"
import {BiUserCircle} from "react-icons/bi"
import {HiOutlineShoppingCart} from "react-icons/hi"
 
export const Header: React.FC = () => {
  return (
      <HeaderContainer>

        <i className='arrowLeft'><RiArrowLeftSLine size={23}/></i>
        
        <img className='logo' src={photo} alt="logo" />

        <Address>
          <p>Entrega</p>
          <h3>R. Antonio Braune, 222</h3>
          <i><RiArrowDownSLine size={20}/></i>
        </Address>

        <input type="text" className='search' placeholder='Busque por estabelecimento ou produtos'/>

        <div className='login'>
          <i><BiUserCircle size={23}/></i>
          <p>Entrar</p>
        </div>

        <Cart>
          <div className='logoCart'>
            <i><HiOutlineShoppingCart size={23}/></i>
            <img src={quantityOfItems} alt="Quantidade de itens no carrinho" />
          </div>
          <p>Carrinho</p>
        </Cart>
      </HeaderContainer>
  )
}
