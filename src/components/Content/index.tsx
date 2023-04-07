import React from 'react'
import {ContentContainer, HamburguerPhoto, NameProduct, ProductContent, DescriptionProduct, ProductValue, VlPrice,VlDiscount, IngredientConteiner,IngredientContent,HeaderIngredient,TextHeaderIngredient, ParagraphHeaderIngredient,FooterIngredient,TextFooterIngredient, ButtonContainer, QuantityProduct, IconQuantityProduct,AmountProduct,InputRadioContainer,InputRadioText, InputRadio } from "./Content.styled"

import hamburguerPhoto from "../../assets/hamburgerPhoto.svg"

import { Ingredient } from '../Ingredient'

import less from "../../assets/less.svg"
import more from "../../assets/more.svg"
import { Button } from '../Button'

export const Content: React.FC = () => {
  return (
    <ContentContainer>

      <ProductContent>
        <HamburguerPhoto src={hamburguerPhoto}/>

        <NameProduct>Oferta Picanha Cheddar Bacon</NameProduct>

        <DescriptionProduct></DescriptionProduct>

        <ProductValue>
          <VlPrice>R$31,99</VlPrice>
          <VlDiscount>R$34,95</VlDiscount>
        </ProductValue>
      </ProductContent>

      <IngredientConteiner>
        <IngredientContent>

          <HeaderIngredient>

            <TextHeaderIngredient>Adicionar Ingredientes</TextHeaderIngredient>

            <ParagraphHeaderIngredient>Até 8 ingredientes.</ParagraphHeaderIngredient>

          </HeaderIngredient>

          <Ingredient ingredientName='Queijo cheddar' value='+ R$4,99' amount='2'/>

          <Ingredient ingredientName='Cebola crispy' value='+ R$1,50' amount='0'/>

          <Ingredient ingredientName='Molho cheddar' value='+ R$3,50' amount='0'/>

          <Ingredient ingredientName='Molho de picanha' value='+ R$3,50' amount='1' />

          <FooterIngredient>
            <TextFooterIngredient>Precisa de Talher?</TextFooterIngredient>


          </FooterIngredient>

          <InputRadioContainer>
            <InputRadioText>Sim</InputRadioText>
            <InputRadio type="radio" name='check' />
          </InputRadioContainer>

          <InputRadioContainer>
            <InputRadioText>Não</InputRadioText>
            <InputRadio type="radio" name='check' />
          </InputRadioContainer>

          <ButtonContainer>
            <QuantityProduct>
              <IconQuantityProduct src={less} alt='icone de menos '/>
              <AmountProduct>1</AmountProduct>
              <IconQuantityProduct src={more} alt='icone de mais '/>
            </QuantityProduct>
            <Button text='Adicionar'/>
          </ButtonContainer>

        </IngredientContent>
      </IngredientConteiner>

    </ContentContainer>
  )
}
