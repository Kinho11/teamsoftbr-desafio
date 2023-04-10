import React, { useState } from "react";
import * as S from "./Ingredient.styled";
import { useDispatch } from "react-redux";
import { setIngredientsQuantity } from "../../features/slices/cartSlice";

interface Iingredient {
  ingredientName: string;
  value: number;
  amount: number;
  setIngredientsCounter: React.Dispatch<React.SetStateAction<number>>;
  isIngredientsFull: boolean;
  id: number;
}

export const Ingredient: React.FC<Iingredient> = ({
  ingredientName,
  value,
  amount,
  setIngredientsCounter,
  isIngredientsFull,
  id,
}) => {
  const dispatch = useDispatch();
  const [valueAdd, setvalueAdd] = useState<number>(amount);

  const addCounter = () => {
    if (!isIngredientsFull) {
      setvalueAdd((valueAdd: number) => valueAdd + 1);
      setIngredientsCounter(
        (ingredientsCounter: number) => ingredientsCounter + 1
      );
      dispatch(
        setIngredientsQuantity({
          name: ingredientName,
          quantity: valueAdd + 1,
          id,
        })
      );
    }
  };

  const decreaseCounter = () => {
    if (valueAdd > 0) {
      setvalueAdd((valueAdd: number) => valueAdd - 1);
      setIngredientsCounter(
        (ingredientsCounter: number) => ingredientsCounter - 1
      );
      dispatch(
        setIngredientsQuantity({
          name: ingredientName,
          quantity: valueAdd - 1,
          id,
        })
      );
    }
  };

  return (
    <S.IngredientConteiner>
      <S.TitleIngredient>{ingredientName}</S.TitleIngredient>

      <S.QuantityIngredientContainer>
        <S.QuantityIngredientContent>
          <S.IconQuantityIngredientContainer
            cursor={valueAdd === 0}
            onClick={decreaseCounter}
          >
            <S.IconQuantityIngredientLess
              isZero={valueAdd === 0}
              width="14"
              height="2"
              viewBox="0 0 14 2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H14V2H0V0Z" />
            </S.IconQuantityIngredientLess>
          </S.IconQuantityIngredientContainer>
          <S.AmountIngredient>{valueAdd}</S.AmountIngredient>

          <S.IconQuantityIngredientContainer onClick={addCounter}>
            <S.IconQuantityIngredientMore
              cursorMoreItems={isIngredientsFull}
              width="14"
              height="14"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.875 6.125V0H6.125V6.125H0V7.875H6.125V14H7.875V7.875H14V6.125H7.875Z" />
            </S.IconQuantityIngredientMore>
          </S.IconQuantityIngredientContainer>
        </S.QuantityIngredientContent>
      </S.QuantityIngredientContainer>

      <S.ValueIngredient>
        +{" "}
        {value?.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </S.ValueIngredient>
    </S.IngredientConteiner>
  );
};
