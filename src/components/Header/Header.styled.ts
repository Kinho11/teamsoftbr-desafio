import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 1280px;
  background-color: #F4F4F4;
  margin: 0 auto;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  .arrowLeft{
    display: none;
  }

  @media screen and (max-width: 600px) {
    align-items: center;
    justify-content: center;

    .arrowLeft{
      display: flex;
      position: absolute;
      left: 10px;
      cursor: pointer;
      color: var(--color-light-gray);
    }
  }
`

export const Logo = styled.img`
  margin-right: 124px;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    margin-right: 0;
    width: 150px;
  }

`

export const Address = styled.div`
  background: var(--color-white);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 230px;
  height: 48px;
  font-size: 12px;
  padding: 8px;
  position: relative;
  cursor: pointer;
  
  .arrowDown{
    position: absolute;
    right: 10px;
    top: 34.56%;
    color: var(--color-red);
  }
  
`

export const AddressText = styled.p`
  color: var(--color-red);
  margin-bottom: 8px;
`

export const AddressRoad = styled.h3`
  color: var(--color-medium-gray);
  font-weight: 700;
`

export const InputSearch = styled.input`
  margin-left: 24px;
  width: 354px;
  height: 48px;
  font-size: 14px;
  padding: 0 16px;
  color: var(--color-medium-gray);
  border: 1px solid var(--color-red);
  border-radius: 4px;
  outline: none;
`

export const Login = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 29px;
  cursor: pointer;
  color: var(--color-red);
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 29px;
  cursor: pointer;
  color: var(--color-red);
`

export const LogoCart = styled.div`
  position: relative;
`
export const QuantityOfItemsCart = styled.p`
  font-size: 10px;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  color: var(--color-white);
  background-color: var(--color-orange);
  position: absolute;
  left: 16px;
  top: -8px;
`

export const TextLoginCart = styled.p`
  font-size: 16px;
  color: var(--color-red);
`

export const Nav = styled.nav`
  display: flex;
  @media screen and (max-width: 600px) {
    display: none;
}
`