import React, { useState } from 'react'
import { IngredientConteiner, TitleIngredient, QuantityIngredientContainer, QuantityIngredientContent, AmountIngredient, ValueIngredient, IconQuantityIngredient } from './Ingredient.styled'

import less from "../../assets/less.svg"
import lessGray from "../../assets/lessGray.svg"
import more from "../../assets/more.svg"

interface Iingredient {
  ingredientName?: string,
  value?: number,
  amount?: number
}

export const Ingredient: React.FC<Iingredient> = ({ingredientName, value, amount}) => {

  const [valueAdd, setvalueAdd] = useState<any>(amount)

  const adicionar = () => {
    setvalueAdd((valueAdd: any) => valueAdd + 1)
  }

  const diminuir = () => {
    setvalueAdd((valueAdd: any) => valueAdd - 1)
  }



  return (
    <IngredientConteiner>
      <TitleIngredient>{ingredientName}</TitleIngredient>

      <QuantityIngredientContainer>
        <QuantityIngredientContent>
          {valueAdd === 0 ? <IconQuantityIngredient src={lessGray} style={{cursor: 'not-allowed'}} alt="icone de menos cinza" /> : <IconQuantityIngredient src={less} onClick={diminuir} alt="icone de menos" /> }
          <AmountIngredient>{valueAdd}</AmountIngredient>
          <IconQuantityIngredient src={more} alt="icone de mais" onClick={adicionar} />

        </QuantityIngredientContent>
      </QuantityIngredientContainer>

      <ValueIngredient>+ {value?.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}</ValueIngredient>
    </IngredientConteiner>
  )
}
