const { AuthenticationError } = require('apollo-server-express');
const { User, Store } = require('../models');
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
      return new AuthenticationError('Not Logged In!');
    },

    store: async (parent, { _id }) => {
      
      return await Store.findOne ({ _id });
     
    }    
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },   
   
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
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
          { $push: { stores: store._id}},
          { new: true }          
        );
        
        return store
      }
      throw new AuthenticationError('You need to be logged in!');

    },

    updateStore: async (parent, {_id, name }, context) => {
      if (context.user) {
        return await Store.findByIdAndUpdate( _id, {name: name}, {new: true})        
       }
      throw new AuthenticationError('Not logged in');
    },

    removeItem: async (parent, {storeId, itemId }, context) => {
      if (context.user) {
        return await Store.findOneAndUpdate( 
          {_id: storeId}, 
          {$pull: {list: {_id: itemId}}}, 
          {new: true})        
       }
      throw new AuthenticationError('Not logged in');
    },

    clearList: async (parent, {storeId }, context) => {
      if (context.user) {
        return await Store.findOneAndUpdate( 
          {_id: storeId}, 
          {$pull: {list:{}}}, 
          {new: true})        
       }
      throw new AuthenticationError('Not logged in');
    },
    
    updateList: async (parent, {_id, item, quantity }, context) => {
      if (context.user) {
        return await Store.findByIdAndUpdate( _id, {list: item}, {new: true})        
       }
      throw new AuthenticationError('Not logged in');
    },


    addList: async (parent, { _id, item, quantity }, context) => {
      if (context.user) {
        const addList = await Store.findOneAndUpdate(
          {_id:_id},
          {$push: {list: {item: item, quantity: quantity}  } } ,
          { new: true}
        );

        return addList;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

  }
};

module.exports = resolvers;