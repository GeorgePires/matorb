# Missão Matemática · Matorb

Plataforma educativa em português para uma aluna do 7º ano, com explicações, exemplos passo a passo, exercícios e desafios.

Site: https://matorb.alighteft10.chatgpt.site/

## Executar localmente

Abra `dist/index.html` no navegador. Não é necessário instalar dependências para usar a aplicação.

Opcionalmente, com Python instalado:

```sh
python -m http.server 8000 --directory dist
```

Acesse http://localhost:8000.

## Organização dos arquivos

```text
dist/
  index.html        Estrutura da página e carregamento dos arquivos
  style.css         Estilos da plataforma
  tutor.css         Estilos do tutor de contas
  app.js            Conteúdo inicial, navegação e exercícios de geometria
  complemento.js    Perímetro, áreas e seleção dos desafios
  tutor-engine.js   Algoritmos de multiplicação e divisão
  tutor.js          Interface e atividades do tutor
  material/         Imagens dos materiais de estudo
```

HTML, CSS e JavaScript estão separados em arquivos por linguagem. Os arquivos JavaScript também geram trechos de HTML dinamicamente. Preserve a ordem dos scripts em `index.html`, pois compartilham funções e estado.

## Formatação

O código usa dois espaços de indentação e Prettier. Para formatar futuras alterações, instale Node.js e npm e execute:

```sh
npm install
npm run format
npm run format:check
```

As dependências servem apenas para desenvolvimento. O site continua funcionando sem elas.

## Publicar no GitHub

Use o conteúdo do pacote `Matorb-GitHub.zip`, que não contém o histórico Git nem a configuração específica do Sites. Extraia-o e crie um repositório vazio no GitHub. Na pasta extraída:

```sh
git init
git add .
git commit -m "Adiciona Missão Matemática"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

Substitua `SEU-USUARIO/SEU-REPOSITORIO` pelo destino criado. Esses comandos são para a pasta extraída, não para o checkout original ligado à hospedagem Sites.

Os materiais em `dist/material/` foram fornecidos para estudo. A inclusão no projeto não concede licença de redistribuição desses materiais.

## Conteúdo e funcionamento

Veja [LEIA-ME.md](LEIA-ME.md) para os conteúdos, regras de pontuação, acessibilidade e funcionamento do tutor.
