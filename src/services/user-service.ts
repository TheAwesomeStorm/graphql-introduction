import { User } from '../graphql/types/user';
import { Service } from 'typedi';
import { BaseService } from './base-service';

@Service()
export class UserService extends BaseService {
  private BASE_URL = 'http://localhost:3000';

  public async getAllUsers(): Promise<User[]> {
    const users = await this.get<User[]>(this.BASE_URL + '/users');
    const usersSchemaType = users.map(async (user) => {
      return {
        id: user.id,
        nome: user.nome,
        email: user.email,
        ativo: user.ativo,
        role: await this.get(this.BASE_URL + `/roles/${user.role}`),
        createdAt: user.createdAt
      } as User
    })
    return Promise.all(usersSchemaType);
  }

  public async getUserById(id: number): Promise<User> {
    const user = await this.get<User>(this.BASE_URL + `/users/${id}`);
    return {
      id: user.id,
      nome: user.nome,
      email: user.email,
      ativo: user.ativo,
      role: await this.get(this.BASE_URL + `/roles/${user.role}`),
      createdAt: user.createdAt
    }
  }
}
