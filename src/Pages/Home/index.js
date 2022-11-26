import React from "react";
import Brand from "../../componet/Brand";
import CategoryCard from "../../componet/CategoryCard";
import Content from "../../componet/Content";
import ProductCard from "../../componet/ProductCard";
import Slider from "../../componet/Slider";
import CatMen from "../../asset/images/men.jpg";
import CatWomen from "../../asset/images/female.jpg";
import sport1 from "../../asset/images/s-1.jpg";
import sport2 from "../../asset/images/sport-3.jpg";
import sport3 from "../../asset/images/sport-4.jpg";
import c1 from "../../asset/images/casual-1.jpg";
import c2 from "../../asset/images/casual-2.jpg";
import c3 from "../../asset/images/casual-3.jpg";
import h1 from "../../asset/images/h-1.jpg";
import f1 from "../../asset/images/formal-1.png";
import brand1 from "../../asset/images/nike.jpg";
import brand2 from "../../asset/images/adidas.jpg";
import brand3 from "../../asset/images/gucci.jpg";
import brand4 from "../../asset/images/puma.jpg";
import brand5 from "../../asset/images/reebok.png";
import brand6 from "../../asset/images/merrell.jpg";
import Header from "../../componet/Header";
import { Outlet } from "react-router-dom";

export default function Home() {
  const categoryList = [
    {
      cat_id: 1,
      name: "Men",
      image: CatMen,
    },
    {
      cat_id: 2,
      name: "Women",
      image: CatWomen,
    },
  ];

  const productList = [
    {
      product_id: 1,
      product_name: "SportShoe",
      product_img: sport1,
      product_price: "$200",
    },
    {
      product_id: 2,
      product_name: "CasualShoe",
      product_img: c1,
      product_price: "$200",
    },
    {
      product_id: 3,
      product_name: "formalShoe",
      product_img: f1,
      product_price: "$200",
    },
    {
      product_id: 4,
      product_name: "Heels",
      product_img: h1,
      product_price: "$200",
    },
    {
      product_id: 5,
      product_name: "SportShoe",
      product_img: sport2,
      product_price: "$200",
    },
    {
      product_id: 6,
      product_name: "CasualShoe",
      product_img: c2,
      product_price: "$200",
    },
    {
      product_id: 7,
      product_name: "SportShoe",
      product_img: sport3,
      product_price: "$200",
    },
    {
      product_id: 8,
      product_name: "CasualShoe",
      product_img: c3,
      product_price: "$200",
    },
  ];

  const brandList = [
    {
      brand_id: 1,
      brand_name: "nike",
      brand_img: brand1,
    },
    {
      brand_id: 1,
      brand_name: "addidas",
      brand_img: brand2,
    },
    {
      brand_id: 1,
      brand_name: "gucci",
      brand_img: brand3,
    },
    {
      brand_id: 1,
      brand_name: "puma",
      brand_img: brand4,
    },
    {
      brand_id: 1,
      brand_name: "reebok",
      brand_img: brand5,
    },
    {
      brand_id: 1,
      brand_name: "merrell",
      brand_img: brand6,
    },
  ];

  return (
    <>
      <Content>
        <Slider />

        <div className="row row-col-1  g-4 m-2">
          {categoryList.map((i) => (
            <CategoryCard key={i.cat_id} name={i.name} image={i.image} />
          ))}
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4 m-2">
          {productList.map((p) => (
            <ProductCard
              key={p.product_id}
              name={p.product_name}
              image={p.product_img}
              price={p.product_price}
            />
          ))}
        </div>
        <div className="row m-5">
          {brandList.map((b) => (
            <Brand key={b.brand_id} image={b.brand_img} name={b.brand_name} />
          ))}
        </div>
      </Content>
    </>
  );
}
