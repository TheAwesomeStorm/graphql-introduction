import { gql } from 'apollo-server';

export const userType = gql`
    type User {
        nome: String!
        ativo: Boolean!
        email: String
    }

    type Query {
        users: [User],
        user(id: ID!): User
    }
`;
