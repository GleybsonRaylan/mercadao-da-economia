import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowUp, Home, X, Tag, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { products } from "../data/products";

const ITEMS_PER_PAGE = 12;

const categoryConfig = [
  {
    id: "todos",
    label: "Todos",
    emoji: "🛒",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "pascoa",
    label: "Especial de Páscoa",
    emoji: "🐰",
    color: "from-pink-400 to-purple-500",
    isSpecial: true,
  },
  {
    id: "mercearia",
    label: "Mercearia",
    emoji: "🍪",
    color: "from-purple-400 to-purple-500",
  },
  {
    id: "acougue",
    label: "Açougue",
    emoji: "🥩",
    color: "from-red-400 to-red-500",
  },
  {
    id: "bebidas",
    label: "Bebidas",
    emoji: "🍺",
    color: "from-amber-400 to-amber-500",
  },
  {
    id: "frios",
    label: "Frios",
    emoji: "🧊",
    color: "from-blue-400 to-blue-500",
  },
  {
    id: "limpeza",
    label: "Limpeza",
    emoji: "🧼",
    color: "from-green-400 to-green-500",
  },
  {
    id: "hortifruti",
    label: "Hortifrúti",
    emoji: "🥬",
    color: "from-emerald-400 to-emerald-500",
  },
];

