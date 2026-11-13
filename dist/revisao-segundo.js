// As referências usam a numeração impressa do livro.
const secondReviewItems = {
  razao: [
    [
      0,
      'Na turma de Enzo, há uma menina para cada dois meninos. Se há 10 meninas, quantos estudantes há ao todo?',
      '15|20|30|40',
      2,
      'Forme dez grupos com uma menina e dois meninos em cada. São 10 meninas + 20 meninos = 30 estudantes.',
      '9, atividade 1c',
    ],
    [
      1,
      'No mapa do tesouro, a escala é 1 para 58.000.000. Um segmento mede 7,6 cm no mapa. Qual é sua medida real?',
      '440,8 km|4.408 km|44.080 km|440.800 km',
      1,
      'Cada centímetro representa 58.000.000 cm, ou 580 km. Multiplique 7,6 por 580 para obter 4.408 km.',
      '13, atividade 5',
    ],
    [
      2,
      'Uma tinta usa 3 copos de amarelo para 2 de azul. Para manter a cor com 8 copos de azul, quantos de amarelo são necessários?',
      '6|9|10|12',
      3,
      'O azul passou de 2 para 8, ficando quatro vezes maior. Multiplique também o amarelo por quatro. São 3 × 4 = 12 copos.',
    ],
    [
      3,
      'Duas impressoras iguais levam 18 minutos para imprimir os convites de uma feira. Com três impressoras dividindo igualmente o mesmo trabalho, quanto tempo será necessário?',
      '12 minutos|15 minutos|21 minutos|27 minutos',
      0,
      'O trabalho equivale a 2 × 18 = 36 minutos de uma impressora. Dividindo pelas três máquinas, são 12 minutos.',
    ],
    [
      4,
      'Uma camiseta de R$ 60 recebeu desconto de 15%. Qual será o preço pago?',
      'R$ 9|R$ 45|R$ 51|R$ 69',
      2,
      '10% de 60 são 6 e 5% são 3. O desconto é R$ 9. Subtraia esse valor de R$ 60 para chegar a R$ 51.',
    ],
  ],
  probabilidade: [
    [
      2,
      'Uma urna contém 6 bolas pretas, 5 azuis e 4 verdes, com a mesma chance de sorteio. Qual é a probabilidade de retirar uma bola preta ou azul?',
      '1/15|11/15|6/11|4/15',
      1,
      'Das 15 bolas, 6 + 5 = 11 atendem ao pedido. Como será retirada uma única bola, os dois grupos podem ser somados.',
      '42, atividade 3d',
    ],
    [
      2,
      'Em uma caixa há 12 lâmpadas, das quais 3 estão queimadas. Escolhendo uma ao acaso, qual é a chance de ela funcionar?',
      '1/4|1/3|2/3|3/4',
      3,
      'Restam 12 − 3 = 9 lâmpadas que funcionam. A chance é 9/12, que simplifica para 3/4.',
      '43, atividade 6',
    ],
    [
      1,
      'Bia lança uma moeda e gira uma roleta com três setores numerados. Ela anota a face da moeda e o número sorteado. Quantos pares diferentes pode registrar?',
      '5|6|8|9',
      1,
      'Cada uma das duas faces pode aparecer com cada um dos três números. São 2 × 3 = 6 pares possíveis.',
    ],
    [
      3,
      'Em 50 lançamentos de um avião de papel, 14 passaram de uma linha. Qual foi a frequência de lançamentos que passaram da linha?',
      '14%|36%|28%|50%',
      2,
      'Calcule 14/50. Dobrar os dois termos dá 28/100, ou 28% das tentativas observadas.',
    ],
    [
      0,
      'Você sorteia uma ficha de um saquinho que contém apenas fichas numeradas de 2 a 8. Qual acontecimento é impossível?',
      'Sair um número par|Sair um número menor que 5|Sair o número 8|Sair um número maior que 8',
      3,
      'O maior número disponível é 8. Nenhuma ficha satisfaz a condição de ser maior que 8, então a chance é zero.',
    ],
  ],
  pesquisas: [
    [
      1,
      'Na pesquisa sobre uma vacina, os voluntários devem informar sua profissão. Para obter respostas espontâneas, como fazer a pergunta?',
      'Qual é sua profissão? Deixe a pessoa responder livremente.|Você trabalha na saúde? Responda sim ou não.|Escolha entre quatro profissões da lista.|Marque a profissão mais parecida numa lista fechada.',
      0,
      'Uma resposta espontânea é formulada pela própria pessoa. Oferecer alternativas transforma a pergunta em estimulada.',
      '54, atividade 1c',
    ],
    [
      0,
      'A eleição será em 25 de janeiro. Quais dados das sondagens descritas no livro oferecem a melhor base para prever o apoio ao presidente?',
      '500 eleitores sorteados em 6 de janeiro|500 eleitores sorteados em 20 de janeiro|1.000 eleitores sorteados em 20 de janeiro|1.000 leitores que telefonaram para votar em 20 de janeiro',
      2,
      'A terceira sondagem combina data próxima da eleição, sorteio e maior amostra entre os levantamentos aleatórios. Quem liga por conta própria pode ter um perfil diferente do eleitorado.',
      '54, atividade 2',
    ],
    [
      2,
      'O clube registrou a quantidade de livros emprestados em cada mês do ano. Qual gráfico permite acompanhar melhor as subidas e quedas ao longo dos meses?',
      'Gráfico de setores com as capas dos livros|Gráfico de linhas com os meses em ordem|Uma barra com o total do ano|Um setor para cada autor',
      1,
      'Nos gráficos de linhas, cada ponto pode representar um mês. Os segmentos entre os pontos ajudam a perceber aumentos e quedas.',
    ],
    [
      2,
      'Em 40 votos para o passeio, o museu recebeu 14. Que percentual dos votos deve aparecer ao lado de “museu”?',
      '14%|26%|40%|35%',
      3,
      'A parte é 14 e o total é 40. Divida 14 por 40 para obter 0,35. Multiplique por 100 para chegar a 35%.',
    ],
    [
      3,
      'Apenas 18 participantes do clube de xadrez responderam a uma pesquisa. Doze preferem encontros à tarde. Qual conclusão os dados permitem?',
      'Toda a escola prefere a tarde.|Doze dos 18 participantes ouvidos preferem a tarde.|Todos os membros do clube preferem a tarde.|A manhã não recebeu votos.',
      1,
      'O relatório deve indicar quem respondeu. A pesquisa permite afirmar a preferência de 12 participantes. Ela não informa a opinião da escola inteira.',
    ],
  ],
  volume: [
    [
      3,
      'Uma cisterna retangular tem 1,5 m de profundidade, 4 m de comprimento e 2 m de largura internos. Quantos litros cabem nela?',
      '12 L|120 L|1.200 L|12.000 L',
      3,
      'Multiplique 1,5 × 4 × 2 para obter 12 m³. Cada metro cúbico comporta 1.000 L, totalizando 12.000 L.',
      '77, atividade 5a',
    ],
    [
      1,
      'Uma piscina de 50 m por 25 m tem 2 m de profundidade. A água está 20 cm abaixo da borda. Qual é o volume de água?',
      '2.250 m³|2.500 m³|250 m³|1.800 m³',
      0,
      'Converta 20 cm em 0,20 m. A altura da água é 2 − 0,20 = 1,80 m. O volume é 50 × 25 × 1,80 = 2.250 m³.',
      '77, atividade 6',
    ],
    [
      0,
      'Uma construção tem 3 camadas iguais. Em cada camada há 4 fileiras de 6 cubinhos de 1 cm³. Qual é o volume da construção?',
      '13 cm³|24 cm³|72 cm³|36 cm³',
      2,
      'Conte 4 × 6 = 24 cubinhos por camada. Três camadas contêm 72 cubinhos e cada um ocupa 1 cm³.',
    ],
    [
      2,
      'Um pote tem capacidade de 0,85 dm³. Qual medida representa a mesma capacidade?',
      '85 mL|850 mL|8.500 mL|0,85 mL',
      1,
      'Um decímetro cúbico equivale a 1 litro. Logo, 0,85 dm³ = 0,85 L = 850 mL.',
    ],
    [
      1,
      'A base interna de uma caixa retangular mede 90 cm². Até que altura a água chega quando colocamos 540 cm³ nela?',
      '6 cm|45 cm|60 cm|450 cm',
      0,
      'Uma camada de água de 1 cm ocupa 90 cm³. Divida 540 por 90. São seis camadas e a altura é 6 cm.',
    ],
  ],
};

function buildSecondReview() {
  return Object.entries(secondReviewItems).flatMap(([unit, items]) =>
    items.map(([lesson, prompt, choices, answer, explanation, page]) => ({
      ...Q(prompt, choices.split('|'), answer, explanation, capitulos[unit].lessons[lesson][0]),
      unit,
      source: page ? 'Do livro · p. ' + page : 'Questão inédita',
    })),
  );
}
