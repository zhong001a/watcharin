
import ProductItem from "../component/ProductItem";
import { getProducts } from "../server/actions";

const page = async() => {
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

export default page

