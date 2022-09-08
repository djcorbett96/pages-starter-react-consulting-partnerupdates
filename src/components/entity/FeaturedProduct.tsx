import React from "react";
import { Image, Link } from "@yext/pages/components";
import { ProductProfile } from "src/types/entities";
import "src/styles/FeaturedProduct.css";

interface FeaturedProductProps {
  title: string;
  products: ProductProfile[];
}

export const fields = [
  "c_featuredProducts.title",
  "c_featuredProducts.products.name",
  "c_featuredProducts.products.richTextDescription",
  "c_featuredProducts.products.primaryPhoto",
  "c_featuredProducts.products.c_primaryCTA"
];

const FeaturedProduct = (props: FeaturedProductProps) => {
  const { title, products } = props;
  if (!products.length) return null;

  return (
    <div className="FeaturedProduct">
      <div className="container">
        <div className="FeaturedProduct-heading pb-2 m-4 Heading Heading--head">
          {title}
        </div>
        <ul className="flex FeaturedProduct-content gap-6">
          {products?.map((item, i) => (
            <div key={i} className="FeaturedProduct-card mb-8">
              <div className="flex justify-center">
                {item.primaryPhoto && (<Image className="FeaturedProduct-image" image={item.primaryPhoto.image}/>)}
              </div>
              <div className="mx-8 mt-8 FeaturedProduct-title">
                {item.name}
              </div>
              <div className="mx-8 mt-4 mb-8 FeaturedProduct-description">
                {item.richTextDescription}
              </div>
              <div className="mx-4 FeaturedProduct-ctaWrapper">
                {item.c_primaryCTA && (<Link className="m-4 Button Button--secondary" cta={item.c_primaryCTA} />)}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturedProduct;