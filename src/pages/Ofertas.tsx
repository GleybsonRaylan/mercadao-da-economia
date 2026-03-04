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
    <div className="relative min-h-screen w-full bg-gradient-to-b from-slate-50 via-white to-orange-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background Pattern */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradientes estáticos - fixos no fundo */}
      <div className="fixed top-20 -left-20 w-80 h-80 bg-[#FF7300]/10 dark:bg-[#FF7300]/5 rounded-full mix-blend-multiply blur-3xl" />
      <div className="fixed top-40 -right-20 w-80 h-80 bg-[#ED4A0F]/10 dark:bg-[#ED4A0F]/5 rounded-full mix-blend-multiply blur-3xl" />
      <div className="fixed bottom-20 left-1/3 w-80 h-80 bg-[#FF7300]/5 dark:bg-[#FF7300]/5 rounded-full mix-blend-multiply blur-3xl" />

      {/* HEADER FIXO COMPLETO - Tudo fica grudado no topo */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-border/30 shadow-lg">
        {/* Logo e Busca */}
        <div className="w-full px-4 py-3">
          <div className="flex items-center gap-2 max-w-7xl mx-auto">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF7300] to-[#ED4A0F] flex items-center justify-center text-lg text-white shadow-lg">
                🛒
              </div>
              <span className="font-bold text-foreground text-xs hidden sm:block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7300] to-[#ED4A0F]">
                  Mercadão
                </span>
              </span>
            </motion.div>

            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <div className="flex items-center gap-2 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-border/50 py-2 px-1">
                  <div className="flex-1 flex items-center gap-2 px-3">
                    <Search className="w-4 h-4 text-[#FF7300] flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Buscar produtos..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  {search && (
                    <button
                      onClick={handleClearFilters}
                      className="p-1 hover:bg-muted rounded-lg transition-colors mr-1"
                    >
                      <X className="w-4 h-4 text-muted-foreground" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Home Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50 flex-shrink-0"
            >
              <Home className="w-5 h-5" />
            </motion.button>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowMobileFilter(!showMobileFilter)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50 flex-shrink-0"
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="bg-gradient-to-r from-[#FF7300]/5 via-[#ED4A0F]/5 to-[#FF7300]/5 border-t border-border/30 py-2">
          <div className="w-full px-4">
            <div className="flex items-center justify-center gap-2 text-xs max-w-7xl mx-auto">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FF7300] to-[#ED4A0F] flex items-center justify-center text-white shadow-md">
                ⏰
              </div>
              <span className="text-muted-foreground">Válido até:</span>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF7300] to-[#ED4A0F] text-sm">
                DOMINGO
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="border-t border-border/30 bg-white/90 dark:bg-slate-900/90 py-2">
          <div className="w-full px-4">
            <div className="max-w-7xl mx-auto">
              {/* Desktop */}
              <div className="hidden lg:flex items-center justify-center gap-2 overflow-x-auto">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                      category === cat.id
                        ? `bg-gradient-to-r ${cat.color} text-white shadow-md`
                        : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <span>{cat.emoji}</span>
                      {cat.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Mobile */}
              <div className="lg:hidden">
                {showMobileFilter ? (
                  <div className="flex flex-wrap gap-2 py-1">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setCategory(cat.id);
                          setShowMobileFilter(false);
                        }}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
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
                  <div className="flex items-center justify-between py-1">
                    <span className="text-xs text-muted-foreground">
                      Categoria:{" "}
                      <span className="font-medium text-[#ED4A0F]">
                        {categories.find((c) => c.id === category)?.label}
                      </span>
                    </span>
                    <button
                      onClick={() => setShowMobileFilter(true)}
                      className="text-xs text-[#FF7300] hover:text-[#ED4A0F] font-medium"
                    >
                      Alterar
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Espaçador para compensar o header fixo */}
      <div className="h-[160px] sm:h-[170px]" />

      {/* Products Grid */}
      <div className="w-full px-4 py-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header com contador */}
          <motion.div {...fadeInUp} className="text-center mb-6">
            <h2 className="text-xl font-black text-foreground mb-1">
              Ofertas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7300] to-[#ED4A0F]">
                Imperdíveis
              </span>
            </h2>
            <p className="text-xs text-muted-foreground">
              {filtered.length}{" "}
              {filtered.length === 1
                ? "produto encontrado"
                : "produtos encontrados"}
            </p>
          </motion.div>

          {/* Linha decorativa */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#FF7300]/30 to-transparent mb-6" />

          {/* Grid */}
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg"
                >
                  <div className="bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 animate-pulse aspect-square" />
                  <div className="p-3 space-y-2 text-center">
                    <div className="bg-slate-200 dark:bg-slate-700 animate-pulse h-3 w-3/4 mx-auto rounded" />
                    <div className="bg-slate-200 dark:bg-slate-700 animate-pulse h-2 w-1/2 mx-auto rounded" />
                    <div className="bg-slate-200 dark:bg-slate-700 animate-pulse h-4 w-1/3 mx-auto rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {filtered.length > 0 ? (
                filtered.map((product, i) => (
                  <ProductCard key={product.id} {...product} index={i} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="relative inline-block">
                    <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-[#FF7300]/10 to-[#ED4A0F]/10 rounded-full flex items-center justify-center text-3xl mb-3">
                      🔍
                    </div>
                  </div>
                  <p className="text-base font-bold text-foreground mb-1">
                    Nenhum produto encontrado
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Tente buscar por outra categoria
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="px-4 py-2 bg-gradient-to-r from-[#FF7300] to-[#ED4A0F] text-white rounded-full text-xs font-medium shadow-lg hover:shadow-xl transition-all"
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
            className="fixed bottom-4 right-4 z-50 w-10 h-10 rounded-full bg-gradient-to-r from-[#FF7300] to-[#ED4A0F] text-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Ofertas;
