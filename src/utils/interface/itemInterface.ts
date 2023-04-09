export interface IProduct {
  id: number,
  createdAt: string,
  nm_product: string,
  description: string,
  vl_price: number,
  vl_discount: number,
  url_image: string,
  ingredients:  IIngredient[]
}

export interface IIngredient {
  group: string,
  max_itens: number,
  type: string,
  itens: IItens[]
}

export interface IItens {
  id: number,
  nm_item: string,
  vl_item: number
}