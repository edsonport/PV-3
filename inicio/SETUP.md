# 🚀 Setup Automático - Edson Porto Braz Advocacia

## Para GitHub Pages / Vercel / Netlify

### Opção 1: GitHub (Recomendado)

1. **Faça upload no GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/edson-porto-braz-advocacia.git
   git push -u origin main
   ```

2. **Conecte ao Vercel**:
   - Vá para https://vercel.com
   - Clique em "New Project"
   - Selecione seu repositório GitHub
   - Vercel vai instalar automaticamente e fazer deploy
   - Seu site estará online em minutos!

### Opção 2: Netlify

1. **Faça upload no GitHub** (mesmo passo acima)

2. **Conecte ao Netlify**:
   - Vá para https://netlify.com
   - Clique em "New site from Git"
   - Selecione seu repositório GitHub
   - Configurações automáticas:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Clique em "Deploy"
   - Seu site estará online!

### Opção 3: Seu Próprio Servidor

```bash
# SSH no seu servidor
ssh seu-usuario@seu-servidor.com

# Clone o repositório
git clone https://github.com/seu-usuario/edson-porto-braz-advocacia.git
cd edson-porto-braz-advocacia

# Instale dependências
npm install

# Faça o build
npm run build

# Sirva os arquivos (use nginx, apache, ou outro servidor)
# Os arquivos compilados estão em ./dist
```

## ✅ O que está incluído

- ✅ Todos os componentes React
- ✅ Estilos Tailwind CSS
- ✅ Configurações (package.json, vite.config.ts, etc)
- ✅ README.md com documentação
- ❌ node_modules (será instalado automaticamente)

## 📋 Estrutura

```
edson-porto-braz-advocacia/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── contexts/
│   │   ├── lib/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 Próximos Passos

1. Descompacte o arquivo
2. Faça upload para GitHub
3. Conecte a Vercel ou Netlify
4. Seu site estará online automaticamente!

**Tudo é instalado e compilado automaticamente pela plataforma!**
