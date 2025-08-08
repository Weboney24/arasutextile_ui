import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import DefaultHeader from "../components/DefaultHeader";
import CustomHero from "../components/CustomHero";
import { PRODUCT_COLLECTIONS_CATEGORIES, PRODUCT_COLLECTIONS_SUB_CATEGORIES, PRODUCTS, GET_PRODUCT_IMAGE, GET_SUBCATEGORY_BY_CATEGORY } from "../helper/datahelper";
import { IMAGE_HELPER } from "../helper/imagehelper";
import { Card, Avatar } from "antd";

const CollectionLanding = () => {
  const location = useLocation();
  const cat_id = location.state?.cat_id;

  const currentCategory = PRODUCT_COLLECTIONS_CATEGORIES.find((cat) => cat.category_name === cat_id);

  const filteredSubCategories = PRODUCT_COLLECTIONS_SUB_CATEGORIES.filter((sub) => sub.category_id === cat_id);

  const [activeSubCategory, setActiveSubCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentId, setCurrentId] = useState(cat_id);

  useEffect(() => {
    setActiveSubCategory("");
  }, [cat_id]);

  const mainProduct = PRODUCTS.find((prod) => {
    const matchedSub = PRODUCT_COLLECTIONS_SUB_CATEGORIES.find((sub) => sub.sub_category_id === prod.sub_category_id);
    return matchedSub?.category_id === cat_id;
  });

  const selectedProduct = activeSubCategory ? PRODUCTS.find((prod) => prod.sub_category_id?.toLowerCase() === activeSubCategory.toLowerCase()) : null;

  return (
    <div className="mb-40">
      {/* Hero Image */}
      <CustomHero title={currentCategory?.name || "Product Vault"} imagurl={currentCategory?.heroimage || IMAGE_HELPER.INSIDE_HERO4} content={"Explore our beautiful collection"} />

      <div className="flex w-[90%] mx-auto gap-10 mt-10">
        {/* Sidebar */}
        <div className="w-[250px] hidden md:block sticky top-32 h-fit">
          <h2 className="text-xl font-semibold !text-primary mb-4 border-b border-white pb-2">Collections</h2>
          <div className="flex flex-col gap-2 !text-primary">
            {PRODUCT_COLLECTIONS_CATEGORIES.map((res2, index) => (
              <Link key={index} onMouseEnter={() => setCurrentId(res2.category_name)} to="/collections" state={{ cat_id: res2.category_name }}>
                <Card className={`group w-full bg-primary !rounded-lg transition-all duration-200  border border-white/30 hover:!bg-primary ${res2.category_name === cat_id ? "!bg-primary scale-[1.02]" : ""}`}>
                  <Card.Meta avatar={<Avatar className="!rounded-none  !-mt-[10px]" src={GET_PRODUCT_IMAGE(GET_SUBCATEGORY_BY_CATEGORY(res2.category_name), true)} />} description={<div className={`!font-primary font-medium transition-colors duration-200 ${res2.category_name === cat_id ? "!text-white " : "text-primary group-hover:!text-white"}`}>{res2.name}</div>} />
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4 !text-primary">
            {/* Subcategory Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              {filteredSubCategories.map((sub, index) => (
                <button key={index} onClick={() => setActiveSubCategory(sub.sub_category_id)} className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border-2 ${activeSubCategory === sub.sub_category_id ? "bg-primary !text-white border-primary shadow-lg scale-105" : "bg-white text-primary border-primary hover:bg-primary hover:!text-white"}`}>
                  {sub.name}
                </button>
              ))}
            </div>

            {/* Static category content */}
            <p className="text-[17px] sm:text-[18px] leading-relaxed text-gray-700 text-justify">{activeSubCategory && selectedProduct?.description ? selectedProduct.description : currentCategory?.content ?? ""}</p>
          </div>

          {/* Right Side - Image Display */}
          <div className="w-full flex justify-center !mt-[28px]">
            {selectedProduct ? (
              <div className="grid grid-cols-2 gap-4 w-full">
                {selectedProduct?.images?.map((img, index) => (
                  <div key={index} className="relative group w-full h-[200px] overflow-hidden rounded-xl border border-white/30 shadow-lg transform transition-transform duration-500 hover:scale-[1.03] hover:rotate-[0.5deg]">
                    <img src={img} alt={`Product Image ${index + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <div onClick={() => setSelectedImage(img)} className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer bg-white/80 p-3 rounded-full shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            ) : mainProduct?.imageurl ? (
              // SINGLE LARGE IMAGE VIEW
              <div className="relative w-full md:w-[100%] h-[400px] md:h-[500px] overflow-hidden rounded-2xl border border-white/30 shadow-xl">
                <img src={mainProduct.imageurl[0]} alt="Main Product Image" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="text-gray-400 text-center w-full">No product images available.</div>
            )}
          </div>
        </div>
      </div>

      {/* Full Image Modal */}
      {selectedImage && (
        <div onClick={() => setSelectedImage(null)} className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center cursor-zoom-out">
          <img src={selectedImage} alt="Full View" className="max-w-full max-h-full rounded-lg shadow-xl" />
        </div>
      )}
    </div>
  );
};

export default CollectionLanding;
