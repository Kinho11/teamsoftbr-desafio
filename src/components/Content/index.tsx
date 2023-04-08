import React, { useState } from 'react'
import {ContentContainer, HamburguerPhoto, NameProduct, ProductContent, DescriptionProduct, ProductValue, VlPrice,VlDiscount, IngredientConteiner,IngredientContent,HeaderIngredient,TextHeaderIngredient, ParagraphHeaderIngredient,FooterIngredient,TextFooterIngredient, ButtonContainer, QuantityProduct, IconQuantityProduct,AmountProduct,InputRadioContainer,InputRadioText, InputRadio } from "./Content.styled"

import hamburguerPhoto from "../../assets/hamburgerPhoto.svg"

import { Ingredient } from '../Ingredient'

import less from "../../assets/less.svg"
import lessGray from "../../assets/lessGray.svg"
import more from "../../assets/more.svg"
import { Button } from '../Button'

export const Content: React.FC = () => {
  const [amountt, setAmout] = useState<any>(1)


  const adicionar = () => {
    setAmout((amountt: any) => amountt + 1)
  }

  const diminuir = () => {
    setAmout((amountt: any) => amountt - 1)
  }

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

          <Ingredient ingredientName='Queijo cheddar' value={4.99} amount={2}/>

          <Ingredient ingredientName='Cebola crispy' value={1.50} amount={0}/>

          <Ingredient ingredientName='Molho cheddar' value={3.50} amount={0}/>

          <Ingredient ingredientName='Molho de picanha' value={3.50} amount={1} />

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
              {amountt === 0 ? <IconQuantityProduct src={lessGray} style={{cursor: 'not-allowed'}}  alt='icone de menos '/> : <IconQuantityProduct src={less} onClick={diminuir} alt='icone de menos '/> }
              <AmountProduct>{amountt}</AmountProduct>
              <IconQuantityProduct src={more} onClick={adicionar} alt='icone de mais '/>
            </QuantityProduct>
            <Button text='Adicionar'/>
          </ButtonContainer>

        </IngredientContent>
      </IngredientConteiner>

    </ContentContainer>
  )
}
