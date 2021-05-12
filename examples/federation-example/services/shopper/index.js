const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');

const typeDefs = gql`
    type Query {
        profile(shopperId:ID!): ShopperProfileData
    }

    type ShopperProfileData {
        data: ShopperProfile
    }

    type ShopperProfile @key(fields: "id") {
        id: ID!
        chosen_name: String
    }

    extend type AviatorOrder @key(fields: "id") {
        id: ID @external
        driver_id: Int @external
        shopperProfile: ShopperProfileData @requires(fields: "driver_id")
    }
`;

const resolvers = {
  AviatorOrder: {
    shopperProfile(aviatorOrder, context) {
      console.log('>>> aviatorOrder shopperProfile', { aviatorOrder, context });
      return profiles[aviatorOrder.driver_id];
    },
  },
  Query: {
    profile(root, args, context) {
      return profiles[args.shopperId];
    },
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

module.exports = server.listen({ port: 40002 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
  return server;
});


const profiles = {
  '234554': {
    // id: '234554',
    data: {
      id: '234554',
      chosen_name: 'Joe m',
    },
  },
};
