import styled from "styled-components";

export const ContentContainer = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0px 66px;
  display: flex;
  gap: 112px;
`

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 662px;
  gap: 11px;
`

export const HamburguerPhoto = styled.img`
  margin-top: 65px;
`

export const NameProduct = styled.h1`
  color: var(--color-dark-gray);
  font-size: 28px;
  font-weight: 600;
  height: 98px;
  display: flex;
  align-items: center;
  margin-top: 10px;

`

export const DescriptionProduct = styled.p`
  color: var(--color-dark-gray);
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
`

export const ProductValue = styled.div`
  display: flex;
  gap: 17px;
  margin-top: 20px;
`

export const VlPrice = styled.h1`
  font-size: 32px;
  font-weight: 400;
  color: var(--color-second-orange);
`

export const VlDiscount = styled.h1`
  font-size: 32px;
  font-weight: 400;
  color: var(--color-dark-gray);
  position: relative;

  &::before{
    content: " ";
    display: block;
    height: 2px;
    width: 122px;
    position: absolute;
    top: 50%;
    background-color: var(--color-dark-gray);
  }
`

export const IngredientConteiner = styled.section`
  display: flex;
  /* align-items: center; */
  max-width:439px ;
  padding: 32px;
  border: 1px solid var(--color-light-gray);
  margin-top: 24px;
  border-radius: 8px;
`

export const IngredientContent = styled.div`
  max-width: 375px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`

export const HeaderIngredient = styled.div`
  background-color: rgba(253, 215, 14, 0.2);
  display: flex;
  flex-direction: column;
  width: 375px;
  padding: 8px 16px;
  gap: 8px;
`

export const TextHeaderIngredient = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-dark-gray);
`

export const ParagraphHeaderIngredient = styled.p`
  font-size: 12px;
  color: #E49700;
`

export const FooterIngredient = styled.div`
  background-color: rgba(253, 215, 14, 0.2);
  width: 375px;
  height: 50px;
  margin-top: 9px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`

export const TextFooterIngredient = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-dark-gray);
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
`

export const QuantityProduct = styled.div`
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  border: 1px solid var(--color-orange);
  border-radius: 4px;
  padding: 15px 13px;
`

export const IconQuantityProduct = styled.img`
  cursor: pointer;
`

export const AmountProduct = styled.p`
  font-size: 14px;
  color: var(--color-dark-gray);
`