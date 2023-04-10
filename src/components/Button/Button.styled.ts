import styled from "styled-components";

export const ButtonOrange = styled.button`
  width: 219px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-orange);
  border: none;
  border-radius: 4px;
  color: var(--color-white);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: .5s;

  &:hover{
    transform: scale(1.02);
    background-color: #ee9a4c;
    transition: .5s;
  }
  
  @media screen and (max-width: 600px) {
    width: 195px;
  }
`