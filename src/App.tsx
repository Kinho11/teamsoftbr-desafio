import React, { useState } from 'react';
import {Header} from "./components/Header"
import { Content } from './components/Content';
import { useGetAllProductsQuery } from './features/api/Api';

function App() {
  const { data } = useGetAllProductsQuery();
  const [showItemsCart, setShowItemsCart] = useState<boolean>(false)
  const [showPopover, setShowPopover] = useState<boolean>(false)

  return (
   <>
    <Header showItemsCart={showItemsCart} showPopover={showPopover}/>
    {data?.map((product) => <Content item={product} setShowPopover={setShowPopover} setShowItemsCart={setShowItemsCart}/>)}
   </>
  );
}

export default App;
