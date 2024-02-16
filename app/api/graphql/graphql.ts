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
      return [{ _id: "423434342",title : "Awesome Order", price: 233.3, products: "products list" }];
    },
  },
};

export const server = new ApolloServer({ typeDefs, resolvers });
