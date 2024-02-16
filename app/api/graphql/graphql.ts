import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
const typeDefs = gql`
  type Order {
    _id: String
    title: String!
    products: String!
    price: Float!
  }

  type Query {
    orders: [Order!]!
  }
`;

const resolvers = {
  Query: {
    orders: () => {
      return [
        {
          _id: "423424",
          title: "Awesome Order",
          price: 233.3,
          products: "products list",
        },
        {
          _id: "768857686",
          title: "Awesome Order",
          price: 233.3,
          products: "products list",
        },
      ];
    },
  },
};

export const server = new ApolloServer({ typeDefs, resolvers });
