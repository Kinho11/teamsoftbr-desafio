import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { useGetAllProductsQuery } from "./features/api/Api";

function App() {
  const { data } = useGetAllProductsQuery();

  return (
    <>
      <Header />
      {data?.map((product) => (
        <Content item={product} />
      ))}
    </>
  );
}

export default App;
