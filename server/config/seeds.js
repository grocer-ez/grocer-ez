const db = require('./connection');
const { User, Store } = require('../models');


db.once('open', async () => {
  await Store.deleteMany();

  const stores = await Store.insertMany([
    { name: 'Alberstons',
      list: [
      {
      item: "Paper Plates",
      quantity: 1
      },
      {
      item: "lettuce",
      quantity: 1
      },
      {
      item: "Milk",
      quantity: 1
      }
    ]      
    },
    { name: 'Ralphs',
      list: 
      [
        {
        item: "Case of Water",
        quantity: 5
        },
        {
        item: "1 dozen Eggs",
        quantity: 1
        }
      ] 
    },
   
    { name: 'Wal-Greens',
      list: 
      [
        {
        item: "Toothpaste",
        quantity: 1
        },
        {
        item: "Coffee",
        quantity: 1
        },
        {
        item: "Chap Stick",
        quantity: 1
        },
      ] 
    },
   
    { name: 'Home Depot',
      list: 
      [
        {
        item: "Light Bulbs",
        quantity: 6
        },
        {
        item: "Air Filters",
        quantity: 2
        },
      ]
     },
   
  ]);

  console.log(stores);
  console.log('Stores and Lists seeded');
  

  await User.deleteMany();

  await User.create({
    username: 'test',
    email: 'test@test.com',
    password: 'password12345',
    stores: [ stores[0].id
      
    ]
  });
  await User.create({
    username: 'test1',
    email: 'test1@test.com',
    password: 'password12345',
    stores: [
       
      stores[1].id,
      stores[2].id,
      stores[3].id
      
    ]
  });

  await User.create({
    username: 'test2',
    email: 'test2@test.com',
    password: 'password12345'
  });

  console.log('User Seeded');

  process.exit();
});
