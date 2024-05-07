import { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../conponents/breadcrumb/Breadcrumb";
import ProductDisplay from "../conponents/productDisplay/ProductDisplay";
import DescriptionBox from "../conponents/descriptionBox/DescriptionBox";
import RelatedProducts from "../conponents/related products/RelatedProducts";
import { ShopContext } from "../contexts/ShopContext";

const Products = () => {
  const {allProduct} = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProduct.find((product) => {
    return product.id == productId;
  });

  return <div>
    <Breadcrumb product={product}/>
    <ProductDisplay product={product}/>
    <DescriptionBox/>
    <RelatedProducts/>
  </div>;
};

export default Products;
