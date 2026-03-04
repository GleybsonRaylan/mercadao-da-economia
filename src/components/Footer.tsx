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
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="text-xl hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="text-xl hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="text-xl hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                📱
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mercadão da Economia. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Desenvolvido por{" "}
            <a
              href="https://gleybsonferreiradev.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAafvAbrbe7x_5dzxOrky67Ljo1TStoz9FXYTvf6h3Xm8GShcNTRuQsxSNU3u_w_aem_fgXLK2ri4j9jL6mITalLXA"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              Gleybson Ferreira
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
