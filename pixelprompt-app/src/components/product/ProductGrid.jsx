import { products } from "../../data/mockData";
import ProductCard from "./ProductCard";
import Reveal from "../shared/Reveal";

export default function ProductGrid() {
  return (
    <Reveal
      as="div"
      stagger={0.08}
      className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Reveal>
  );
}
