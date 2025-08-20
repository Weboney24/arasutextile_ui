import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import DefaultHeader from "../components/DefaultHeader";
import CustomHero from "../components/CustomHero";
import { PRODUCT_COLLECTIONS_CATEGORIES, PRODUCT_COLLECTIONS_SUB_CATEGORIES, PRODUCTS, GET_PRODUCT_IMAGE, GET_SUBCATEGORY_BY_CATEGORY } from "../helper/datahelper";
import { IMAGE_HELPER } from "../helper/imagehelper";
import { Card, Avatar, Image } from "antd";

const CollectionLanding = () => {
  const location = useLocation();
  const cat_id = location.state?.cat_id || "kitchen_set";

  const currentCategory = PRODUCT_COLLECTIONS_CATEGORIES.find((cat) => String(cat.category_name) === String(cat_id));

  const filteredSubCategories = PRODUCT_COLLECTIONS_SUB_CATEGORIES.filter((sub) => String(sub.category_id) === String(cat_id));

  const [activeSubCategory, setActiveSubCategory] = useState("");

  useEffect(() => {
    setActiveSubCategory("");
  }, [cat_id]);

  // Main category product
  const mainProduct = PRODUCTS.find((prod) => {
    const matchedSub = PRODUCT_COLLECTIONS_SUB_CATEGORIES.find((sub) => sub.sub_category_id === prod.sub_category_id);
    return matchedSub?.category_id === cat_id;
  });

  // Selected subcategory product
  const selectedProduct = activeSubCategory ? PRODUCTS.find((prod) => String(prod.sub_category_id).toLowerCase() === String(activeSubCategory).toLowerCase()) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cat_id]);

  return (
    <div className="mb-32">
      {/* Hero */}
      <CustomHero title={currentCategory?.name} imagurl={currentCategory?.heroimage} content={"Explore our beautiful collection"} />

      <div className="flex w-[90%] mx-auto gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-[20%] hidden lg:block sticky top-32 h-fit">
          <h2 className="text-2xl font-bold text-primary mb-5 border-b-2 pb-3">Collections</h2>
          <div className="flex flex-col gap-2 !text-primary">
            {PRODUCT_COLLECTIONS_CATEGORIES.map((res2, index) => (
              <Link key={index} to="/collections" state={{ cat_id: res2.category_name }}>
                <Card className={`group w-full bg-primary !rounded-lg transition-all duration-200 border border-white/30 hover:!bg-primary ${res2.category_name === cat_id ? "!bg-primary scale-[1.02]" : ""}`}>
                  <Card.Meta avatar={<Avatar className="!rounded-none !-mt-[10px]" src={GET_PRODUCT_IMAGE(GET_SUBCATEGORY_BY_CATEGORY(res2.category_name), true)} />} description={<div className={`!font-primary font-medium transition-colors duration-200 ${res2.category_name === cat_id ? "!text-white" : "text-primary group-hover:!text-white"}`}>{res2.name}</div>} />
                </Card>
              </Link>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <section className="w-full lg:w-[80%] flex flex-col gap-5">
          {/* Subcategory Buttons */}
          <div className="space-y-4 !text-primary">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {filteredSubCategories.map((sub, index) => (
                <button key={index} onClick={() => setActiveSubCategory(sub.sub_category_id)} className={`px-6 py-2 rounded font-medium transition-all duration-300 border-2 ${activeSubCategory === sub.sub_category_id ? "bg-primary !text-white border-primary shadow-lg scale-105" : "bg-white text-primary border-primary hover:bg-primary hover:!text-white"}`}>
                  {sub.name}
                </button>
              ))}
            </div>
          </div>

          {/* Category / Product Display */}
          <div className={`flex flex-col lg:flex-row items-center ${activeSubCategory && selectedProduct?.description ? "" : "gap-5 lg:gap-10"}`}>
            {/* Text Section */}
            <div className={`${activeSubCategory && selectedProduct?.description ? "" : "w-full lg:w-[50%]"}`}>
              {!activeSubCategory && (
                <>
                  <h1 className="text-2xl font-semibold text-primary">{currentCategory?.title ?? ""}</h1>
                  <p className="text-[17px] sm:text-[18px] leading-relaxed text-gray-700 text-justify">{currentCategory?.content ?? ""}</p>
                </>
              )}
            </div>

            {/* Image Section */}
            <div className={`flex items-center justify-between lg:px-3 lg:py-3 ${activeSubCategory && selectedProduct?.description ? "" : "w-full lg:w-[50%]"}`}>
              {selectedProduct?.images?.length ? (
                <div className="w-full">
                  <Image.PreviewGroup>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                      {selectedProduct.images.map((img, index) => (
                        <div key={index} className="relative group w-full h-[200px] overflow-hidden flex items-center justify-center rounded border border-white/30 shadow-lg transform transition-transform duration-500 hover:scale-[1.03] hover:rotate-[0.5deg]">
                          <Image src={img} alt={`Product ${index + 1}`} className="w-full h-full object-contain" preview={{ mask: "+ View" }} />
                        </div>
                      ))}
                    </div>
                  </Image.PreviewGroup>
                </div>
              ) : mainProduct?.imageurl?.length ? (
                <div className="relative w-full md:w-[100%] h-[400px] md:h-[500px] overflow-hidden rounded border border-white/30 shadow-xl">
                  <img src={mainProduct.imageurl[0]} alt="Main Product" className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="text-gray-400 text-center w-full">No product images available.</div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CollectionLanding;
