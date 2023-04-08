import styled from "styled-components";

export const PopoverContainer = styled.div`
 position: absolute;
  top: 60px;
  right: 280px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  z-index: 100;
  &::before{
    content: "";
    width: 25px;
    height: 25px;
    display: block;
    position: absolute;
    top: -5px;
    left: 102px;
    background-color: var(--color-orange);
    border: 2px solid;
    border-color: transparent;
    transform: rotate(45deg);
    z-index: -1;
  }

  @media screen and (max-width: 600px) {
    display: none;
}
`

export const TitlePopover = styled.h1`
  border-radius: 4px 4px 0px 0px;
    font-size: 18px;
    white-space: nowrap;
    font-weight: 700;
    padding: 9px;
    background-color: var(--color-orange);
    color: var(--color-white);
`

export const IngredientContainerPopover = styled.div`
  background: #F8F8F8;
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  padding: 8px 11px;
  color: var(--color-dark-gray);

`

export const NameProductPopover = styled.h3`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #BC2E31;
`

export const TextIngredientPopover = styled.p`
  font-size: 14px;

`

export const ListIngredientPopover = styled.ul`
  margin-left: 25px;

`

export const IngredientPopover = styled.li`
  font-size: 14px;

`