import { gql } from 'apollo-server';

export const userType = gql`
    scalar Datetime
    
    type User {
        id: ID!
        nome: String!
        ativo: Boolean!
        email: String
        role: Role!
        createdAt: Datetime
    }
    
    type Role {
        id: ID!
        type: String!
    }

    type Query {
        users: [User],
        user(id: ID!): User
    }
    
    type Mutation {
        adicionarUser(nome: String!, ativo: Boolean!, email: String, role: String!, createdAt: Datetime): User
        atualizarUser(id: ID!, nome: String!, ativo: Boolean!, email: String, role: String!): User
        removerUser(id: ID!): ID!
    }
`;
