import React from 'react'
import { GET_PRODUCT_IMAGE, GET_SUBCATEGORY_BY_CATEGORY, PRODUCT_COLLECTIONS_CATEGORIES } from '../helper/datahelper';
import { Link } from 'react-router-dom';
import { Avatar, Card } from 'antd';

const Products = () => {
  return (
    <div className="px-20 py-20 !mb-[120px]">
      <div className="grid grid-cols-3 items-center justify-center gap-10">
        {PRODUCT_COLLECTIONS_CATEGORIES.map((res2, catIndex) => (
          <div key={catIndex} className="mb-2">
            <Link to="/collections" state={{ cat_id: res2.category_name }}>
              <Card className="hover:bg-primary !font-primary font-semibold !text-primary">
                <Card.Meta avatar={<Avatar src={GET_PRODUCT_IMAGE(GET_SUBCATEGORY_BY_CATEGORY(res2.category_name), true)} />} description={<span className="font-primary">{res2.name}</span>} />
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products