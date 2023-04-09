import React, { useState } from "react";
import * as S from "./Content.styled";

import hamburguerPhoto from "../../assets/hamburgerPhoto.svg";

import { Ingredient } from "../Ingredient";

import less from "../../assets/less.svg";
import lessGray from "../../assets/lessGray.svg";
import more from "../../assets/more.svg";
import { Button } from "../Button";

import {  IProduct } from "../../utils/interface/itemInterface";

interface IContent {
  item: IProduct;
}

export const Content: React.FC<IContent> = ({ item }) => {
  const [amount, setAmout] = useState<number>(1);

  const ingredients = item.ingredients.filter((item) => item.type === "number");
  const ingredientsBoolean = item.ingredients.filter((item) => item.type === "boolean");

  const adicionar = () => {
    setAmout((amount: number) => amount + 1);
  };

  const diminuir = () => {
    setAmout((amount: number) => amount - 1);
  };

  return (
    <S.ContentContainer>
      <S.ProductContent>
        <S.HamburguerPhoto src={hamburguerPhoto} />
        <S.NameProduct>{item.nm_product}</S.NameProduct>
        <S.DescriptionProduct>{item.description}</S.DescriptionProduct>

        <S.ProductValue>
          <S.VlPrice>R${item.vl_price}</S.VlPrice>
          <S.VlDiscount>R${item.vl_discount}</S.VlDiscount>
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
                  onClick={diminuir}
                  alt="icone de menos "
                />
              )}
              <S.AmountProduct>{amount}</S.AmountProduct>
              <S.IconQuantityProduct
                src={more}
                onClick={adicionar}
                alt="icone de mais "
              />
            </S.QuantityProduct>
            <Button text="Adicionar" />
          </S.ButtonContainer>
        </S.IngredientContent>
      </S.IngredientConteiner>
    </S.ContentContainer>
  );
};
