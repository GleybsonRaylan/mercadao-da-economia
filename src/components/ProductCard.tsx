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
  isPascoaActive?: boolean;
}

const ProductCard = ({
  name,
  oldPrice,
  newPrice,
  discount,
  image,
  validUntil,
  index,
  isPascoaActive = false,
}: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);

  const gradientFrom = isPascoaActive ? "from-pink-500" : "from-[#FF7300]";
  const gradientTo = isPascoaActive ? "to-purple-500" : "to-[#ED4A0F]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className={`group relative bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
        isPascoaActive ? "ring-1 ring-pink-200" : ""
      }`}
    >
      {/* Discount Badge */}
      <motion.div
        initial={{ x: 50, rotate: 45 }}
        animate={{ x: 0, rotate: 0 }}
        transition={{ delay: index * 0.05 + 0.2 }}
        className="absolute top-3 right-3 z-20"
      >
        <div className="relative">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full blur-md opacity-50`}
          />
          <span
            className={`relative bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1`}
          >
            {isPascoaActive && <span>🐰</span>}-{discount}%
          </span>
        </div>
      </motion.div>

      {/* Product Image */}
      <div className="relative aspect-square bg-gradient-to-br from-muted/50 to-muted overflow-hidden">
        {!imageError ? (
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${gradientFrom}/20 ${gradientTo}/20 flex items-center justify-center text-5xl`}
          >
            {isPascoaActive ? "🐰" : "🛒"}
          </div>
        )}
        {/* Selo de Páscoa */}
        {isPascoaActive && (
          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-bold text-pink-500 flex items-center gap-1 shadow-md">
            <span>✝️</span> Especial Páscoa
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        <h3 className="font-semibold text-foreground text-sm leading-tight line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>

        <div className="space-y-1 mt-3">
          <p className="text-xs text-muted-foreground line-through">
            R$ {oldPrice.toFixed(2).replace(".", ",")}
          </p>
          <div className="flex items-baseline justify-center gap-1">
            <span
              className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
            >
              R$ {newPrice.toFixed(2).replace(".", ",")}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 mt-3">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-1.5 h-1.5 rounded-full ${
              isPascoaActive ? "bg-pink-500" : "bg-green-500"
            }`}
          />
          <p className="text-xs text-muted-foreground">
            Válido até {validUntil}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
