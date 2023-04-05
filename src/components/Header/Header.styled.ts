import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 1280px;
  background-color: #F4F4F4;
  margin: 0 auto;
  padding: 16px 40px;
  display: flex;
  align-items: center;

  .arrowLeft{
    display: none;
  }

  .logo{
    margin-right: 124px;

    &:hover{
      cursor: pointer;
    }
  }

  .search{
    margin-left: 24px;
    width: 354px;
    height: 48px;
    font-size: 14px;
    padding: 0 16px;
    color: var(--color-dark-gray);
    border: 1px solid var(--color-red);
    border-radius: 4px;
    outline: none;

  }

  .login{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 29px;
    color: var(--color-red);
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

    .logo{
      margin-right: 0;
    }

    .search, .login{
      display: none;
    }
  }
`

export const Address = styled.div`
  background: var(--color-white);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 230px;
  font-size: 12px;
  padding: 8px;
  position: relative;

  p{
      color: var(--color-red);
      margin-bottom: 8px;
    }

    h3{
      color: var(--color-dark-gray);
    }

    i{
      position: absolute;
      right: 10px;
      top: 34.56%;
      color: var(--color-red);

      &:hover{
        cursor: pointer;
      }
    }

  @media screen and (max-width: 600px) {
    display: none;
}

`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 29px;
  color: var(--color-red);

  .logoCart{
      position: relative;
      img{
        position: absolute;
        left: 16px;
        top: -8px;
      }
    }

  @media screen and (max-width: 600px) {
    display: none;
}
`