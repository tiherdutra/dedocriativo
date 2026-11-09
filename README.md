# Dedo Criativo · Site Oficial

Site estático pronto para hospedar no GitHub Pages (ou qualquer hospedagem estática).

## Estrutura

```
dedocriativo-site/
├── index.html              → Página inicial
├── projetos.html           → Listagem de projetos
├── solucoes.html           → Pacotes e como funciona
├── sobre.html              → Sua história
├── contato.html            → Formulário + contatos diretos
├── projetos/               → Páginas individuais de cada projeto
│   ├── aquila.html
│   ├── casamento-jl.html
│   ├── site-institucional.html
│   ├── livro-gestao.html
│   ├── ensaio-familia.html
│   └── portfolio-fotografo.html
├── css/
│   └── style.css           → Toda a estilização
├── js/
│   └── main.js             → Menu mobile + filtro de projetos
└── assets/
    ├── logo.svg            → SUBSTITUIR pelo logo real
    └── foto-perfil.svg     → SUBSTITUIR por foto real (.jpg ou .png)
```

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (sugestão de nome: `dedocriativo` ou `dedocriativo.github.io`)
2. Faça upload de todos os arquivos deste ZIP para o repositório
3. Vá em **Settings → Pages**
4. Em **Source**, escolha `Deploy from a branch`
5. Selecione a branch `main` e a pasta `/root`
6. Salve. Em 1-2 minutos seu site estará no ar em `https://[seu-usuario].github.io/[nome-do-repo]`

Dica: se quiser o endereço `dedocriativo.com`, compre o domínio em qualquer registrador (Registro.br, Hostinger) e configure em **Settings → Pages → Custom domain**.

## O que você precisa substituir antes de publicar

### 1. Logo
Substitua o arquivo `assets/logo.svg` pelo seu logo final. Pode ser SVG, PNG ou JPG — basta manter o mesmo nome ou ajustar o `src` no HTML.

Recomendação: logo na horizontal, fundo transparente, altura entre 40-60px.

### 2. Sua foto
Substitua `assets/foto-perfil.svg` por uma foto profissional sua. Formato vertical (3:4), preferencialmente JPG.

A foto aparece em 3 lugares:
- Home (seção de apresentação)
- Sobre (foto grande no topo)
- Contato (foto pequena ao lado do formulário)

### 3. Número de WhatsApp
Procure por `5500000000000` em todos os arquivos HTML e substitua pelo seu número no formato internacional (55 + DDD + número, sem espaços ou símbolos).

Exemplo: `5531999998888`

### 4. Formulário de contato
O formulário usa o [Formspree](https://formspree.io) (gratuito até 50 envios/mês). Crie uma conta lá, pegue seu código e substitua `seu-codigo-aqui` no arquivo `contato.html`:

```html
<form action="https://formspree.io/f/seu-codigo-aqui" method="POST">
```

### 5. Preços dos pacotes
No arquivo `solucoes.html`, substitua `R$ [X]` pelos seus valores reais. Mantenha sempre o "A partir de" pra dar flexibilidade.

### 6. Projetos do portfólio
Cada projeto em `projetos/` tem placeholders coloridos onde devem entrar as fotos reais. Substitua os blocos `<div class="project-cover-placeholder">` e `<div class="gallery-item">` por tags `<img src="..." />` com suas fotos.

### 7. Logos de empresas (página Sobre)
Na página `sobre.html`, os textos "Accenture", "Aquila", "Band", "SEE-MG" estão como texto. Se quiser usar os logos reais, substitua os `<span class="cred-logo">` por `<img src="..." class="cred-logo" />`.

## Personalização rápida

### Mudar cores
Edite as variáveis no topo do `css/style.css`:

```css
:root {
  --color-bg: #F5F5F0;       /* Fundo principal */
  --color-text: #1A1A1A;     /* Texto */
  --color-accent: #C9A961;   /* Cor de destaque (dourado) */
  --color-dark: #2C3E50;     /* Azul escuro */
}
```

### Mudar fontes
As fontes (Playfair Display + Inter) são carregadas via Google Fonts no `<head>` de cada página. Para trocar, basta trocar o link e o nome nas variáveis `--font-serif` e `--font-sans` no CSS.

## Manutenção no dia a dia

- **Adicionar novo projeto:** duplique qualquer arquivo em `projetos/`, renomeie, troque o conteúdo, e adicione um card novo em `projetos.html`
- **Mudar texto:** edite direto o HTML, é tudo português claro sem programação
- **Atualizar foto:** só substituir o arquivo em `assets/`, mantendo o nome

## Compatibilidade

- Funciona em todos os navegadores modernos
- 100% responsivo (celular, tablet, desktop)
- Sem dependência de framework ou build
- Carrega rápido (sem bibliotecas pesadas)

---

Dúvidas? Me chama: tiherdutra@gmail.com
