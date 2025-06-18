# 📋 INSTRUÇÕES DE CONFIGURAÇÃO - SFING TROFÉUS

## ⚠️ AÇÃO OBRIGATÓRIA: Configurar Número do WhatsApp

Antes de fazer o deploy da página, você DEVE configurar o número do WhatsApp da SFING Troféus:

### Passo 1: Localizar os Placeholders
Abra o arquivo `index.html` e procure por todas as ocorrências de:
```
[NÚMERO DE WHATSAPP DA SFING A SER FORNECIDO DEPOIS]
```

### Passo 2: Substituir pelo Número Real
Substitua TODAS as ocorrências pelo número real da SFING Troféus no formato:
```
5511999999999
```
(Onde 55 = código do Brasil, 11 = DDD, 999999999 = número do telefone)

### Exemplo de Substituição:
**ANTES:**
```html
<a href="https://wa.me/[NÚMERO DE WHATSAPP DA SFING A SER FORNECIDO DEPOIS]?text=...">
```

**DEPOIS:**
```html
<a href="https://wa.me/5511999999999?text=...">
```

### Locais que Precisam ser Alterados:
1. Botão CTA principal (linha ~95)
2. Botão flutuante do WhatsApp (linha ~108)
3. Comentários no JavaScript (linha ~115)

## 📸 Adicionar Imagens da Galeria

### Passo 1: Criar Pasta de Imagens
Crie uma pasta chamada `images` na raiz do projeto.

### Passo 2: Adicionar Imagens
Adicione imagens de alta qualidade dos produtos da SFING:
- `trofeu-acrilico-exemplo.jpg`
- `medalha-mdf-exemplo.jpg`
- `trofeu-vidro-exemplo.jpg`

### Passo 3: Atualizar o HTML
Na seção "Galeria de Exemplos", substitua os comentários HTML pelos elementos `<img>` reais:

```html
<div class="gallery-item">
    <img src="./images/trofeu-acrilico-exemplo.jpg" alt="Troféu de Acrílico Personalizado">
    <h4>Troféus de Acrílico</h4>
    <p>Design moderno com cortes precisos a laser e transparência elegante</p>
</div>
```

## 🚀 Deploy no GitHub Pages

### Passo 1: Criar Repositório
1. Crie um novo repositório no GitHub
2. Nomeie como `sfing-trofeus-landing-page` (ou similar)

### Passo 2: Upload dos Arquivos
Faça upload dos seguintes arquivos:
- `index.html`
- `style.css`
- `README.md`
- `.gitignore`
- Pasta `images/` (com as imagens dos produtos)

### Passo 3: Ativar GitHub Pages
1. Vá em **Settings** do repositório
2. Clique em **Pages** no menu lateral
3. Em **Source**, selecione `Deploy from a branch`
4. Escolha a branch `main` e pasta `/ (root)`
5. Clique em **Save**

### Passo 4: Acessar a Página
Após alguns minutos, sua página estará disponível em:
```
https://[SEU_USUARIO].github.io/[NOME_DO_REPOSITORIO]/
```

## ✅ Checklist Final

- [ ] Número do WhatsApp configurado em todos os links
- [ ] Imagens adicionadas na pasta `images/`
- [ ] HTML atualizado com as imagens reais
- [ ] Repositório criado no GitHub
- [ ] Arquivos enviados para o repositório
- [ ] GitHub Pages ativado
- [ ] Página testada e funcionando

## 📞 Suporte

Se precisar de ajuda com algum passo, consulte a documentação do GitHub Pages ou entre em contato com o desenvolvedor.

