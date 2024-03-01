import Link from "next/link";
import LayoutContainer from "../Layout";
import FooterList from "./FooterList";
import { FaGithub, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-200 text-sm mt-16">
      <LayoutContainer>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h2 className="text-base font-semibold mb-2">Shop Categories</h2>
            <Link href="#">T-shirt</Link>
            <Link href="#">Trousers</Link>
            <Link href="#">Hoodies</Link>
            <Link href="#">Shoes</Link>
          </FooterList>
          <FooterList>
            <h2 className="text-base font-semibold mb-2">Customer Services</h2>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shiping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-base font-semibold mb-2">About Us</h2>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              necessitatibus delectus aliquam incidunt quam doloribus, dolore
              tempora explicabo, quas rerum, eveniet at nostrum quos error illo
              optio perspiciatis enim cum?
            </p>
            <p>
              &copy; {new Date().getFullYear()} Fassion Shop. All rights
              reversed.
            </p>
          </div>
          <FooterList>
            <h2 className="text-base font-semibold mb-2">Follow Us</h2>
            <div className="flex gap-2">
              <Link href="#">
                <FaGithub size={24} />
              </Link>
              <Link href="#">
                <FaInstagram size={24} />
              </Link>
              <Link href="#">
                <FaTiktok size={24} />
              </Link>
              <Link href="#">
                <FaTwitter size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </LayoutContainer>
    </footer>
  );
};

export default Footer;
