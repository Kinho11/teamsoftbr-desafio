import React, { useState } from "react";
import * as S from "./Ingredient.styled";

import less from "../../assets/less.svg";
import lessGray from "../../assets/lessGray.svg";
import more from "../../assets/more.svg";

interface Iingredient {
  ingredientName: string;
  value: number;
  amount: number;
}

export const Ingredient: React.FC<Iingredient> = ({
  ingredientName,
  value,
  amount,
}) => {
  const [valueAdd, setvalueAdd] = useState<number>(amount);

  const adicionar = () => {
    setvalueAdd((valueAdd: number) => valueAdd + 1);
    // dispatch(increment())
  };

  const diminuir = () => {
    if (valueAdd > 0) {
      setvalueAdd((valueAdd: number) => valueAdd - 1);
      // dispatch(decrement())
    }
  };

  return (
    <S.IngredientConteiner>
      <S.TitleIngredient>{ingredientName}</S.TitleIngredient>

      <S.QuantityIngredientContainer>
        <S.QuantityIngredientContent>
          <S.IconQuantityIngredientContainer
            cursor={valueAdd === 0}
            onClick={diminuir}
          >
            <S.IconQuantityIngredient
              src={valueAdd === 0 ? lessGray : less}
              alt="icone de menos cinza"
            />
          </S.IconQuantityIngredientContainer>

          <S.AmountIngredient>{valueAdd}</S.AmountIngredient>
          <S.IconQuantityIngredientContainer onClick={adicionar}>
            <S.IconQuantityIngredient src={more} alt="icone de mais" />{" "}
          </S.IconQuantityIngredientContainer>
        </S.QuantityIngredientContent>
      </S.QuantityIngredientContainer>

      <S.ValueIngredient>
        +
        {value?.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </S.ValueIngredient>
    </S.IngredientConteiner>
  );
};
