const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-foreground">
              🛒 Mercadão da Economia
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Seu supermercado de confiança em Camocim de São Félix. Qualidade e
              economia para toda a família.
            </p>
          </div>

          {/* Address */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">📍 Endereço</h4>
            <p className="text-sm text-muted-foreground">
              52, R. João Pessoa, 2<br />
              Camocim de São Félix - PE
              <br />
              CEP: 55665-000
            </p>
          </div>

          {/* Hours */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">
              🕐 Horário de Funcionamento
            </h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Segunda a Sábado: 07h às 19h</p>
              <p>Domingos 07h às 13h</p>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="https://www.instagram.com/mercadaodaeconomiacamocim/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#E4405F] transition-colors group"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:scale-110 transition-transform"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="text-sm font-medium">
                  @mercadaodaeconomiacamocim
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mercadão da Economia. Todos os direitos
            reservados.
          </p>

          {/* Versão melhorada - Destaque para o programador */}
          <div className="mt-4 pt-2">
            <p className="text-sm">
              <span className="text-muted-foreground">Desenvolvido por </span>
              <a
                href="https://gleybsonferreiradev.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAafvAbrbe7x_5dzxOrky67Ljo1TStoz9FXYTvf6h3Xm8GShcNTRuQsxSNU3u_w_aem_fgXLK2ri4j9jL6mITalLXA"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block font-semibold text-lg bg-gradient-to-r from-[#FF7300] to-[#ED4A0F] bg-clip-text text-transparent hover:from-[#ED4A0F] hover:to-[#FF7300] transition-all duration-300 hover:scale-105 transform hover:drop-shadow-lg"
              >
                Gleybson Ferreira
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF7300] to-[#ED4A0F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </p>

            {/* Badge de profissional */}
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#FF7300]/10 to-[#ED4A0F]/10 border border-[#FF7300]/20">
              <span className="text-xs font-medium text-[#FF7300]">
                ⚡ Desenvolvedor
              </span>
              <span className="w-1 h-1 rounded-full bg-[#FF7300]"></span>
              <span className="text-xs text-muted-foreground">
                disponível para projetos
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
