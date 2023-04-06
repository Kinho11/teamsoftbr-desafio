import React from 'react'
import { IngredientConteiner, TitleIngredient, QuantityIngredientContainer, QuantityIngredientContent, AmountIngredient, ValueIngredient, IconQuantityIngredient } from './Ingredient.styled'

import less from "../../assets/less.svg"
import lessGray from "../../assets/lessGray.svg"
import more from "../../assets/more.svg"

interface Iingredient {
  ingredientName?: string,
  value?: string,
  amount?: string
}

export const Ingredient: React.FC<Iingredient> = ({ingredientName, value, amount}) => {


  return (
    <IngredientConteiner>
      <TitleIngredient>{ingredientName}</TitleIngredient>

      <QuantityIngredientContainer>
        <QuantityIngredientContent>
          {amount === "0" ? <IconQuantityIngredient src={lessGray} alt="icone de menos cinza" /> : <IconQuantityIngredient src={less} alt="icone de menos" /> }
          <AmountIngredient>{amount}</AmountIngredient>
          <IconQuantityIngredient src={more} alt="icone de mais" />

        </QuantityIngredientContent>
      </QuantityIngredientContainer>

      <ValueIngredient>{value}</ValueIngredient>
    </IngredientConteiner>
  )
}
