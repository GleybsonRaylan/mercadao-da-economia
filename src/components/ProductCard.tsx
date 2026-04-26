import { motion } from "framer-motion";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
  image: string;
  validUntil: string;
  index: number;
}

const ProductCard = ({
  name,
  oldPrice,
  newPrice,
  discount,
  image,
  validUntil,
  index,
}: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);

  const gradientFrom = "from-[#FF7300]";
  const gradientTo = "to-[#ED4A0F]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Badge desconto */}
      <div className="absolute top-2 right-2 z-10">
        <div
          className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white text-xs font-bold px-2 py-1 rounded-full shadow`}
        >
          -{discount}%
        </div>
      </div>

      {/* Imagem */}
      <div className="aspect-square bg-gray-100 overflow-hidden">
        {!imageError ? (
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            🛒
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 text-center">
        <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>

        <div className="mt-2">
          <p className="text-xs text-gray-400 line-through">
            R$ {oldPrice.toFixed(2).replace(".", ",")}
          </p>

          <p
            className={`text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
          >
            R$ {newPrice.toFixed(2).replace(".", ",")}
          </p>
        </div>

        <div className="flex items-center justify-center gap-1 mt-2">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <p className="text-xs text-gray-500">Até {validUntil}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
