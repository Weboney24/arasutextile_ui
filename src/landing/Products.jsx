import React from "react";
import { GET_PRODUCT_IMAGE, GET_SUBCATEGORY_BY_CATEGORY, PRODUCT_COLLECTIONS_CATEGORIES } from "../helper/datahelper";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="px-4 md:px-20 py-16 bg-white mb-[100px]">
      <h2 className="text-3xl !font-semibold text-center text-primary !mb-16">Our Collections</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {PRODUCT_COLLECTIONS_CATEGORIES.map((res2, catIndex) => (
          <Link key={catIndex} to="/collections" state={{ cat_id: res2.category_name }} className="relative group rounded overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            <img src={GET_PRODUCT_IMAGE(GET_SUBCATEGORY_BY_CATEGORY(res2.category_name), true)} alt={res2.name} className="w-full h-[250px] object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-end justify-center">
              <h3 className="text-white text-xl font-bold text-center px-2 py-5">{res2.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
