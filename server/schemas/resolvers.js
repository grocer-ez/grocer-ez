const { AuthenticationError } = require('apollo-server-express');
const { User, Store, Order } = require('../models');
const { populate } = require('../models/Store');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if(context.user) {
        const userData = await User.findOne({_id: context.user._id})
        .select('-__v -password')
        .populate('stores')
        
        
        return userData
      }
      return new AuthenticationError('Not Loggerd In!');
    },

    stores: async () => {
      return await Store.find();
    },
    
    lists: async (parent, { store, name }) => {
      const params = {};

      if (store) {
        params.store = store;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }f

      return await List.find(params).populate('store');
    },
    list: async (parent, { _id }) => {
      return await List.findById(_id).populate('store');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'stores.list',
          populate: 'store',
          // populate: 'stores'
        });

        //user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addStore: async (parent, args , context) => {
      
      if(context.user) {
        
        const store = await Store.create({ ...args, username: context.user._id });
        await User.findByIdAndUpdate(
          
          {_id: context.user._id},
          { $push: { stores: store._id } },
          { new: true }
          
        );
        
        return store
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // addList: async (parent, { storeId, item, quantity }, context) => {
    //   if (context.user) {
    //     const updatedList = await Store.findOneAndUpdate(
    //       { _id: storeId },
    //       { $push: { lists: { item, quantity, username: context.user._id } } },
    //       { new: true, runValidators: true }
    //     );

    //     return updatedList;
    //   }

    //   throw new AuthenticationError('You need to be logged in!');
    // },

  }
};

module.exports = resolvers;

