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
  
  @media screen and (max-width: 600px) {
    width: 195px;
  }
`