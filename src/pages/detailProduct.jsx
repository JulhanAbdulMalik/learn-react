import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import Button from "../components/Elements/Button";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]); // <-- Efek akan berjalan kembali jika id berubah

  const handleBackPage = () => {
    window.history.back();
  };

  // Menampilkan jika produk tidak ditemukan
  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg">Produk tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Button
        classname="text-white bg-gray-700 hover:bg-gray-800"
        onClick={handleBackPage}
      >
        Kembali
      </Button>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:flex">
        {/* Gambar Produk */}
        <div className="md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src={product.image}
            alt={product.title}
          />
        </div>

        {/* Detail Produk */}
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-700 text-base mb-6">
              {product.description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-gray-700">
              ${product.price.toFixed(2)}
            </p>
            <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProductPage;
