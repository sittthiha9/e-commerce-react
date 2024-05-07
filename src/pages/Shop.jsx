import Hero from "../conponents/hero/Hero";
import NewCollections from "../conponents/new collections/NewCollections";
import Newsletter from "../conponents/newsletters/Newsletter";
import Offers from "../conponents/offers/Offers";
import Popular from "../conponents/popular/Popular";

const Shop = () => {
  return <div> 
    <Hero/>
    <Popular/>
    <Offers/>
    <NewCollections/>
    <Newsletter/>
  </div>;
};

export default Shop;
