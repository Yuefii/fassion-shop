import LayoutContainer from "@/components/Layout"
import { product } from "@/constants/product"
import ProductDetails from "../../../components/products/ProductDetails"

const Page = () => {
  return (
    <main className="p-8">
        <LayoutContainer>
            <ProductDetails product={product}/>
        </LayoutContainer>
    </main>
  )
}

export default Page
