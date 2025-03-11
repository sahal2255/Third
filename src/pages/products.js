import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/components/common/ProductCard";
import { ProductFetchingService } from "./api/userService";
import { ImSpinner9 } from "react-icons/im";

const ProductPage = () => {
  const { data: products, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: ProductFetchingService,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ImSpinner9 className="text-black text-6xl animate-spin" />
      </div>
    );
  }
  

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg font-semibold">
          Error: {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
         Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
