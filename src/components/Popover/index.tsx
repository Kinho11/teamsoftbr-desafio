import React from "react";

import {
  PopoverContainer,
  TitlePopover,
  IngredientContainerPopover,
  NameProductPopover,
  TextIngredientPopover,
  ListIngredientPopover,
  IngredientPopover,
} from "./Popover.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const Popover: React.FC = () => {
  const { ingredientsQuantity } = useSelector(
    (state: RootState) => state.cart || {}
  );

  return (
    <>
      <PopoverContainer>
        <TitlePopover>Adicionado com Sucesso</TitlePopover>
        <IngredientContainerPopover>
          <NameProductPopover>Oferta Cheddar Bacon</NameProductPopover>
          <TextIngredientPopover>Ingredientes</TextIngredientPopover>
          <ListIngredientPopover>
            {ingredientsQuantity?.map((item) => (
              <IngredientPopover>{`${item.quantity} ${item.name}`}</IngredientPopover>
            ))}
          </ListIngredientPopover>
        </IngredientContainerPopover>
      </PopoverContainer>
    </>
  );
};
