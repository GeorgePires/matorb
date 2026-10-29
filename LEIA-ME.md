# Órbita — Geometria em ação

Aplicação em português para o 7º ano. Não exige instalação, conta, bibliotecas externas ou conexão à internet para uso local.

## Como executar

1. Extraia o ZIP completo, preservando as pastas.
2. Abra `dist/index.html` em um navegador moderno (Edge, Chrome, Firefox ou Safari).
3. Use as etapas Aprender, Entender, Praticar e Desafio final.

Opcionalmente, com Python instalado, abra um terminal nesta pasta, execute `python -m http.server 8000 --directory dist` e acesse `http://localhost:8000`.

## Conteúdo e escopo

Fonte: primeiras oito páginas do PDF Matematica-volume-3-paginas-68-a-88-tela-cheia(1).pdf, correspondentes às páginas impressas 68–75. As imagens dessas páginas estão em dist/material e disponíveis no botão Consultar material.

Inclui distinção entre circunferência, círculo e esfera; centro, raio, corda e diâmetro; lugar geométrico; compasso; comprimento; aproximação de π e ideia histórica dos polígonos; atividades da fogueira, região ao redor das pessoas, cordas, caminhada, pistas, Kandinsky e azulejo. Atividades de papel, régua e compasso são propostas de autoestudo e não entram na nota. As medidas físicas da figura de cordas devem ser feitas no material impresso, não na tela.

Ampliação de 27/10/2026: quatro fotos fornecidas pelo responsável, com duas páginas de resumo e duas de revisão. Acrescenta perímetro de retângulo e quadrado, área de retângulo/quadrado/triângulo, altura perpendicular, composição e subtração de áreas, conversão de unidades quadradas, distinção entre área e perímetro. Não inclui cálculo de área do círculo nem volumes. As fotos estão no botão Consultar material; enunciados foram adaptados para a tela, preservando os dados, as alternativas e os conceitos.

Roteiro recomendado: revisar a base circular; estudar contorno versus superfície; resolver áreas e composição; treinar conversões; fazer o simulado da folha e revisar cada erro. Há cinco marcações manuais de estudo salvas apenas no navegador, quando disponível, com opção de limpar. As marcações não são avaliação de domínio.

As respostas didáticas da conversa anterior não puderam ser recuperadas como texto: a aplicação foi elaborada diretamente a partir das oito páginas, preservando os requisitos e a mensagem de comemoração recuperados da conversa.

## Funcionamento

### Tutor de contas

O botão **Tutor de contas**, ao lado de **Consultar material**, abre um espaço independente do percurso de geometria:

- **Descobrir:** grupos iguais, repartição, relação entre multiplicar/dividir, tabuada visual de 1 a 10, estratégias de dobro/metade/decomposição, valor posicional e conferência sem calculadora.
- **Ver contas:** sete exemplos de contas armadas com etapas que podem ser avançadas, revistas ou reiniciadas. Inclui transporte de dezenas, produtos parciais, divisões exatas, resto, divisor de dois algarismos e zero no quociente.
- **Meu caderno:** 18 exercícios (3 por nível e operação), com digitação do resultado de cada etapa, rascunho, dicas, feedback detalhado e solução para revisão. Os níveis são fácil, médio e difícil.
- Uma estrela por conta diferente concluída na sessão, inclusive com ajuda. Repetir a mesma conta não gera estrelas extras. Conquistas em 1, 3 e 6 estrelas. O indicador de etapas certas na primeira tentativa não é uma nota.
- A conta, o rascunho e as estrelas permanecem ao alternar entre tutor e geometria enquanto a página estiver aberta. Recarregar a página reinicia o tutor. Trocar operação, nível ou conta também reinicia a tentativa atual.
- O tutor trabalha com números naturais e resto inteiro. Não apresenta divisão por zero nem aritmética decimal nesta versão. O rascunho é livre; a validação acontece nos campos de cada etapa.

### Exercícios de geometria

- A seleção de conteúdo acompanha as quatro etapas. Circunferência e esfera: 12 questões de prática e 10 no desafio. Perímetro e áreas: 10 questões de prática e 10 no desafio. Na etapa Desafio final, a opção Revisão geral reúne 20 questões, sendo 10 de cada conteúdo.
- Gabarito da folha: 1-C, 2-D, 3-B, 4-C, 5-C, 6-C, 7-B, 8-D, 9-C, 10-B. Cada resposta tem explicação e orientação sobre confusões comuns.
- Dois blocos de estudo: Circunferência e esfera; Perímetro e áreas. Seis exemplos novos com revelação gradual dos passos, laboratório de área/perímetro e conversor m² ↔ cm².
- Resposta confirmada fica bloqueada até avançar, impedindo pontuação duplicada.
- Pontuação = acertos / total de questões da etapa × 100; acertos e erros finais somam o total.
- De 90% a 100%: mensagem pedida, conquista e confetes. Em 100%, destaque para todos os acertos.
- De 80% a menos de 90%: mensagem positiva. Abaixo de 80%: orientação construtiva.
- Revisão disponível antes de responder e revisão de todas as respostas ao final, inclusive os erros nas notas altas.
- Refazer ou recomeçar zera a etapa. Mudar entre etapas de exercícios, trocar o desafio ou selecionar outro conteúdo inicia uma nova tentativa. Selecionar novamente o mesmo conteúdo preserva a tentativa. Entrar no desafio a partir do estudo/prática abre o desafio do conteúdo escolhido; a mistura é opcional na Revisão geral. Recarregar a página reinicia as respostas; não há persistência de notas ou coleta de dados. Somente as marcações do roteiro ficam salvas localmente.
- Navegação por teclado, foco visível, diálogos fecháveis por Escape, progresso identificado, feedback textual além de cores e respeito a movimento reduzido.

## Arquivos

`dist/index.html`: estrutura; `dist/style.css`: apresentação responsiva; `dist/app.js`: conteúdo original; `dist/complemento.js`: conteúdo e interações da ampliação; `dist/tutor-engine.js`: etapas dos algoritmos; `dist/tutor.js` e `dist/tutor.css`: interface do tutor; `dist/material/`: oito páginas do PDF e quatro fotos novas.

O site hospedado está público em https://matorb.alighteft10.chatgpt.site/. O pacote local pode ser usado offline sem acesso ao site.
