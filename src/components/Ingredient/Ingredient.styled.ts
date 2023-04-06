import styled from "styled-components";

export const IngredientConteiner = styled.div`
  width: 359px;
  display: flex;
  padding: 8px;
  flex-direction: column;
  gap: 5px;
  border-bottom: 1px solid #E8A634;
`

export const TitleIngredient = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: var(--color-dark-gray);
  margin-top: 17px;
`

export const QuantityIngredientContainer = styled.div`
  display: flex;
  justify-content: end;
`

export const QuantityIngredientContent = styled.div`
  width: 89px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  border: 1px solid var(--color-orange);
  border-radius: 5px;
  padding: 9px;
`

export const AmountIngredient = styled.p`
  font-size: 14px;
  color: var(--color-dark-gray);
`

export const ValueIngredient = styled.h3`
  color: var(--color-orange);
  font-size: 14px;
  margin-bottom: 16px;
`

export const IconQuantityIngredient = styled.img`
  cursor: pointer;
`