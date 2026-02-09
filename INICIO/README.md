# Edson Porto Braz Advocacia - Site Vanilla (Zero Dependencies)

Site institucional premium de luxo para escritório de advocacia. Versão Vanilla pura (HTML5 + CSS3 + JavaScript) com **zero dependências**, pronto para GitHub Pages.

## 🚀 Deploy Imediato

### GitHub Pages (Recomendado)

1. **Crie um repositório no GitHub**:
   - Nome: `edson-porto-braz-advocacia` (ou outro nome)
   - Tipo: Public

2. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/edson-porto-braz-advocacia.git
   cd edson-porto-braz-advocacia
   ```

3. **Copie todos os arquivos** deste projeto para o repositório

4. **Faça commit e push**:
   ```bash
   git add .
   git commit -m "Initial commit - Edson Porto Braz Advocacia"
   git push -u origin main
   ```

5. **Ative GitHub Pages**:
   - Vá para Settings → Pages
   - Source: `main` branch
   - Folder: `/root`
   - Clique em Save
   - Seu site estará online em `https://seu-usuario.github.io/edson-porto-braz-advocacia`

### Alternativa: Seu Domínio Customizado

1. **Adicione CNAME**:
   - Crie arquivo `CNAME` na raiz com seu domínio:
   ```
   seudominio.com.br
   ```

2. **Configure DNS**:
   - Aponte seu domínio para GitHub Pages
   - Instruções: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

3. **Seu site estará em** `https://seudominio.com.br`

## 📁 Estrutura de Arquivos

```
edson-porto-braz-advocacia/
├── index.html          # Arquivo principal (HTML5)
├── style.css           # Estilos (CSS3 com variáveis)
├── script.js           # Interatividade (JavaScript puro)
├── assets/
│   ├── logo-ep.png     # Logo do monograma EP
│   └── fundador.jpg    # Foto do fundador
├── README.md           # Este arquivo
└── CNAME               # (Opcional) Domínio customizado
```

## ✨ Características

- ✅ **Zero Dependências**: Sem npm, webpack, ou build tools
- ✅ **Design Premium**: Quiet Luxury + Modernismo Jurídico
- ✅ **Paleta Institucional**: Deep Navy Blue (#1a2332) + Matte Champagne Gold (#c9a961)
- ✅ **Animações Suaves**: Fade-in, parallax discreto, scroll reveal
- ✅ **Responsivo**: Mobile-first design com breakpoints inteligentes
- ✅ **Performance**: Otimizado para velocidade e SEO
- ✅ **Acessibilidade**: Semântica HTML5 correta
- ✅ **GitHub Pages Ready**: Deploy instantâneo

## 🎨 Seções Incluídas

1. **Header Premium**: Logo, navegação, CTA WhatsApp
2. **Hero Section**: Foto do fundador, headline, CTAs
3. **Expertise Section**: 500+ processos, cards com animação
4. **Impact Counters**: Contadores animados (500, 27, 100)
5. **Practice Areas**: Direito Trabalhista e Cível
6. **National Presence**: Mapa estilizado + presença regional
7. **CTA Section**: Call-to-action final
8. **Footer**: Links, contato, marca d'água
9. **WhatsApp Button**: Botão flutuante fixo

## 📱 Responsividade

- Desktop: Layout completo com navegação horizontal
- Tablet: Grid adaptável
- Mobile: Menu hamburger, layout vertical

## 🔧 Personalização

### Alterar Cores

Edite as variáveis CSS em `style.css`:

```css
:root {
    --color-navy: #1a2332;      /* Azul marinho */
    --color-gold: #c9a961;      /* Ouro champagne */
    --color-white: #ffffff;     /* Branco */
}
```

### Alterar Número WhatsApp

Busque por `5551993615313` em todos os arquivos e substitua:

```html
<!-- Antes -->
<a href="https://wa.me/5551993615313">

<!-- Depois -->
<a href="https://wa.me/SEU_NUMERO_AQUI">
```

### Adicionar Conteúdo

Edite `index.html` diretamente. Todas as seções estão bem comentadas.

## 📊 Performance

- **Tamanho Total**: ~150 KB (com assets)
- **Sem Minificação**: Código legível e editável
- **Sem Compressão**: Funciona em qualquer servidor
- **Tempo de Carregamento**: < 1s em conexão 4G

## 🔒 Segurança

- Nenhuma dependência externa (exceto Google Fonts e Lucide Icons via CDN)
- Sem banco de dados
- Sem servidor necessário
- Sem vulnerabilidades de dependências

## 🌐 SEO

- Meta tags otimizadas
- Estrutura semântica HTML5
- Titles e descriptions
- Open Graph tags (pronto para adicionar)

## 📞 Contato

- **WhatsApp**: (51) 99361-5313
- **Email**: contato@edsonportobraz.com.br

## 📄 Licença

Todos os direitos reservados © 2026 Edson Porto Braz Advocacia

## 🤝 Suporte

Para dúvidas sobre deploy ou customização, consulte:
- GitHub Pages Docs: https://docs.github.com/en/pages
- HTML5 Docs: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS3 Docs: https://developer.mozilla.org/en-US/docs/Web/CSS

---

**Desenvolvido com ❤️ para Edson Porto Braz Advocacia**

Site pronto para GitHub Pages - Basta fazer upload e funciona instantaneamente!
