import "./Breadcrumb.css";
import breadcrumbArrow from "../assets/breadcrum_arrow.png";

const Breadcrumb = ({ product }) => {
  const capitalizeCategory = product.category[0].toUpperCase() + product.category.slice(1).toLowerCase();
  return (
    <div className="breadcrumb">
      HOME <img src={breadcrumbArrow} /> SHOP <img src={breadcrumbArrow} />{" "}
      {capitalizeCategory} <img src={breadcrumbArrow} /> {product.name}
    </div>
  );
};

export default Breadcrumb;
