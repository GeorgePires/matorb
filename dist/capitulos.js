const capitulos = {
  razao: {
    n: 13,
    name: 'Razão e proporção',
    intro: 'Como uma maquete tão pequena pode manter as medidas de uma casa na proporção certa?',
    lessons: [
      [
        'Comparar com uma razão',
        'Escreva primeiro o que aparece primeiro na pergunta. Em uma turma com 8 meninas e 12 meninos, a razão entre meninas e meninos é 8/12 = 2/3. Entre meninas e o total é 8/20. O segundo número diz com que grupo você está comparando.',
      ],
      [
        'Escala, velocidade e densidade',
        'Na escala 1:100, cada centímetro no desenho representa 100 cm na realidade. Use a mesma unidade nos dois lados. Na velocidade média, divida distância por tempo. Na densidade demográfica, divida habitantes por área e escreva hab/km².',
      ],
      [
        'Reconhecer uma proporção',
        'Duas razões equivalentes formam uma proporção. Em 2/3 = 4/6, os produtos cruzados são iguais: 2 × 6 = 3 × 4. Para achar um valor desconhecido, mantenha a ordem das grandezas.',
      ],
      [
        'Escolher a regra de três',
        'Em uma receita, dobrar as porções dobra os ingredientes: a razão se mantém. Para encher o mesmo tanque, dobrar o número de torneiras iguais reduz o tempo à metade: o produto se mantém. Apenas aumentar junto não garante proporcionalidade.',
      ],
      [
        'Porcentagens e juros',
        '10% significa 10 em cada 100. Calcule a porcentagem sobre o valor indicado e some o acréscimo ou subtraia o desconto. Em juros simples, a taxa incide sempre sobre o valor inicial. Em juros compostos, incide sobre o saldo de cada período.',
      ],
    ],
    examples: [
      [
        'Uma maquete mede 5 cm na escala 1:40. Qual é a medida real?',
        'Cada centímetro da maquete vale 40 cm reais.',
        'Multiplique 5 por 40 para obter 200 cm.',
        'Divida por 100: são 2 m. O objeto real deve ser maior.',
      ],
      [
        'Três torneiras iguais enchem um tanque em 8 h. Quanto demoram quatro?',
        'Mais torneiras exigem menos tempo para o mesmo tanque.',
        'O produto torneiras × horas é constante: 3 × 8 = 24.',
        'Calcule 24 ÷ 4 = 6 horas.',
      ],
      [
        'R$ 100 rendem 10% ao mês por dois meses. O tipo de juro muda o resultado?',
        'No primeiro mês, 10% de R$ 100 são R$ 10. O saldo chega a R$ 110.',
        'Nos juros simples, some outros R$ 10. O montante é R$ 120.',
        'Nos compostos, 10% de R$ 110 são R$ 11. O montante é R$ 121.',
      ],
    ],
    practice: [
      [
        'Em 15 fichas, 6 são azuis. Qual é a razão entre azuis e o total?',
        ['6/9', '6/15', '15/6'],
        1,
        'O total inclui as azuis. A razão é 6/15 = 2/5.',
        0,
      ],
      [
        'Uma bicicleta percorreu 36 km em 2 h. Qual foi a velocidade média?',
        ['18 km/h', '72 km/h', '34 km/h'],
        0,
        'Divida 36 por 2. Em média, são 18 km por hora.',
        1,
      ],
      [
        'Na proporção 3/5 = x/20, quanto vale x?',
        ['4', '15', '12'],
        2,
        'O denominador foi multiplicado por 4. Multiplique também 3 por 4.',
        2,
      ],
      [
        'Um jogo de R$ 80 teve desconto de 25%. Qual o preço final?',
        ['R$ 20', 'R$ 60', 'R$ 100'],
        1,
        'Um quarto de 80 é 20. Subtraia o desconto: 80 − 20 = 60.',
        4,
      ],
    ],
    final: [
      [
        'Na escala 1:200, uma parede mede 3 cm no desenho. Qual é seu comprimento real?',
        ['6 m', '60 m', '600 m'],
        0,
        '3 × 200 = 600 cm, ou 6 m.',
        1,
      ],
      [
        'Em 40 km² vivem 2.000 pessoas. Qual a densidade?',
        ['80 hab/km²', '50 hab/km²', '5 hab/km²'],
        1,
        '2.000 ÷ 40 = 50 habitantes por quilômetro quadrado.',
        1,
      ],
      [
        'Para 6 pessoas, uma receita pede 4 xícaras. Quantas para 9 pessoas?',
        ['5', '8', '6'],
        2,
        'Cada quantidade deve crescer pelo fator 9/6. Então 4 × 9/6 = 6.',
        3,
      ],
      [
        'Duas bombas iguais esvaziam uma piscina em 9 h. Quanto levam três?',
        ['6 h', '13,5 h', '3 h'],
        0,
        'O trabalho exige 2 × 9 = 18 horas de uma bomba. Três levam 18 ÷ 3 = 6 h.',
        3,
      ],
      [
        'Qual o montante de R$ 200 a juros simples de 5% ao mês após 3 meses?',
        ['R$ 30', 'R$ 230', 'R$ 231,53'],
        1,
        'São R$ 10 de juros por mês. O montante inclui o capital: 200 + 30 = 230.',
        4,
      ],
    ],
  },
  probabilidade: {
    n: 14,
    name: 'Probabilidade',
    intro: 'Antes de lançar dois dados, como descobrir quais somas têm mais chance de sair?',
    lessons: [
      [
        'Previsão e acaso',
        'A 50 km/h constantes, um carro anda 100 km em duas horas. Nas mesmas condições, esse resultado é determinado. Já a próxima face de um dado é incerta: o lançamento é um experimento aleatório.',
      ],
      [
        'Listar resultados',
        'O espaço amostral reúne todos os resultados possíveis. Para dois dados de cores diferentes, registre pares na ordem das cores. (1, 2) e (2, 1) são resultados diferentes, mesmo com a mesma soma.',
      ],
      [
        'Calcular a chance',
        'Quando os resultados têm a mesma chance, divida o número de resultados favoráveis pelo número total de possíveis. Uma chance de 0% indica evento impossível. Uma de 100% indica evento certo.',
      ],
      [
        'Usar a frequência',
        'Para estimar uma chance a partir de dados, divida as ocorrências observadas pelo número de tentativas. O resultado pode variar de uma experiência para outra.',
      ],
    ],
    examples: [
      [
        'Em dois dados comuns e honestos, qual a chance de soma 4?',
        'Há 6 possibilidades no primeiro dado e 6 no segundo: 36 pares igualmente prováveis.',
        'Três pares têm soma 4: (1,3), (2,2) e (3,1).',
        'A probabilidade é 3/36 = 1/12, cerca de 8,3%.',
      ],
      [
        'Uma atleta acertou 18 de 30 cobranças. Como estimar a chance de acerto?',
        'Conte as cobranças feitas, incluindo os erros: foram 30.',
        'Divida acertos por tentativas: 18/30 = 0,6.',
        'A frequência foi 60%. Ela serve de estimativa para cobranças semelhantes.',
      ],
    ],
    practice: [
      [
        'Qual experimento é aleatório?',
        ['Calcular 4 × 3', 'Lançar uma moeda e observar a face', 'Somar 10 + 2'],
        1,
        'Antes do lançamento há duas faces possíveis. O resultado da conta já está determinado.',
        0,
      ],
      [
        'Quantos pares são possíveis com dois dados de cores diferentes?',
        ['12', '6', '36'],
        2,
        'Para cada face do primeiro dado há seis do segundo: 6 × 6 = 36.',
        1,
      ],
      [
        'Em um dado honesto, qual a chance de sair um número par?',
        ['1/2', '1/6', '2/3'],
        0,
        '2, 4 e 6 são três das seis faces. Logo 3/6 = 1/2.',
        2,
      ],
      [
        'Em 40 lançamentos houve 26 caras. Qual a frequência de caras?',
        ['26%', '65%', '40%'],
        1,
        '26 ÷ 40 = 0,65, que corresponde a 65%.',
        3,
      ],
    ],
    final: [
      [
        'Dois lançamentos de uma moeda honesta são independentes. Qual a chance de faces iguais?',
        ['1/4', '1/2', '1'],
        1,
        'Entre cara–cara, cara–coroa, coroa–cara e coroa–coroa, dois dos quatro pares têm faces iguais.',
        1,
      ],
      [
        'Qual evento é impossível com um dado comum?',
        ['Sair 6', 'Sair menos que 7', 'Sair 8'],
        2,
        'As únicas faces são 1, 2, 3, 4, 5 e 6.',
        2,
      ],
      [
        'Há 3 fichas verdes e 5 amarelas, todas com a mesma chance. Qual a chance de verde?',
        ['3/5', '5/8', '3/8'],
        2,
        'São três resultados favoráveis entre oito fichas.',
        2,
      ],
      [
        'Uma goleira defendeu 12 de 20 chutes. Qual a chance estimada de defesa?',
        ['60%', '40%', '12%'],
        0,
        'A frequência de defesas é 12/20 = 0,6.',
        3,
      ],
    ],
  },
  pesquisas: {
    n: 15,
    name: 'Pesquisas estatísticas',
    intro:
      'Como ouvir uma parte da escola e apresentar uma conclusão que os dados realmente sustentem?',
    lessons: [
      [
        'População e amostra',
        'Defina quem você quer conhecer. Ouvir todos os alunos da escola é fazer um censo dessa população. Ouvir parte deles é fazer uma pesquisa amostral. Represente diferentes turmas e turnos para evitar ouvir apenas um grupo.',
      ],
      [
        'Fazer boas perguntas',
        'Na pesquisa espontânea, cada pessoa dá sua própria resposta. Na estimulada, escolhe entre alternativas apresentadas. Faça uma pergunta clara, sem sugerir uma resposta preferida.',
      ],
      [
        'Organizar e representar',
        'Conte as respostas de cada categoria e registre o total. Use barras para comparar categorias, linhas para acompanhar mudanças ao longo do tempo e setores para mostrar partes de um todo. Em um gráfico de setores, 100% correspondem a 360°.',
      ],
      [
        'Da coleta à conclusão',
        'Defina a pergunta, selecione os participantes, registre as respostas e organize a tabela. Confira título, escala, legenda e fonte do gráfico. No relatório, informe quem respondeu, quantas pessoas participaram e qual conclusão os dados permitem.',
      ],
    ],
    examples: [
      [
        'Como descobrir qual oficina as turmas do 7º ano preferem?',
        'Defina a população: todos os alunos do 7º ano. Se for usar amostra, inclua alunos das diferentes turmas.',
        'Pergunte “Qual oficina você prefere?” e ofereça as mesmas opções a todos para uma pesquisa estimulada.',
        'Conte os votos por oficina. Em um gráfico de barras, compare suas alturas e identifique a oficina mais votada na amostra.',
      ],
      [
        'Em 20 respostas sobre um treino, 13 disseram sim. Como mostrar essa parte em um gráfico de setores?',
        'Organize as contagens: 13 sim e 7 não; ao todo, 20.',
        'A parte do sim é 13/20 = 65%. A do não é 35%.',
        'No círculo, o sim ocupa 0,65 × 360° = 234°. Os 126° restantes representam o não.',
      ],
    ],
    practice: [
      [
        'Uma escola ouviu todos os seus alunos. Que tipo de pesquisa realizou?',
        ['Amostral', 'Censitária', 'Experimental'],
        1,
        'Todos os integrantes da população escolhida participaram.',
        0,
      ],
      [
        '“Qual livro você indicaria?” Sem lista de opções, a resposta é…',
        ['Espontânea', 'Estimulada', 'Censitária'],
        0,
        'A pessoa escolhe livremente o título. Censitária descreve quem foi ouvido.',
        1,
      ],
      [
        'Qual gráfico mostra melhor a variação da temperatura ao longo de uma semana?',
        ['Setores', 'Barras de preferências', 'Linhas'],
        2,
        'Os pontos ligados em ordem de tempo ajudam a acompanhar subidas e quedas.',
        2,
      ],
      [
        'De 30 estudantes, 12 escolheram música. Quanto isso representa?',
        ['12%', '40%', '60%'],
        1,
        '12 ÷ 30 = 0,4. Multiplique por 100 para obter 40%.',
        2,
      ],
    ],
    final: [
      [
        'Para conhecer todos os turnos da escola, qual amostra faz mais sentido?',
        ['Só o time de vôlei', 'Apenas uma sala', 'Alunos de diferentes turmas e turnos'],
        2,
        'Ouvir grupos variados ajuda a representar a população definida.',
        0,
      ],
      [
        'Uma aluna mostra três opções de lanche antes de perguntar a preferência. A pesquisa é…',
        ['Estimulada', 'Espontânea', 'Obrigatoriamente censitária'],
        0,
        'A lista de opções orienta a escolha, o que caracteriza a pesquisa estimulada.',
        1,
      ],
      [
        'Uma categoria corresponde a 25% das respostas. Qual é o ângulo do seu setor?',
        ['25°', '90°', '180°'],
        1,
        'Um quarto de 360° corresponde a 90°.',
        2,
      ],
      [
        'Um relatório diz que 8 dos 12 entrevistados preferem bicicleta. Qual conclusão é sustentada?',
        [
          'Toda a escola prefere bicicleta',
          'Só 8 pessoas na cidade usam bicicleta',
          'A maioria dos entrevistados prefere bicicleta',
        ],
        2,
        'O grupo ouvido tem 12 pessoas. Oito são mais da metade desse grupo.',
        3,
      ],
    ],
  },
  volume: {
    n: 16,
    name: 'Medida de volume',
    intro:
      'Quantos cubinhos cabem numa caixa? Pense primeiro em uma camada e depois empilhe as camadas.',
    lessons: [
      [
        'Contar em três dimensões',
        'Volume mede o espaço ocupado. Um cubinho de aresta 1 cm ocupa 1 cm³. Em uma caixa retangular, conte os cubinhos da base e multiplique pelo número de camadas.',
      ],
      [
        'Medir uma caixa',
        'Num paralelepípedo retângulo, V = comprimento × largura × altura. Use a mesma unidade nas três medidas. Para saber quanto cabe no recipiente, use as dimensões internas.',
      ],
      [
        'Trocar a unidade',
        'Um cubo de 1 m de aresta tem 10 dm em cada direção. Cabem 10 × 10 × 10 = 1.000 cubos de 1 dm³. Por isso cada passo entre unidades cúbicas vizinhas vale 1.000. Para uma unidade maior, divida.',
      ],
      [
        'Relacionar volume e capacidade',
        'Um espaço interno de 1 dm³ comporta 1 litro. Assim, 1 m³ corresponde a 1.000 L e 1 cm³ a 1 mL. Para sólidos formados por vários blocos, some os volumes das partes sem contar nenhuma duas vezes.',
      ],
    ],
    examples: [
      [
        'Quantos cubinhos de 1 cm³ preenchem uma caixa de 7 cm por 5 cm por 4 cm?',
        'Na base cabem 7 fileiras com 5 cubinhos: 35 cubinhos.',
        'A altura de 4 cm permite empilhar 4 camadas iguais.',
        '35 × 4 = 140 cubinhos. A caixa tem volume de 140 cm³.',
      ],
      [
        'Um aquário tem fundo de 50 cm por 30 cm. Qual o volume de uma camada de areia de 5 cm?',
        'Use 5 cm como altura: é a espessura da areia.',
        'Calcule 50 × 30 × 5 = 7.500 cm³.',
        'Como 1.000 cm³ = 1 dm³, essa camada ocupa 7,5 dm³.',
      ],
    ],
    practice: [
      [
        'Uma camada contém 12 cubinhos de 1 cm³. Qual o volume de 3 camadas iguais?',
        ['15 cm³', '36 cm³', '4 cm³'],
        1,
        'São 12 cubinhos em cada uma das 3 camadas: 12 × 3 = 36.',
        0,
      ],
      [
        'Uma caixa mede 4 cm por 3 cm por 2 cm. Seu volume é…',
        ['24 cm³', '9 cm²', '12 cm³'],
        0,
        'Multiplique as três medidas: 4 × 3 × 2 = 24 cm³.',
        1,
      ],
      [
        'Quantos dm³ correspondem a 2 m³?',
        ['20', '200', '2.000'],
        2,
        'Cada metro cúbico equivale a 1.000 dm³. Duas vezes 1.000 são 2.000.',
        2,
      ],
      [
        'Um recipiente tem capacidade de 6 litros. Qual o volume interno?',
        ['6 cm³', '6 dm³', '6 m³'],
        1,
        'Cada litro corresponde a um decímetro cúbico.',
        3,
      ],
    ],
    final: [
      [
        'Uma caixa de base 20 cm² ocupa 100 cm³. Qual a altura?',
        ['5 cm', '80 cm', '2 cm'],
        0,
        'Volume é área da base × altura. Logo, 100 ÷ 20 = 5 cm.',
        1,
      ],
      [
        'Uma cisterna tem dimensões internas de 4 m, 2 m e 1,5 m. Quantos litros cabem?',
        ['12 L', '1.200 L', '12.000 L'],
        2,
        'O volume é 4 × 2 × 1,5 = 12 m³. Multiplique por 1.000 para obter litros.',
        3,
      ],
      [
        'Dois blocos unidos sem sobreposição ocupam 18 cm³ e 12 cm³. Qual é o volume total?',
        ['6 cm³', '30 cm³', '216 cm³'],
        1,
        'Cada bloco ocupa uma parte diferente do espaço: 18 + 12 = 30.',
        3,
      ],
      [
        'Um recipiente tem lados internos de 20 cm, 10 cm e 1 dm. Qual é seu volume?',
        ['200 cm³', '2.000 cm³', '20.000 cm³'],
        1,
        'Converta 1 dm em 10 cm antes de multiplicar: 20 × 10 × 10 = 2.000 cm³.',
        2,
      ],
    ],
  },
};
function chapterTabs(general) {
  return Object.entries(capitulos)
    .map(([id, chapter]) => {
      const active = !general && studyUnit === id;
      return `<button class="chip ${active ? 'selected' : ''}" data-unit="${id}" aria-pressed="${active}">${chapter.name}</button>`;
    })
    .join('');
}

