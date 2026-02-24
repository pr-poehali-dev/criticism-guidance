import Icon from '@/components/ui/icon';

const heroGradient = 'linear-gradient(135deg, #e8f5f0 0%, #e0f0fb 50%, #f0f9f4 100%)';

const blocks = [
  {
    id: 1,
    emoji: '🚦',
    color: 'from-emerald-100 to-teal-50',
    border: 'border-emerald-200',
    accent: '#2d9e7a',
    badge: 'bg-emerald-100 text-emerald-700',
    label: 'Блок 1',
    title: 'Первая помощь',
    subtitle: 'Что делать сразу?',
    items: [
      { icon: 'OctagonX', emoji: '🔴', text: 'СТОП! Не реагируй мгновенно. Обида и гнев — плохие советчики.' },
      { icon: 'Wind', emoji: '🌬️', text: 'ВДОХ-ВЫДОХ. Сделай глубокий вдох. Дай мозгу 3 секунды.' },
      { icon: 'Clock', emoji: '⏸️', text: 'ПАУЗА. Не перебивай. Дай человеку договорить.' },
    ],
    tip: 'Золотое правило: Сначала успокойся, потом думай.',
  },
  {
    id: 2,
    emoji: '🔍',
    color: 'from-sky-100 to-blue-50',
    border: 'border-sky-200',
    accent: '#2a7db5',
    badge: 'bg-sky-100 text-sky-700',
    label: 'Блок 2',
    title: 'Тест-фильтр',
    subtitle: '3 главных вопроса',
    questions: [
      {
        q: 'Кто критикует?',
        yes: 'Важный человек (друг, наставник) → слушаем дальше',
        no: 'Случайный / хейтер → пропускаем мимо',
      },
      {
        q: 'Что критикуют?',
        yes: 'Мой поступок / результат → можно исправить',
        no: 'Мою личность → это нападение',
      },
      {
        q: 'Есть ли решение?',
        yes: 'Говорят как исправить → берём пользу',
        no: 'Просто обвиняют → это слив эмоций',
      },
    ],
  },
  {
    id: 3,
    emoji: '✅',
    color: 'from-teal-100 to-emerald-50',
    border: 'border-teal-200',
    accent: '#1f8a6a',
    badge: 'bg-teal-100 text-teal-700',
    label: 'Блок 3',
    title: 'Железные правила',
    subtitle: 'Запомни!',
    rules: [
      { n: '1', text: 'Критикуют не тебя, а то, ЧТО ты сделал. Твоя ценность не равна одной ошибке.' },
      { n: '2', text: 'Ищи зерно истины. Даже в неприятной критике есть 10% правды — забери себе.' },
      { n: '3', text: 'Ты имеешь право на ошибку. Так учатся все люди.' },
      { n: '4', text: 'Разделяй факты и эмоции. «Ты плохой» — эмоция. «Здесь ошибка» — факт.' },
      { n: '5', text: 'Твой главный критик — ты сам. Опора внутри — никакие слова не сломают.' },
    ],
  },
  {
    id: 4,
    emoji: '☑️',
    color: 'from-blue-100 to-sky-50',
    border: 'border-blue-200',
    accent: '#2563b0',
    badge: 'bg-blue-100 text-blue-700',
    label: 'Блок 4',
    title: 'Чек-лист',
    subtitle: 'Перед тем как обидеться',
    checks: [
      'Я успокоился и сделал паузу?',
      'Этот человек важен для меня?',
      'Критикуют дело, а не меня?',
      'Мне сказали, как исправить?',
      'Я могу взять из этого пользу?',
    ],
    yes: 'ДА на 3–4 → это подарок, бери и расти!',
    no: 'НЕТ на все → это мусор, проходи мимо.',
  },
];

