import { gql } from 'apollo-server';

export const userType = gql`
    type User {
        id: ID!
        nome: String!
        ativo: Boolean!
        email: String
        role: Role!
    }
    
    type Role {
        id: ID!
        type: String!
    }

    type Query {
        users: [User],
        user(id: ID!): User
    }
`;
