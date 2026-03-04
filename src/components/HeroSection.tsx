import { motion } from "framer-motion";
import { Search, ChevronRight, Package, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [logoError, setLogoError] = useState(false);
  const [catImageError, setCatImageError] = useState(false);

  const handleViewOffers = () => {
    navigate("/ofertas");
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-orange-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradientes animados */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-20 -left-20 w-80 h-80 bg-[#FF7300]/10 dark:bg-[#FF7300]/5 rounded-full mix-blend-multiply filter blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 30, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-40 -right-20 w-80 h-80 bg-[#ED4A0F]/10 dark:bg-[#ED4A0F]/5 rounded-full mix-blend-multiply filter blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 40, -40, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#FF7300]/5 dark:bg-[#FF7300]/5 rounded-full mix-blend-multiply filter blur-3xl"
      />

      {/* Header - AUMENTADO */}
      <header className="relative z-20 flex items-center justify-center px-4 py-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          {/* Logo - MAIOR */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7300] to-[#ED4A0F] rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF7300] to-[#ED4A0F] p-0.5 shadow-xl">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                {!logoError ? (
                  <img
                    src="/public/logo/mercado.jpg"
                    alt="Mercadão da Economia"
                    className="w-full h-full object-cover rounded-2xl"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <span className="text-4xl">🛒</span>
                )}
              </div>
            </div>
          </div>

          {/* Nome do Mercado - MAIOR */}
          <div className="flex flex-col">
            <h1 className="font-black text-3xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7300] to-[#ED4A0F]">
                Mercadão
              </span>
            </h1>
            <span className="text-base text-muted-foreground tracking-wide -mt-1 font-medium">
              da Economia
            </span>
          </div>
        </motion.div>
      </header>

      {/* Hero Content - Mobile First */}
      <div className="flex-1 flex items-center relative z-10 px-4">
        <div className="w-full max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge Semanal - MAIOR */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF7300]/10 to-[#ED4A0F]/10 text-[#ED4A0F] text-sm font-semibold border border-[#FF7300]/20 shadow-sm mx-auto"
            >
              <Sparkles className="w-4 h-4" />
              <span>Promoções da Semana</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-3 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-black text-foreground leading-tight"
              >
                Economia que faz
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF7300] to-[#ED4A0F] text-4xl mt-1"
                >
                  a diferença
                </motion.span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-sm text-muted-foreground leading-relaxed"
              >
                Selecionamos as melhores ofertas para você economizar em todas
                as compras.
              </motion.p>
            </div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF7300] to-[#ED4A0F] rounded-2xl blur-xl opacity-20" />
              <div className="relative flex items-center gap-2 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-border/50 p-1">
                <div className="flex-1 flex items-center gap-2 px-4">
                  <Search className="w-4 h-4 text-[#FF7300]" />
                  <input
                    type="text"
                    placeholder="Buscar ofertas..."
                    className="w-full bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
                    onFocus={handleViewOffers}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleViewOffers}
                  className="px-5 py-2 bg-gradient-to-r from-[#FF7300] to-[#ED4A0F] text-white rounded-xl font-medium text-xs shadow-lg shadow-[#FF7300]/25"
                >
                  Buscar
                </motion.button>
              </div>
            </motion.div>

            {/* Foto do Gato - GRANDE, QUADRADA, PAISAGEM, SEM BORDAS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.7,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="w-full my-4"
            >
              <div className="relative group w-full">
                {/* Efeito de brilho suave no fundo */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#FF7300]/10 via-transparent to-[#ED4A0F]/10 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />

                {/* Container da imagem - formato paisagem quadrado */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  {!catImageError ? (
                    <img
                      src="public/logo/galego-mercado.png"
                      alt="mercadao da economia"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={() => setCatImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#FF7300]/20 to-[#ED4A0F]/20 flex items-center justify-center text-8xl">
                      🐱
                    </div>
                  )}

                  {/* Overlay sutil no canto inferior */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Botão Principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewOffers}
                className="relative group w-full px-8 py-4 bg-gradient-to-r from-[#FF7300] to-[#ED4A0F] text-white rounded-xl font-bold text-base shadow-2xl shadow-[#FF7300]/30 hover:shadow-[#FF7300]/50 transition-all flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Package className="w-4 h-4 group-hover:rotate-12 transition-transform relative z-10" />
                <span className="relative z-10">
                  Ver todas as ofertas da semana
                </span>
              </motion.button>
            </motion.div>

            {/* Indicadores de confiança */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center gap-4 pt-2"
            >
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7300]" />
                Atualizado hoje
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ED4A0F]" />
                Preços especiais
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
