var orderHistory = [
  {
    orderPlaced: '8/4/2020',
    delivered: '8/8/2020',
    ordertotal: 34.00,
    shipTo: 'JS Masher',
    orderNumber: '114-3941689-8772232',
    itemInformation:
  [
    {
      type: 'book',
      title: 'JavaScript for impatient programmers',
      seller: 'Rauschmayer, Dr. Axel',
      price: 31.55,
      image: 'bookcover'
    }
  ]
  },
  {
    orderPlaced: '7/19/2020',
    delivered: '7/20/2020',
    ordertotal: 44.53,
    shipTo: 'JS Masher',
    orderNumber: '113-9984268-1280257',
    itemInformation: [
      {
        type: 'book',
        title: 'The Timeless Way of Building',
        seller: 'Alexander, Christopher',
        price: 44.53,
        image: 'bookcover',
        lastReturnDate: '8/19/2020'
      }]
  },
  {
    orderPlaced: '7/4/2020',
    delivered: '7/7/2020',
    ordertotal: 17.22,
    shipTo: 'JS Masher',
    orderNumber: '114-2875557-9059409',
    itemInformation: [
      {
        type: 'hardware',
        name: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        seller: 'noneListed',
        price: 17.22,
        image: 'controller adapter thumbnail',
        lastReturnDate: '8/5/2020'
      }
    ]
  },
  {
    orderPlaced: '7/3/2020',
    delivered: '7/5/2020',
    ordertotal: 138.93,
    shipTo: 'JS Masher',
    orderNumber: '113-2883177-2648248',
    itemInformation: [
      {
        type: 'hardware',
        name: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        seller: 'noneListed',
        price: 94.95,
        image: 'Gamecube Controller Box',
        lastReturnDate: '8/4/2020'
      },
      {
        type: 'book',
        title: 'The Art of Sql',
        author: 'Faroult, Stephanie',
        price: 33.99,
        image: 'bookcover',
        lastReturnDate: '8/4/2020'
      }
    ]
  }
];

console.log('Completed Order History', orderHistory);
