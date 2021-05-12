const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require('@apollo/federation');

const typeDefs = gql`
  type Query {
    order(orderId: ID): AviatorOrder
  }
  
  type AviatorOrder @key(fields: "id") {
    id: ID!
    driver_id: Int
  }
`;

const resolvers = {
  Query: {
    order(root, args, context) {
      return context.orders[args.orderId];
    }
  }
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  context: {
    orders:{
      '16557622':{
        id:'16557622',
        driver_id: 234554
      }
    }
  }
});

module.exports = server.listen({ port: 40001 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
  return server;
});
