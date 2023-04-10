import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IIngredientQuantity {
  name: string;
  quantity: number | string;
  id: number;
}
interface CounterState {
  clickButton: boolean;
  hasItem: boolean;
  ingredientsQuantity: IIngredientQuantity[];
}

const initialState: CounterState = {
  clickButton: false,
  hasItem: false,
  ingredientsQuantity: []
};

const CartReducer = createSlice({
  name: "CartReducer",
  initialState,
  reducers: {
    showItemsCart(state, action: PayloadAction<boolean>) {
      state.clickButton = action.payload;
    },
    setHasItem(state, action: PayloadAction<boolean>) {
      state.hasItem = action.payload;
    },
    setIngredientsQuantity: (
      state,
      action: PayloadAction<IIngredientQuantity>
    ) => {
      const exists = state.ingredientsQuantity.findIndex(
        (item) => item.id === action.payload.id
      );
      if (exists !== -1) {
        state.ingredientsQuantity[exists] = action.payload;
      } else {
        state.ingredientsQuantity = [
          ...state.ingredientsQuantity,
          action.payload,
        ];
      }
    },
  },
});

export const { setIngredientsQuantity, showItemsCart, setHasItem } = CartReducer.actions;
export default CartReducer.reducer;