function chapterLink(chapter) {
  return `<a class="text-button" href="material/capitulo-${chapter.n}.pdf" target="_blank" rel="noopener">${chapter.name} · PDF ↗</a>`;
}

function chapterVisual(id) {
  const figures = {
    razao: [
      'Uma receita que cresce na mesma proporção',
      ['1 copo de suco + 2 de água', '2 copos de suco + 4 de água', '3 copos de suco + 6 de água'],
      'Para cada copo de suco, use dois de água. O sabor se mantém.',
    ],
    probabilidade: [
      'Quais faces do dado são pares?',
      ['⚀ 1', '⚁ 2 ✓', '⚂ 3', '⚃ 4 ✓', '⚄ 5', '⚅ 6 ✓'],
      'Em um dado equilibrado, 3 das 6 faces têm números pares. A chance é 3/6, ou 50%.',
    ],
    pesquisas: [
      'Como 20 estudantes chegam à escola?',
      ['A pé · 10 votos', 'Ônibus · 6 votos', 'Bicicleta · 4 votos'],
      'Cada voto representa uma pessoa. Metade deste grupo chega a pé.',
    ],
    volume: [
      'Monte uma caixa em camadas',
      ['1ª camada · 3 × 2 cubinhos', '2ª camada · 3 × 2 cubinhos'],
      'Cada camada tem 6 cubinhos de 1 cm³. Duas camadas ocupam 12 cm³.',
    ],
  };
  const [title, items, note] = figures[id];
  return `<figure class="panel chapter-figure"><h2>${title}</h2><div class="chapter-tiles">${items.map((item, i) => `<div><strong>${item}</strong>${id === 'pesquisas' ? '<meter min="0" max="20" value="' + [10, 6, 4][i] + '"></meter>' : id === 'volume' ? '<span class="cube-layer" aria-hidden="true">' + '<i></i>'.repeat(6) + '</span>' : ''}</div>`).join('')}</div><figcaption>${note}</figcaption></figure>`;
}

