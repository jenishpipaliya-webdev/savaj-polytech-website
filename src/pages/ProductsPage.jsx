import React from 'react';
import Pageproduct from '../components/PageProduct';
import ProductHero from '../components/ProductHero';


const ProductsPage = () => {
  return (
    <div className="product-page-wrapper">
      {/* Agar Hero Banner add karna ho toh yahan kar sakte hain */}
      <ProductHero/>
      {/* Dynamic Interactive Products Section */}
     <Pageproduct/>
      
    </div>
  );
};

export default ProductsPage;