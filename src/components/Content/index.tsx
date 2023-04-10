import React, { useEffect, useState } from "react";
import * as S from "./Content.styled";

import hamburguerPhoto from "../../assets/hamburgerPhoto.svg";

import { Ingredient } from "../Ingredient";

import less from "../../assets/less.svg";
import lessGray from "../../assets/lessGray.svg";
import more from "../../assets/more.svg";
import { Button } from "../Button";

import {  IProduct } from "../../utils/interface/itemInterface";
import { useDispatch } from "react-redux";
import { setHasItem, showItemsCart } from "../../features/slices/cartSlice";

interface IContent {
  item: IProduct;
}

export const Content: React.FC<IContent> = ({ item }) => {
  const [amount, setAmout] = useState<number>(1);
  const [ingredientsCounter, setIngredientsCounter] = useState<number>(0);
  const [isIngredientsFull, setIsIngredientsFull] = useState<boolean>(false);

  const dispatch = useDispatch()
  const ingredients = item.ingredients.filter((item) => item.type === "number");
  const ingredientsBoolean = item.ingredients.filter((item) => item.type === "boolean");

  const addCounter = () => {
    setAmout((amount: number) => amount + 1);
  };

  const decreaseCounter = () => {
    setAmout((amount: number) => amount - 1);
  };

  const handleClick = () => {
    dispatch(showItemsCart(true))
    dispatch(setHasItem(true))
    setTimeout(() => {
      dispatch(showItemsCart(false))
    }, 7000) 
  }

  useEffect(() => {
    if(ingredientsCounter >= 8){
      setIsIngredientsFull(true)
    } else {
      setIsIngredientsFull(false)
    }
  }, [ingredientsCounter])

  return (
    <S.ContentContainer>
      <S.ProductContent>
        <S.HamburguerPhoto src={hamburguerPhoto} />
        <S.NameProduct>{item.nm_product}</S.NameProduct>
        <S.DescriptionProduct>{item.description}</S.DescriptionProduct>

        <S.ProductValue>
          <S.VlPrice>R${item.vl_discount}</S.VlPrice>
          <S.VlDiscount>R${item.vl_price}</S.VlDiscount>
        </S.ProductValue>
      </S.ProductContent>

      <S.IngredientConteiner>
        <S.IngredientContent>
          {ingredients.map((item) => {
            return (
              <>
                <S.HeaderIngredient>
                  <S.TextHeaderIngredient>
                    Adicionar Ingredientes
                  </S.TextHeaderIngredient>

                  <S.ParagraphHeaderIngredient>
                    Até {item.max_itens} ingredientes.
                  </S.ParagraphHeaderIngredient>
                </S.HeaderIngredient>

                {item.itens.map((item) => (
                  <Ingredient
                    key={item.id}
                    ingredientName={item.nm_item}
                    value={item.vl_item}
                    amount={0}
                    setIngredientsCounter={setIngredientsCounter}
                    isIngredientsFull={isIngredientsFull}
                    id={item.id}
                  />
                ))}
              </>
            );
          })}

          {ingredientsBoolean.map((item) => {
            return (
              <>
                <S.FooterIngredient>
                  <S.TextFooterIngredient>
                    {item.group}
                  </S.TextFooterIngredient>
                </S.FooterIngredient>

                <S.InputRadioContainer>
                  <S.InputRadioText>Sim</S.InputRadioText>
                  <S.InputRadio type="radio" name="check" />
                </S.InputRadioContainer>

                <S.InputRadioContainer>
                  <S.InputRadioText>Não</S.InputRadioText>
                  <S.InputRadio type="radio" name="check" />
                </S.InputRadioContainer>
              </>
            );
          })}

          <S.ButtonContainer>
            <S.QuantityProduct>
              {amount === 0 ? (
                <S.IconQuantityProduct
                  src={lessGray}
                  style={{ cursor: "not-allowed" }}
                  alt="icone de menos "
                />
              ) : (
                <S.IconQuantityProduct
                  src={less}
                  onClick={decreaseCounter}
                  alt="icone de menos "
                />
              )}
              <S.AmountProduct>{amount}</S.AmountProduct>
              <S.IconQuantityProduct
                src={more}
                onClick={addCounter}
                alt="icone de mais "
              />
            </S.QuantityProduct>
            <Button onClick={handleClick} text="Adicionar"/>
          </S.ButtonContainer>
        </S.IngredientContent>
      </S.IngredientConteiner>
    </S.ContentContainer>
  );
};
