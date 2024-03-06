import LayoutContainer from "@/components/Layout";
import CartUser from "@/components/cart/CartUser";

const Page = () => {
  return (
    <div className="pt-8">
      <LayoutContainer>
        <CartUser />
      </LayoutContainer>
    </div>
  );
};

export default Page;
