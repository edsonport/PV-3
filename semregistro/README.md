# Edson Porto Braz Advocacia
## Landing Page — Trabalhador Sem Carteira Assinada

---

## Estrutura de Arquivos

```
edson-porto-braz/
├── index.html      ← Página principal
├── styles.css      ← Toda a estilização (identidade visual)
├── script.js       ← Interatividade (cursor, animações, FAQ, WhatsApp)
└── README.md       ← Este arquivo
```

---

## Como fazer upload no GitHub Pages

1. Crie um repositório no GitHub (ex: `edson-porto-braz-site`)
2. Suba os três arquivos: `index.html`, `styles.css`, `script.js`
3. Vá em **Settings → Pages**
4. Em **Source**, selecione `main` e a pasta `/root`
5. Clique em **Save** — o site estará disponível em `https://seu-usuario.github.io/edson-porto-braz-site`

---

## Personalizações Obrigatórias

### 1. Número de WhatsApp
No arquivo `script.js`, linha 8:
```javascript
const PHONE = '5551999999999'; // ← Trocar pelo número real com DDI+DDD
```

### 2. Fotografia do advogado
No `index.html`, localize o bloco `advogado-placeholder` e substitua por:
```html
<img src="foto-edson.jpg" alt="Dr. Edson Porto Braz" style="width:100%; height:100%; object-fit:cover;">
```

### 3. Número OAB
No rodapé do `index.html`, substitua `OAB/RS nº XXXXX` pelo número real.

### 4. E-mail e telefone
No rodapé, atualize o telefone e e-mail de contato.

### 5. Número de clientes / anos de experiência
Na seção Stats do `index.html`, ajuste os valores `data-target` conforme a realidade do escritório.

---

## Identidade Visual Aplicada

| Elemento | Valor |
|---|---|
| Azul Navy | `#1a2332` |
| Champagne Gold | `#c9a961` |
| Gold Escuro | `#b8975a` |
| Ivory | `#f8f6f0` |
| Fonte Display | Cormorant Garamond (serif elegante) |
| Fonte Interface | Montserrat (sans-serif geométrica) |

---

## Recursos Incluídos

- ✅ Cursor personalizado dourado
- ✅ Hero com grid geométrico animado e glow ambiente
- ✅ Barra de urgência com shimmer
- ✅ Cards de dores com animação ao hover
- ✅ Cards de direitos com valores e gradiente gold
- ✅ Seção de estatísticas com contador animado
- ✅ Processo em 4 etapas com reveal progressivo
- ✅ 3 depoimentos com valores recuperados
- ✅ Seção do advogado com placeholder para foto
- ✅ CTA final com checklist e botão WhatsApp
- ✅ FAQ com accordion animado
- ✅ Botão flutuante WhatsApp com pulse
- ✅ Header com glassmorphism no scroll
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ SEO básico (meta tags, aria-labels, semântica HTML5)
- ✅ Animações de entrada com IntersectionObserver
- ✅ Paralaxe sutil no hero

---

## Domínio Personalizado (Opcional)

Para usar um domínio próprio (ex: `edsonportobraz.adv.br`):
1. Crie um arquivo `CNAME` na raiz do repositório com o domínio
2. Configure o DNS do domínio apontando para o GitHub Pages

---

*Desenvolvido com base no Manual de Identidade Visual — Versão 1.0 · Fevereiro 2026*
