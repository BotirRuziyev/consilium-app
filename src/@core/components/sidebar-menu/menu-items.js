const menuItems = [
  {
    isSection: true,
    name: 'Главная',
    iconClass: 'm-main',
    pages: [
      {
        name: 'Dashboard',
        path: '/dashboard'
      },
      {
        name: 'Избранные документы',
        path: '/bookmarks'
      },
      {
        name: 'Профиль',
        path: '/profile'
      }
    ]
  },
  {
    isSection: true,
    name: 'Планирование',
    iconClass: 'm-planning',
    pages: [
      {
        name: 'Расписание',
        path: '/schedule'
      },
      {
        name: 'Дежурный наряд',
        path: '/detail'
      }
    ]
  },
  {
    isSection: false,
    name: 'Сотрудники',
    iconClass: 'm-staff',
  },
  {
    isSection: false,
    name: 'Документы',
    iconClass: 'm-docs',
    path: '/documents'
  },
  {
    isSection: false,
    name: 'Оборудование',
    iconClass: 'm-equipment'
  },
  {
    isSection: false,
    name: 'Справочники',
    iconClass: 'm-handbook'
  }
]

export default menuItems