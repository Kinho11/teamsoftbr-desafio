import React from 'react'
import {ContentContainer, HamburguerPhoto, NameProduct, ProductContent, DescriptionProduct, ProductValue, VlPrice,VlDiscount, IngredientConteiner,IngredientContent,HeaderIngredient,TextHeaderIngredient, ParagraphHeaderIngredient,FooterIngredient,TextFooterIngredient } from "./Content.styled"

import hamburguerPhoto from "../../assets/hamburgerPhoto.svg"

import { Ingredient } from '../Ingredient'



export const Content: React.FC = () => {
  return (
    <ContentContainer>

      <ProductContent>
        <HamburguerPhoto src={hamburguerPhoto}/>

        <NameProduct>Oferta Picanha Cheddar Bacon</NameProduct>

        <DescriptionProduct>Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar 
        e pão mix de gergelim</DescriptionProduct>

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

        </IngredientContent>
      </IngredientConteiner>

    </ContentContainer>
  )
}
