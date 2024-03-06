import { products } from "@/constants/products";

import LayoutContainer from "@/components/Layout";
import ProductDetails from "@/components/products/ProductDetails";
import ListRating from "@/components/products/ListRating";

interface Params {
  productId?: string;
}

const Page = ({ params }: { params: Params }) => {
  const product = products.find((item) => item.id === params.productId);
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
