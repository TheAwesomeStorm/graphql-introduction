import { gql } from 'apollo-server';

export const userType = gql`
    scalar Datetime
    
    enum RolesType {
        ESTUDANTE
        DOCENTE
        COORDENACAO
    }
    
    input UserInput {
        nome: String
        ativo: Boolean
        email: String
        role: RolesType
        createdAt: Datetime
    }

    interface Resposta {
        code: Int!
        mensagem: String!
    }
    
    type RemoverUserResposta implements Resposta {
        code: Int!
        mensagem: String!
    }
    
    type AtualizarUserResposta implements Resposta {
        code: Int!
        mensagem: String!
        user: User!
    }
    
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
        type: RolesType!
    }

    type Query {
        users: [User],
        user(id: ID!): User
    }
    
    type Mutation {
        adicionarUser(user: UserInput): User
        atualizarUser(id: ID!, user: UserInput): AtualizarUserResposta
        removerUser(id: ID!): RemoverUserResposta!
    }
`;