export default function Index() {
  return (
    <div
      className="min-h-screen font-golos py-10 px-4"
      style={{ background: heroGradient }}
    >
      {/* HERO */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-block mb-4 px-5 py-1.5 rounded-full text-sm font-semibold tracking-wide bg-white/70 text-teal-700 border border-teal-200 shadow-sm">
          Памятка-инфографика
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-3">
          Критика: угроза или<br />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #2d9e7a, #2a7db5)' }}>
            точка роста?
          </span>
        </h1>
        <p className="text-lg text-slate-500 max-w-xl mx-auto">
          Как превратить чужие слова в свою суперсилу
        </p>
      </div>

      {/* BLOCKS */}
      <div className="max-w-3xl mx-auto flex flex-col gap-7">

        {/* BLOCK 1 — Первая помощь */}
        <div className={`rounded-3xl border ${blocks[0].border} bg-gradient-to-br ${blocks[0].color} p-7 shadow-sm`}>
          <BlockHeader block={blocks[0]} />
          <div className="flex flex-col gap-3 mt-5">
            {blocks[0].items.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/60 rounded-2xl px-4 py-3 border border-white/80">
                <span className="text-2xl leading-none mt-0.5">{item.emoji}</span>
                <p className="text-slate-700 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-emerald-700/10 border border-emerald-300/40 rounded-2xl px-5 py-3">
            <p className="text-emerald-800 text-sm font-semibold">💡 {blocks[0].tip}</p>
          </div>
        </div>

        {/* BLOCK 2 — Тест-фильтр */}
        <div className={`rounded-3xl border ${blocks[1].border} bg-gradient-to-br ${blocks[1].color} p-7 shadow-sm`}>
          <BlockHeader block={blocks[1]} />
          <div className="flex flex-col gap-4 mt-5">
            {blocks[1].questions!.map((q, i) => (
              <div key={i} className="bg-white/60 rounded-2xl border border-white/80 p-4">
                <p className="font-semibold text-slate-800 mb-2">Вопрос {i + 1}: {q.q}</p>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-600 flex-shrink-0">
                      <Icon name="CheckCircle" size={16} />
                    </span>
                    <p className="text-sm text-slate-600">{q.yes}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-rose-400 flex-shrink-0">
                      <Icon name="XCircle" size={16} />
                    </span>
                    <p className="text-sm text-slate-600">{q.no}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 3 — Железные правила */}
        <div className={`rounded-3xl border ${blocks[2].border} bg-gradient-to-br ${blocks[2].color} p-7 shadow-sm`}>
          <BlockHeader block={blocks[2]} />
          <div className="flex flex-col gap-3 mt-5">
            {blocks[2].rules!.map((rule, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/60 rounded-2xl px-4 py-3 border border-white/80">
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: blocks[2].accent }}
                >
                  {rule.n}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">{rule.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 4 — Чек-лист */}
        <div className={`rounded-3xl border ${blocks[3].border} bg-gradient-to-br ${blocks[3].color} p-7 shadow-sm`}>
          <BlockHeader block={blocks[3]} />
          <div className="flex flex-col gap-2.5 mt-5">
            {blocks[3].checks!.map((check, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/60 rounded-2xl px-4 py-3 border border-white/80">
                <div
                  className="w-5 h-5 rounded-md flex-shrink-0 border-2 flex items-center justify-center"
                  style={{ borderColor: blocks[3].accent }}
                >
                  <div className="w-2 h-2 rounded-sm" style={{ background: blocks[3].accent + '60' }} />
                </div>
                <p className="text-slate-700 text-sm">{check}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-emerald-100 border border-emerald-300/50 rounded-2xl px-4 py-3">
              <p className="text-emerald-800 text-sm font-semibold">✅ {blocks[3].yes}</p>
            </div>
            <div className="bg-rose-50 border border-rose-200/50 rounded-2xl px-4 py-3">
              <p className="text-rose-700 text-sm font-semibold">❌ {blocks[3].no}</p>
            </div>
          </div>
        </div>

        {/* QUOTE */}
        <div
          className="rounded-3xl p-8 text-center shadow-sm border border-white/60"
          style={{ background: 'linear-gradient(135deg, #d4eee6 0%, #cfe8f7 100%)' }}
        >
          <p className="text-2xl mb-3">🌱</p>
          <blockquote className="text-slate-700 text-lg font-medium leading-relaxed italic mb-3">
            «Никто не может заставить тебя чувствовать себя хуже без твоего согласия»
          </blockquote>
          <p className="text-slate-500 text-sm">— Элеонора Рузвельт</p>
          <div className="mt-5 pt-5 border-t border-white/60">
            <p className="text-slate-600 text-sm leading-relaxed">
              Критика — это не диагноз. Это просто чьё-то мнение.<br />
              Его можно принять, отклонить или использовать как топливо для роста.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

function BlockHeader({ block }: { block: typeof blocks[0] }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-white/80"
        style={{ background: 'white' }}
      >
        {block.emoji}
      </div>
      <div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${block.badge}`}>
          {block.label}
        </span>
        <h2 className="text-xl font-bold text-slate-800 leading-tight">{block.title}</h2>
        <p className="text-sm text-slate-500">{block.subtitle}</p>
      </div>
    </div>
  );
}
