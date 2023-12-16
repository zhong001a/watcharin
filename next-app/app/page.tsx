import { getProducts } from "./server/actions";
import ProductItem from "./component/ProductItem";
export default async function Home() {
  const products = await getProducts();

  
  return (
    <div>
      {products.map((product: any, index: number) => (
        <div key={index}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
}
