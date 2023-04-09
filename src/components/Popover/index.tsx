import React from 'react'

import { PopoverContainer, TitlePopover, IngredientContainerPopover, NameProductPopover,TextIngredientPopover, ListIngredientPopover, IngredientPopover } from './Popover.styled'

interface IClick {
  open?: any
}

export const Popover: React.FC<IClick> = ({open}) => {
  return (
    <>
      {open ? <PopoverContainer>
        <TitlePopover>Adicionado com Sucesso</TitlePopover>
        <IngredientContainerPopover>
          <NameProductPopover>Oferta Cheddar Bacon</NameProductPopover>
          <TextIngredientPopover>Ingredientes</TextIngredientPopover>
          <ListIngredientPopover>
            <IngredientPopover>1 Carne 250gr</IngredientPopover>
            <IngredientPopover>2 Queijo Cheddar</IngredientPopover>
            <IngredientPopover>1 Bacon</IngredientPopover>
            <IngredientPopover>Molho Especial</IngredientPopover>
          </ListIngredientPopover>
        </IngredientContainerPopover>
      </PopoverContainer> : ""  }
      
    
    </>
  )
}
