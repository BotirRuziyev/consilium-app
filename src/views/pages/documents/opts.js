export const tableColumnsOpts = [
  {
    name: 'Название',
    key: 'Название',
    visible: true,
    attached: true,
    sorting: true,
    type: 'string'
  },
  {
    name: 'Категория',
    key: 'Категория',
    visible: true,
    attached: true,
    sorting: true,
    type: 'string'
  },
  {
    name: 'Начало действия',
    key: 'Начало действия',
    visible: true,
    attached: true,
    sorting: true,
    type: 'date'
  },
  {
    name: 'Ознакомиться до',
    key: 'Ознакомиться до',
    visible: true,
    attached: true,
    sorting: true,
    type: 'date'
  },
  {
    name: 'Ознакомленные',
    key: 'Дожности',
    visible: true,
    attached: true,
    sorting: false,
    type: 'enum'
  },
  {
    name: 'Автор',
    key: 'Автор',
    visible: true,
    attached: true,
    sorting: true,
    type: 'string'
  },
  // {
  //   name: 'Ознакомились',
  //   key: 'Ознакомились',
  //   visible: true,
  //   attached: true,
  //   sorting: false
  // },
  // {
  //   name: 'Статус',
  //   visible: true,
  //   attached: true,
  //   sorting: false
  // }
]

export const categoryOptions = [
  'Федеральный закон',
  'Приказ Министерства здравоохранения',
  'Приказы департамента здравоохранения',
  'Стандартные операционные процедуры (СОП)',
  'Алгоритмы',
  'Инструкции должностные',
  'Инструкции препаратов',
  'Инструкции по эксплуатации оборудования',
  'Инструкции по манипуляциям',
  'Клинические рекомендации',
  'Протоколы лечения',
  'Информационные письма'
]

export const authorsOptions = [
  'Министерство здравоохранения РФ',
  'Департамент здравоохранения РФ',
  'ГБУЗ ТО ССМП',
  'ТФОМС'
]
