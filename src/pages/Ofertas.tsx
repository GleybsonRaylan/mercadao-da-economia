import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowUp, Home, Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { products } from "../data/products";

const Ofertas = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("todos");
  const [loading, setLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const categories = [
    {
      id: "todos",
      label: "Todos",
      emoji: "🛒",
      color: "from-[#FF7300] to-[#ED4A0F]",
    },
    {
      id: "frios",
      label: "Frios",
      emoji: "🧊",
      color: "from-blue-400 to-blue-500",
    },
    {
      id: "bebidas",
      label: "Bebidas",
      emoji: "🍺",
      color: "from-amber-400 to-amber-500",
    },
    {
      id: "limpeza",
      label: "Limpeza",
      emoji: "🧼",
      color: "from-green-400 to-green-500",
    },
    {
      id: "acougue",
      label: "Açougue",
      emoji: "🥩",
      color: "from-red-400 to-red-500",
    },
    {
      id: "hortifruti",
      label: "Hortifrúti",
      emoji: "🥬",
      color: "from-emerald-400 to-emerald-500",
    },
    {
      id: "mercearia",
      label: "Mercearia",
      emoji: "🍪",
      color: "from-purple-400 to-purple-500",
    },
  ];

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
    return products.filter((p) => {
      const matchCat = category === "todos" || p.category === category;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, category]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClearFilters = () => {
    setSearch("");
    setCategory("todos");
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-slate-50 via-white to-orange-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-x-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradientes estáticos */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-[#FF7300]/10 dark:bg-[#FF7300]/5 rounded-full mix-blend-multiply blur-3xl" />
      <div className="absolute top-40 -right-20 w-80 h-80 bg-[#ED4A0F]/10 dark:bg-[#ED4A0F]/5 rounded-full mix-blend-multiply blur-3xl" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#FF7300]/5 dark:bg-[#FF7300]/5 rounded-full mix-blend-multiply blur-3xl" />

      {/* Header - sem bordas laterais */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-border/30 shadow-sm w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3 max-w-7xl mx-auto">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#FF7300] to-[#ED4A0F] flex items-center justify-center text-base sm:text-lg text-white shadow-lg">
                🛒
              </div>
              <span className="font-bold text-foreground text-xs sm:text-sm hidden sm:block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7300] to-[#ED4A0F]">
                  Mercadão
                </span>{" "}
                da Economia
              </span>
            </motion.div>

            {/* Search Bar - AUMENTADA e sem bordas */}
            <div className="flex-1">
              <div className="relative">
                <div className="flex items-center gap-2 bg-white dark:bg-slate-800 rounded-xl shadow-lg py-2.5 px-1">
                  <div className="flex-1 flex items-center gap-3 px-4">
                    <Search className="w-5 h-5 text-[#FF7300] flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Buscar produtos em oferta..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full bg-transparent outline-none text-sm sm:text-base text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  {search && (
                    <button
                      onClick={handleClearFilters}
                      className="p-2 hover:bg-muted rounded-lg transition-colors mr-1"
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Botão Início */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
              className="flex items-center gap-1 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50 flex-shrink-0"
            >
              <Home className="w-5 h-5" />
              <span className="hidden sm:inline">Início</span>
            </motion.button>

            {/* Botão filtro mobile */}
            <button
              onClick={() => setShowMobileFilter(!showMobileFilter)}
              className="lg:hidden flex items-center gap-1 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Countdown Timer - sem bordas laterais */}
      <div className="bg-gradient-to-r from-[#FF7300]/5 via-[#ED4A0F]/5 to-[#FF7300]/5 border-b border-border/30 py-3 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 text-sm sm:text-base max-w-7xl mx-auto">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#FF7300] to-[#ED4A0F] flex items-center justify-center text-white shadow-lg">
              ⏰
            </div>
            <span className="text-muted-foreground">Válido até:</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF7300] to-[#ED4A0F] text-base sm:text-lg">
              DOMINGO
            </span>
          </div>
        </div>
      </div>

      {/* Category Filters - sem bordas laterais */}
      <div className="sticky top-[69px] sm:top-[73px] z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-border/30 shadow-sm w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-3">
          <div className="max-w-7xl mx-auto">
            {/* Desktop */}
            <div className="hidden lg:flex items-center justify-center gap-2 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    category === cat.id
                      ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                      : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{cat.emoji}</span>
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile */}
            <div className="lg:hidden">
              {showMobileFilter ? (
                <div className="flex flex-wrap gap-2 py-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setCategory(cat.id);
                        setShowMobileFilter(false);
                      }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        category === cat.id
                          ? `bg-gradient-to-r ${cat.color} text-white shadow-md`
                          : "bg-muted/70 text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      <span>{cat.emoji}</span>
                      {cat.label}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-muted-foreground">
                    Categoria:{" "}
                    <span className="font-medium text-[#ED4A0F]">
                      {categories.find((c) => c.id === category)?.label}
                    </span>
                  </span>
                  <button
                    onClick={() => setShowMobileFilter(true)}
                    className="text-sm text-[#FF7300] hover:text-[#ED4A0F] font-medium"
                  >
                    Alterar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid - sem bordas laterais */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div {...fadeInUp} className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-3">
              Ofertas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7300] to-[#ED4A0F]">
                Imperdíveis
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {filtered.length}{" "}
              {filtered.length === 1
                ? "produto encontrado"
                : "produtos encontrados"}
            </p>
          </motion.div>

          {/* Linha decorativa */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#FF7300]/30 to-transparent mb-8 sm:mb-10" />

          {/* Grid */}
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl sm:rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg"
                >
                  <div className="bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 animate-pulse aspect-square" />
                  <div className="p-4 sm:p-5 space-y-2 text-center">
                    <div className="bg-slate-200 dark:bg-slate-700 animate-pulse h-4 w-3/4 mx-auto rounded" />
                    <div className="bg-slate-200 dark:bg-slate-700 animate-pulse h-3 w-1/2 mx-auto rounded" />
                    <div className="bg-slate-200 dark:bg-slate-700 animate-pulse h-5 w-1/3 mx-auto rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filtered.length > 0 ? (
                filtered.map((product, i) => (
                  <ProductCard key={product.id} {...product} index={i} />
                ))
              ) : (
                <div className="col-span-full text-center py-16 sm:py-24">
                  <div className="relative inline-block">
                    <div className="relative w-20 h-20 sm:w-28 sm:h-28 mx-auto bg-gradient-to-br from-[#FF7300]/10 to-[#ED4A0F]/10 rounded-full flex items-center justify-center text-4xl sm:text-6xl mb-4">
                      🔍
                    </div>
                  </div>
                  <p className="text-lg sm:text-2xl font-bold text-foreground mb-2">
                    Nenhum produto encontrado
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    Tente buscar por outra categoria
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#FF7300] to-[#ED4A0F] text-white rounded-full text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-all"
                  >
                    Limpar filtros
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
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
            className="fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[#FF7300] to-[#ED4A0F] text-white shadow-xl flex items-center justify-center hover:shadow-2xl transition-all"
          >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Ofertas;
