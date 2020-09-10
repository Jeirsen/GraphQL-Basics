import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
    type Query {
        greeting(name: String): String!
        me: User!
        post: Post!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }

    type Post {
        id: ID!,
        title: String!
        body: String!
        published: Boolean!
    }
`;

const resolvers = {
  Query: {
    greeting: (parent, args, ctx, info) => {
      console.log(args);
      return args.name ? `Welcome back ${args.name}` : `Hello user`;
    },
    me: () => {
      return {
        id: "12323",
        name: "Sandra",
        email: "sandra@gmail.com",
      };
    },
    post: () => {
      return {
        id: "UIX123",
        title: "Post from GraphQL",
        body: "The body of the post",
        published: true,
      };
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running"));
