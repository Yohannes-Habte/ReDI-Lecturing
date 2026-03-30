import { products } from "../data/products";
import { card } from "../styles/global";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <section className="px-3">
      <h2>Product List</h2>

      <div className={card.cardsWrapper}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