const Ofertas = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("todos");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filtered = useMemo(() => {
    let result = products;

    if (category !== "todos") {
      result = result.filter((p) => p.category === category);
    }

    if (search.trim()) {
      const query = search.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(query));
    }

    return result;
  }, [search, category]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const visibleProducts = filtered.slice(0, page * ITEMS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    setPage(1);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleClearFilters = () => {
    setSearch("");
    setCategory("todos");
    setPage(1);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isPascoaActive = category === "pascoa";

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-slate-50 via-white to-orange-50/20">
      {/* Background Pattern sutil com elementos de Páscoa */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FF7300 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        {isPascoaActive && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 text-4xl opacity-10 animate-float">
              🐰
            </div>
            <div className="absolute bottom-40 right-20 text-5xl opacity-10 animate-float-delay">
              🥚
            </div>
            <div className="absolute top-1/3 right-10 text-3xl opacity-10 animate-float">
              🐣
            </div>
          </div>
        )}
      </div>

      {/* Personagem 3D decorativo */}
      <div className="fixed top-24 right-8 w-28 h-28 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-5xl shadow-2xl hidden lg:flex z-10 animate-bounce-slow">
        {isPascoaActive ? "🐰" : "🛒"}
      </div>

      {/* HEADER - Principal (sempre fixo) */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shadow-md overflow-hidden">
                <img
                  src="/images/logo/mercado.png"
                  alt="Mascote Mercadão"
                  className="w-full h-full object-contain scale-110"
                  loading="lazy"
                />
              </div>
              <span className="font-bold text-lg hidden sm:block">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Mercadão
                </span>
              </span>
            </motion.div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur" />
                <div className="relative flex items-center bg-white border border-gray-200 rounded-xl shadow-sm group-hover:shadow-md transition-all">
                  <Search className="w-4 h-4 text-gray-400 ml-3" />
                  <input
                    type="text"
                    placeholder="Buscar produtos..."
                    value={search}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full px-3 py-2 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
                  />
                  {search && (
                    <button
                      onClick={handleClearFilters}
                      className="mr-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-3 h-3 text-gray-400" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Home Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-lg hover:bg-gray-100"
            >
              <Home className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Espaçador do header principal */}
      <div className="h-16" />

      {/* HERO SECTION - DINÂMICA */}
      <section
        className={`py-12 md:py-16 transition-all duration-500 ${
          isPascoaActive
            ? "bg-gradient-to-b from-pink-50/50 via-purple-50/30 to-white"
            : "bg-gradient-to-b from-orange-50/50 to-white"
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Bloco do Mascote com balão */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-10"
          >
            <div className="relative inline-block w-full max-w-md">
              <div
                className={`rounded-3xl shadow-lg p-5 flex items-center gap-4 border ${
                  isPascoaActive
                    ? "bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200"
                    : "bg-white border-gray-100"
                }`}
              >
                <div className="w-20 h-20 flex-shrink-0 relative">
                  <img
                    src="/images/logo/mascote.png"
                    alt="Mascote Pita"
                    className="w-full h-full object-contain scale-125"
                    loading="lazy"
                  />
                  {isPascoaActive && (
                    <div className="absolute -top-2 -right-2 text-2xl animate-bounce">
                      🐰
                    </div>
                  )}
                </div>
                <p className="text-base md:text-lg font-bold text-gray-800 flex-1">
                  {isPascoaActive ? (
                    <>
                      🐣{" "}
                      <span className="text-pink-500">Páscoa no Mercadão!</span>{" "}
                      🐣
                      <br />
                      Ovos, colombas e chocolates com{" "}
                      <span className="text-[#FF7100]">preços especiais</span>!
                      🎉
                    </>
                  ) : (
                    <>
                      Confira nossos{" "}
                      <span className="text-[#FF7100]">melhores preços</span>{" "}
                      desta semana! 🎉
                    </>
                  )}
                </p>
              </div>
              <div
                className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 border-r border-b ${
                  isPascoaActive
                    ? "bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200"
                    : "bg-white border-gray-100"
                }`}
              />
            </div>
          </motion.div>

          {/* Especial de Páscoa - BOTÃO CLICÁVEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`cursor-pointer rounded-full px-6 py-2.5 shadow-sm border transition-all ${
                isPascoaActive
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 border-pink-300 shadow-lg"
                  : "bg-red-50/80 border-red-100 hover:bg-red-100"
              }`}
              onClick={() => handleCategoryChange("pascoa")}
            >
              <span
                className={`font-bold text-sm md:text-base ${
                  isPascoaActive ? "text-white" : "text-red-600"
                }`}
              >
                {isPascoaActive
                  ? "🐣 PROMOÇÃO DE PÁSCOA 🐣"
                  : "🐰 Especial de Páscoa"}
              </span>
            </motion.div>
          </motion.div>

          {/* Título dinâmico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-3">
              {isPascoaActive ? "Ofertas de" : "Ofertas da"}{" "}
              <span
                className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  isPascoaActive
                    ? "from-pink-500 via-purple-500 to-orange-500"
                    : "from-[#FF7100] to-[#F1540F]"
                }`}
              >
                {isPascoaActive ? "Páscoa" : "Semana"}
              </span>
            </h2>
            <p className="text-gray-500 font-semibold text-base md:text-lg">
              {isPascoaActive
                ? "🐣 Aproveite antes que os ovos acabem! 🐣"
                : "Aproveite antes que acabe!"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* BARRA DE CATEGORIAS - FIXA */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div
                className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${
                  isPascoaActive
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                    : "bg-orange-50 text-orange-600"
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>{isPascoaActive ? "Ofertas de Páscoa" : "Ofertas"}</span>
              </div>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Tag className="w-3 h-3" />
                {isPascoaActive ? "Até Domingo de Páscoa" : "Até Domingo"}
              </span>
            </div>

            {category !== "todos" && (
              <button
                onClick={handleClearFilters}
                className="text-xs text-gray-400 hover:text-orange-500 transition-colors"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Categorias scrolláveis */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categoryConfig.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`
                  flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap
                  transition-all duration-200 flex-shrink-0
                  ${
                    category === cat.id
                      ? cat.isSpecial
                        ? "bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white shadow-lg scale-105 ring-2 ring-pink-300"
                        : `bg-gradient-to-r ${cat.color} text-white shadow-md`
                      : cat.isSpecial && !isPascoaActive
                        ? "bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border border-pink-300 hover:shadow-md"
                        : "bg-gray-50 text-gray-600 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/50"
                  }
                `}
              >
                <span className={cat.isSpecial ? "text-lg" : ""}>
                  {cat.emoji}
                </span>
                {cat.label}
                {cat.isSpecial && isPascoaActive && (
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-xs"
                  >
                    🐣
                  </motion.span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header da seção de produtos */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {isPascoaActive ? (
                <span className="flex items-center gap-2">
                  🐣 Ofertas de{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Páscoa
                  </span>
                  🥚
                </span>
              ) : (
                <>
                  Ofertas{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Imperdíveis
                  </span>
                </>
              )}
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              {filtered.length} {filtered.length === 1 ? "produto" : "produtos"}{" "}
              encontrados
              {isPascoaActive && " 🎁 Para sua Páscoa!"}
            </p>
          </div>
        </div>

        {/* Grid de produtos */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
                <div className="p-4 space-y-2">
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4" />
                  <div className="h-2 bg-gray-200 rounded animate-pulse w-1/2" />
                  <div className="h-5 bg-gray-200 rounded animate-pulse w-1/3" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {visibleProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {visibleProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      {...product}
                      index={index}
                      isPascoaActive={isPascoaActive}
                    />
                  ))}
                </div>

                {/* Botão Ver mais */}
                {page < totalPages && (
                  <div className="text-center mt-10">
                    <button
                      onClick={() => setPage((p) => p + 1)}
                      className={`font-medium px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 ${
                        isPascoaActive
                          ? "bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white"
                          : "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                      }`}
                    >
                      {isPascoaActive
                        ? "Ver mais ofertas de Páscoa 🐣"
                        : "Ver mais ofertas 🛒"}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full text-3xl mb-4 ${
                    isPascoaActive ? "bg-pink-50" : "bg-orange-50"
                  }`}
                >
                  {isPascoaActive ? "🐰" : "🔍"}
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {isPascoaActive
                    ? "Nenhum produto de Páscoa encontrado"
                    : "Nenhum produto encontrado"}
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  {isPascoaActive
                    ? "Em breve teremos novidades para sua Páscoa! 🐣"
                    : "Tente buscar por outra categoria ou termo"}
                </p>
                <button
                  onClick={handleClearFilters}
                  className={`px-6 py-2 text-white rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition-all ${
                    isPascoaActive
                      ? "bg-gradient-to-r from-pink-500 to-purple-500"
                      : "bg-gradient-to-r from-orange-500 to-red-500"
                  }`}
                >
                  Limpar filtros
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>

      <Footer />

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleScrollToTop}
            className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-xl text-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all ${
              isPascoaActive
                ? "bg-gradient-to-r from-pink-500 to-purple-500"
                : "bg-gradient-to-r from-orange-500 to-red-500"
            }`}
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Animações */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 5s ease-in-out infinite 1s;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Ofertas;
