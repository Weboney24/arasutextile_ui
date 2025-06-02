import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DefaultHeader from "../components/DefaultHeader";
import CustomHero from "../components/CustomHero";
import { PRODUCT_COLLECTIONS_CATEGORIES, PRODUCT_COLLECTIONS_SUB_CATEGORIES, PRODUCTS } from "../helper/datahelper";
import { IMAGE_HELPER } from "../helper/imagehelper";

const CollectionLanding = () => {
  const location = useLocation();
  const cat_id = location.state?.cat_id;

  const filter_product_names = PRODUCT_COLLECTIONS_CATEGORIES.find((cat) => cat.category_name === cat_id)?.name;

  const filteredSubCategories = PRODUCT_COLLECTIONS_SUB_CATEGORIES.filter((sub) => sub.category_id === cat_id);

  const [activeSubCategory, setActiveSubCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const selectedProduct = PRODUCTS.find((prod) => prod.sub_category_id.toLowerCase() === activeSubCategory.toLowerCase());

  // 🧠 Auto-select first sub-category when category changes
  useEffect(() => {
    if (filteredSubCategories.length > 0) {
      const firstSubCatId = filteredSubCategories[0].sub_category_id;
      setActiveSubCategory(firstSubCatId);
    }
  }, [cat_id, filteredSubCategories]);

  return (
    <div className="mb-40">
      <CustomHero title="Product Vault" imagurl={IMAGE_HELPER.INSIDE_HERO4} />
      <DefaultHeader title={filter_product_names} content="Explore our beautiful collection" />

      {/* Sub-category Tabs */}
      <div className="flex flex-wrap gap-4 px-4 sm:px-8 mb-8 justify-center">
        {filteredSubCategories.map((sub, index) => (
          <button
            key={index}
            onClick={() => setActiveSubCategory(sub.sub_category_id)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border-2 
              ${activeSubCategory === sub.sub_category_id ? "bg-primary !text-white border-primary shadow-lg scale-105" : "bg-white text-primary border-primary hover:bg-primary hover:!text-white"}`}
          >
            {sub.name}
          </button>
        ))}
      </div>

      {/* Product Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-8 ">
        {selectedProduct?.images?.length > 0 ? (
          selectedProduct.images.map((img, index) => (
            <div key={index} className="relative group w-full h-[300px] mx-auto overflow-hidden rounded-2xl shadow-lg border border-white/30 transform transition-transform duration-500 hover:scale-[1.03] hover:rotate-[0.5deg]">
              <img src={img} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* View Button */}
              <div onClick={() => setSelectedImage(img)} className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer bg-white/80 p-3 rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No images available</p>
        )}
      </div>

      {/* Modal View */}
      {selectedImage && (
        <div onClick={() => setSelectedImage(null)} className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center cursor-zoom-out">
          <img src={selectedImage} alt="Full View" className="max-w-full max-h-full rounded-lg shadow-xl" />
        </div>
      )}
    </div>
  );
};

export default CollectionLanding;
