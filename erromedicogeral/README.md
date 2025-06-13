# Página de Vendas - Edson Porto Advocacia

Uma página de vendas profissional e responsiva para o escritório de advocacia Edson Porto, especializado em casos de erro médico.

## 🚀 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Botão WhatsApp Flutuante**: Sempre visível durante a navegação
- **SEO Otimizado**: Meta tags e palavras-chave para erro médico
- **Performance**: Carregamento rápido e otimizado
- **Acessibilidade**: Design inclusivo e navegação intuitiva

## 📁 Estrutura dos Arquivos

```
/
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Design moderno com gradientes e animações
- **JavaScript**: Interatividade e funcionalidades
- **Font Awesome**: Ícones profissionais
- **Google Fonts**: Tipografia Inter

## 📱 Funcionalidades

### Botão WhatsApp Flutuante
- Permanece visível durante toda a navegação
- Link direto para WhatsApp com mensagem pré-preenchida
- Animação de pulso para chamar atenção

### FAQ Interativo
- Perguntas e respostas expansíveis
- Animações suaves de abertura/fechamento

### Formulários de Contato
- Validação de campos em JavaScript
- Formatação automática de telefone
- Mensagens de erro personalizadas

### Otimizações
- Lazy loading para imagens
- Scroll suave entre seções
- Animações de entrada para elementos

## 🚀 Como Fazer Deploy no GitHub Pages

### Passo 1: Criar Repositório
1. Acesse [GitHub.com](https://github.com)
2. Clique em "New repository"
3. Nome sugerido: `edson-porto-advocacia-landing`
4. Marque como "Public"
5. Clique em "Create repository"

### Passo 2: Upload dos Arquivos
1. Na página do repositório, clique em "uploading an existing file"
2. Arraste e solte todos os arquivos:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Adicione uma mensagem de commit: "Primeira versão da página de vendas"
4. Clique em "Commit changes"

### Passo 3: Ativar GitHub Pages
1. No repositório, vá em "Settings"
2. Role até a seção "Pages"
3. Em "Source", selecione "Deploy from a branch"
4. Em "Branch", selecione "main"
5. Clique em "Save"

### Passo 4: Acessar o Site
- Aguarde alguns minutos
- O site estará disponível em: `https://[seu-usuario].github.io/[nome-do-repositorio]`
- Exemplo: `https://edsonporto.github.io/edson-porto-advocacia-landing`

## 🔧 Personalização

### Alterar Informações de Contato
No arquivo `index.html`, procure e altere:
- Número do WhatsApp: `5551993615313`
- E-mail: `contato@edsonportoadvocacia.com.br`
- Endereço: `Porto Alegre/RS`

### Modificar Cores
No arquivo `style.css`, as principais cores estão definidas como:
- Azul principal: `#2c5aa0`
- Azul escuro: `#1e3d72`
- Verde WhatsApp: `#25d366`
- Vermelho destaque: `#e74c3c`

### Adicionar Google Analytics
Adicione o código do Google Analytics antes do fechamento da tag `</head>` no `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Adicionar Facebook Pixel
Adicione o código do Facebook Pixel antes do fechamento da tag `</head>` no `index.html`:

```html
<!-- Facebook Pixel -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

## 📊 Métricas e Conversão

### CTAs Principais
1. **Botão Hero**: "ANÁLISE GRATUITA E CONFIDENCIAL"
2. **Botão Flutuante**: "Fale Conosco" (WhatsApp)
3. **CTA Final**: "BUSQUE SEUS DIREITOS AGORA!"
4. **Ligação Direta**: Link para telefone

### Tracking de Conversões
O JavaScript inclui funções para rastrear cliques nos CTAs:
- Google Analytics 4 events
- Facebook Pixel events
- Console logging para debug

## 🔒 Conformidade LGPD

A página inclui:
- Aviso de cookies
- Política de privacidade (link placeholder)
- Termos de uso (link placeholder)

**Importante**: Adicione as páginas de política de privacidade e termos de uso para conformidade total.

## 📞 Suporte

Para dúvidas sobre a implementação ou personalização:
- Verifique a documentação do GitHub Pages
- Consulte a documentação do Font Awesome para ícones
- Use as ferramentas de desenvolvedor do navegador para debug

## 📝 Licença

Este projeto foi desenvolvido especificamente para Edson Porto Advocacia. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para gerar leads qualificados em casos de erro médico.**