function chapterLearn(chapter) {
  $('#main').innerHTML =
    hero('CAPÍTULO ' + chapter.n, chapter.name, chapter.intro) +
    unitTabs() +
    chapterVisual(studyUnit) +
    '<div class="cards concept-cards">' +
    chapter.lessons
      .map(([title, text]) => `<article class="card"><h3>${title}</h3><p>${text}</p></article>`)
      .join('') +
    '</div>' +
    `<div class="end-row">${chapterLink(chapter)}<button class="primary" id="chapter-next">Ver exemplos passo a passo →</button></div>`;
  bindUnits();
  $('#chapter-next').onclick = () => navigate(1);
}

function chapterExamples(chapter) {
  $('#main').innerHTML =
    hero(
      'ENTENDER · CAPÍTULO ' + chapter.n,
      chapter.name,
      'Tente explicar sua ideia. Depois, abra a resolução para conferir cada passo.',
    ) +
    unitTabs() +
    chapter.examples
      .map(
        ([prompt, ...steps]) =>
          `<article class="panel"><h2>${prompt}</h2><details><summary>Ver resolução passo a passo</summary><ol>${steps.map((step) => '<li>' + step + '</li>').join('')}</ol></details></article>`,
      )
      .join('') +
    `<div class="end-row">${chapterLink(chapter)}<button class="primary" id="chapter-next">Praticar este capítulo →</button></div>`;
  bindUnits();
  $('#chapter-next').onclick = () => {
    reset('practice');
    navigate(2);
  };
}
