import Link from "next/link";
import LayoutContainer from "../Layout";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full bg-gray-300 z-30 shadow-sm">
      <div>
        <LayoutContainer>
          <div className="flex justify-between items-center gap-3 md:gap-0">
            <Link href="/">Fassion Shop</Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>Cart Count</div>
              <div>User Menuu</div>
            </div>
          </div>
        </LayoutContainer>
      </div>
    </div>
  );
};

export default Navbar;
