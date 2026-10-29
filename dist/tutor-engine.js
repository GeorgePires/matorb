/* Motor de contas com números naturais. Não depende da interface. */
const TutorMath = (() => {
  const copy = (value) => JSON.parse(JSON.stringify(value));
  function validate(a, b, division) {
    if (
      !Number.isSafeInteger(a) ||
      !Number.isSafeInteger(b) ||
      a < 0 ||
      b < 0 ||
      (division && b === 0) ||
      a > 99999 ||
      b > 999
    )
      throw new Error('Use números naturais dentro do limite; o divisor deve ser maior que zero.');
  }
  function multiplication(a, b) {
    validate(a, b, false);
    const digits = String(a).split('').reverse().map(Number),
      mult = String(b).split('').reverse().map(Number),
      steps = [];
    let frame = {
      kind: 'mul',
      a,
      b,
      partials: mult.map((d, j) => ({ label: `× ${d * 10 ** j}`, value: '' })),
      carries: [],
      active: -1,
      result: '',
    };
    const initial = copy(frame);
    for (let j = 0; j < mult.length; j++) {
      let carry = 0,
        written = '';
      frame.carries = [];
      frame.partials[j].value = j ? '0'.repeat(j) : '';
      for (let k = 0; k < digits.length; k++) {
        frame.active = k;
        const before = copy(frame),
          incoming = carry,
          total = digits[k] * mult[j] + incoming,
          unit = total % 10;
        carry = Math.floor(total / 10);
        written = String(unit) + written;
        if (k === digits.length - 1 && carry) written = String(carry) + written;
        frame.partials[j].value = written + '0'.repeat(j);
        if (carry && k < digits.length - 1) frame.carries.push({ column: k + 1, value: carry });
        const place = j === 0 ? 'unidades' : j === 1 ? 'dezenas' : 'centenas';
        const why =
          `${digits[k]} × ${mult[j]}${incoming ? ` + ${incoming} que veio da coluna anterior` : ''} = ${total}. ` +
          (k < digits.length - 1
            ? carry
              ? `Escreva ${unit} nesta coluna e leve ${carry} para a próxima: ${total} = ${carry} dezena(s) + ${unit} unidade(s).`
              : `Escreva ${unit}. Não há valor para levar.`
            : carry
              ? `Esta é a última coluna; escreva ${total} no início desta linha.`
              : `Escreva ${unit} e termine esta linha.`) +
          (j
            ? ` Esta linha multiplica por ${mult[j] * 10 ** j}, por isso termina com ${j} zero(s).`
            : '');
        steps.push({
          title: `Multiplique · linha das ${place}`,
          prompt: `Quanto é ${digits[k]} × ${mult[j]}${incoming ? ` + ${incoming}` : ''}?`,
          answer: total,
          hint: `Pense em ${mult[j]} grupo(s) de ${digits[k]}.${incoming ? ` Depois acrescente ${incoming}, que veio da coluna anterior.` : ''}${j ? ' O zero à direita guarda o lugar das unidades nesta linha.' : ''}`,
          why,
          before,
          after: copy(frame),
        });
      }
    }
    frame.active = -1;
    if (mult.length > 1) {
      const before = copy(frame);
      frame.result = String(a * b);
      steps.push({
        title: 'Some as linhas',
        prompt: `Some os produtos parciais: ${frame.partials.map((p) => Number(p.value)).join(' + ')}. Qual é o total?`,
        answer: a * b,
        hint: 'Alinhe unidades com unidades e dezenas com dezenas. Some uma coluna de cada vez, da direita para a esquerda.',
        why: `${frame.partials.map((p) => Number(p.value)).join(' + ')} = ${a * b}. Cada linha representa uma parte do segundo número; somando, obtemos o produto completo.`,
        before,
        after: copy(frame),
      });
    } else frame.result = String(a * b);
    return {
      kind: 'mul',
      a,
      b,
      initial,
      steps,
      final: copy(frame),
      answer: a * b,
      remainder: 0,
      check: `${a} × ${b} = ${a * b}. ${b ? `Confira dividindo ${a * b} por ${b}: deve voltar a ${a}.` : 'Qualquer quantidade multiplicada por zero é zero.'}`,
    };
  }
  function division(a, b) {
    validate(a, b, true);
    const text = String(a),
      steps = [];
    let end = 0,
      current = Number(text[0]),
      quotient = '',
      remainder = 0;
    while (current < b && end < text.length - 1) {
      end++;
      current = Number(text.slice(0, end + 1));
    }
    let frame = { kind: 'div', a, b, quotient: '', lines: [], current, activeEnd: end };
    const initial = copy(frame);
    const push = (title, prompt, answer, hint, why, mutate) => {
      const before = copy(frame);
      mutate();
      steps.push({ title, prompt, answer, hint, why, before, after: copy(frame) });
    };
    for (;;) {
      const q = Math.floor(current / b),
        product = q * b,
        rest = current - product;
      push(
        '1 · Quantas vezes cabe?',
        `Quantas vezes ${b} cabe em ${current}, sem passar?`,
        q,
        `Compare múltiplos de ${b}: 0, ${b}, ${2 * b}, ${3 * b}… Procure o maior que não ultrapassa ${current}.`,
        `${b} × ${q} = ${product} e ${b} × ${q + 1} = ${(q + 1) * b}, que passa de ${current}. Escreva ${q} no quociente.${q === 0 ? ' Este zero guarda uma posição: não o pule.' : ''}`,
        () => {
          quotient += String(q);
          frame.quotient = quotient;
        },
      );
      push(
        '2 · Multiplique',
        `Quanto é ${q} × ${b}?`,
        product,
        'Use a tabuada ou decomponha o divisor em dezenas e unidades.',
        `${q} × ${b} = ${product}. Esta é a quantidade que conseguimos repartir nesta etapa. Escrevemos abaixo, alinhada ao número usado.`,
        () => frame.lines.push({ value: String(product), end, operator: '−' }),
      );
      push(
        '3 · Subtraia',
        `Quanto sobra de ${current} depois de retirar ${product}?`,
        rest,
        `Calcule ${current} − ${product}. A sobra deve ser menor que ${b}.`,
        `${current} − ${product} = ${rest}. ${rest < b ? 'A sobra é menor que o divisor, como deve ser.' : ''}`,
        () => {
          remainder = rest;
          frame.lines.push({ value: String(rest), end, rule: true });
          frame.current = rest;
        },
      );
      if (end === text.length - 1) break;
      const nextDigit = Number(text[end + 1]),
        next = rest * 10 + nextDigit;
      end++;
      push(
        '4 · Baixe o próximo algarismo',
        `Junte a sobra ${rest} ao próximo algarismo, ${nextDigit}. Qual número se forma?`,
        next,
        `A sobra passa para a próxima ordem: ${rest} × 10 + ${nextDigit}. Não basta somar ${rest} + ${nextDigit}.`,
        `${rest} × 10 + ${nextDigit} = ${next}. Ao baixar um algarismo, a sobra muda de ordem. Agora repetimos o ciclo com ${next}.`,
        () => {
          current = next;
          frame.current = next;
          frame.activeEnd = end;
          frame.lines.push({ value: String(next), end, down: true });
        },
      );
    }
    const result = Number(quotient);
    push(
      '5 · Tire a prova',
      `Confira: ${b} × ${result} + ${remainder} = quanto?`,
      a,
      `Multiplique o divisor pelo quociente e acrescente o resto. Você deve reencontrar ${a}.`,
      `${b} × ${result} + ${remainder} = ${a}. ${remainder === 0 ? 'O resto é zero: a divisão é exata.' : `O resto é ${remainder}, menor que ${b}: não dá para repartir mais uma unidade inteira para cada grupo.`}`,
      () => {},
    );
    return {
      kind: 'div',
      a,
      b,
      initial,
      steps,
      final: copy(frame),
      answer: result,
      remainder,
      check: `${a} = ${b} × ${result} + ${remainder}. Resto ${remainder} < divisor ${b}.`,
    };
  }
  function grade(raw, expected) {
    const value = String(raw).trim();
    if (!/^\d+$/.test(value)) return 'invalid';
    return Number(value) === expected ? 'correct' : 'wrong';
  }
  return { multiplication, division, grade };
})();
if (typeof module !== 'undefined' && module.exports) module.exports = TutorMath;
