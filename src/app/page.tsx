import Banner from "@/components/Banner";
import LayoutContainer from "@/components/Layout";
import Card from "@/components/products/Card";
import { products } from "@/constants/products";
import { truncate } from "@/utils/truncate";

const Pages = () => {
  return (
    <div className="p-8">
      <LayoutContainer>
        <div>
          <Banner />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((item, index) => (
            <div key={index}>
              <Card item={item} />
            </div>
          ))}
        </div>
      </LayoutContainer>
    </div>
  );
};

export default Pages;
