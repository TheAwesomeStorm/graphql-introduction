// Type GraphQL has a built-in datetime scalar, but the following scalar was build as an exercise

import { GraphQLScalarType } from 'graphql/type';
import { Kind } from 'graphql';

export const CustomDatetimeScalar = new GraphQLScalarType({
  name: 'Datetime',
  description: 'string de data e hora no formato ISO-8601',
  serialize: (value: unknown) => {
    if (!(value instanceof Date)) {
      throw new Error(`Scalar "Datetime" cannot represent ${value} since it is not a Date`)
    }
    return value.toISOString()
  },
  parseValue: (value) => {
    if (typeof value !== 'string') {
      throw new Error(`Scalar "Datetime" cannot represent ${value} since it is not a Date`)
    }
    return new Date(value)
  },
  parseLiteral: (ast) => {
    if (ast.kind !== Kind.STRING) {
      throw new Error('CustomDatetime scalar can only parse string values');
    }
    return new Date(ast.value);
  }
})
