import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCard = ({ product }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 p-6">
      {/* Render Slider if multiple images exist, otherwise just show a single image */}
      {product.imageUrl.length > 1 ? (
        <Slider {...settings} className="w-full h-52">
          {product.imageUrl.map((image, index) => (
            <div key={index} className="flex justify-center items-center ">
              <img
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-52 object-cover"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="flex justify-center items-center w-full h-52">
          <img
            src={product.imageUrl[0]}
            alt={product.name}
            className="w-full h-52 object-cover"
          />
        </div>
      )}

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
