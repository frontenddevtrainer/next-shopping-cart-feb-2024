import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
import { OrdersModel } from "@/lib/models/order";
import "@/lib/db";

const typeDefs = gql`
  type Order {
    _id: String
    processed: Boolean
  }

  type Query {
    orders: [Order!]!
  }
`;

const resolvers = {
  Query: {
    orders: async () => {
        // return await fetch("http://localhost:3000/api/orders")
      return await OrdersModel.find();
    },
  },
};

export const server = new ApolloServer({ typeDefs, resolvers });
