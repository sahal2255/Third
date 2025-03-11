import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
      {/* Swiper for Image Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-52 "
      >
        {product.imageUrl.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="p-6">

            <img
              src={image}
              alt={`${product.name} ${index + 1}`}
              className="w-full h-52 object-cover"
            />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-indigo-600 font-bold text-xl">
            ${product.price}
          </span>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-sm">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
