"use client";

import { useState } from "react";
import SectionComp from "../SectionComp";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const products: Product[] = [
    {
      id: 1,
      name: "Management Operation",
      description: "Description of Product 1",
      image: "images/tongkang.jpg", // Add the image URL for Product 1
    },
    {
      id: 2,
      name: "TC/FC",
      description: "Description of Product 2",
      image: "images/tongkang2.jpeg", // Add the image URL for Product 2
    },
  
    {
      id: 3,
      name: "Buy & Sale Agency",
      description: "Description of Product 2",
      image: "images/tongkang3.jpg", // Add the image URL for Product 2
    },
    // Add image URLs for other products as needed
  ];

const ProductList: React.FC = () => {
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  return (
    <div className="flex flex-col pb-[100px] p-10">
      <div className="items-center mx-auto w-1/2">
        <h1 className="text-[#2b1656] text-center text-5xl font-black mb-6 ">
          Our Products
        </h1>
        <p className="text-[#2b1656] text-center py-4 font-medium">
          Introducing our five high-quality cargo services meticulously designed
          to cater to your shipping needs, each developed with dedicated
          precision to deliver an unparalleled shipping experience tailored to
          your utmost satisfaction.
        </p>
      </div>
      <div className="flex flex-col items-center p-1 md:flex-row md:items-center ">
        {products.map((product) => (
          <div key={product.id} className="w-1/2 md:w-1/3 p-4">
            <div
              className="p-4 border cursor-pointer"
              onClick={() =>
                setExpandedProduct(
                  product.id === expandedProduct ? null : product.id
                )
              }
            >
              <h3 className="text-lg font-bold">{product.name}</h3>
              <div
                className={`${
                  expandedProduct === product.id ? "block" : "hidden"
                } mt-2`}
              >
                <p>{product.description}</p>
                <img src={product.image} alt={product.name} className="mt-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
