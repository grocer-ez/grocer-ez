const db = require('./connection');
const { User, List, Store } = require('../models');
// const listSchema = require('../models/List');

db.once('open', async () => {
  // await Category.deleteMany();
  await Store.deleteMany();

  const Store = await Store.insertMany([
    { name: 'WalMart' },
    { name: 'Safeway' },
    { name: 'Frys' },
    { name: 'Home Depot' },
  ]);

  console.log('Stores seeded');

  await List.deleteMany();

  const List = await List.insertMany([
    {
      item: 'Tin of Cookies',
      quantity: 1,
      store: storeSchema[0]._id,
      username: 'Test'
    },
    {
      item: 'Ball of yarn',
      quantity: 2,
      store: storeSchema[0]._id,
      username: 'Test'
    },
    {
      item: 'Cookies',
      quantity: 1,
      store: storeSchema[0]._id,
      username: 'Test'
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    username: 'Test',
    email: 'test@testmail.com',
    password: '12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    username: 'Test2',
    email: 'test2@testmail.com',
    password: '12345'
  });

  console.log('users seeded');

  process.exit();
});
