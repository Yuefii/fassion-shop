import LayoutContainer from "@/components/Layout";
import { product } from "@/constants/product";
import ProductDetails from "../../../components/products/ProductDetails";
import ListRating from "@/components/products/ListRating";

const Page = () => {
  return (
    <main className="p-8">
      <LayoutContainer>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </LayoutContainer>
    </main>
  );
};

export default Page;
