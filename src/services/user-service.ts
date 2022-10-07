import { User } from '../graphql/types/user';
import { Service } from 'typedi';
import { BaseService } from './base-service';
import { UserInput } from '../graphql/input-types/user-input';
import { Role } from '../graphql/types/role';

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

  public async createUser(userData: UserInput) {
    const users = await this.getAllUsers();
    const role = await this.get<Role[]>(this.BASE_URL + `/roles?type=${userData.role}`);
    const user = {
      id: users.length + 1,
      nome: userData.nome,
      ativo: userData.ativo,
      email: userData.email,
      role: role[0].id,
      createdAt: userData.createdAt
    }
    await this.post(this.BASE_URL + '/users', user);
    return await this.getUserById(users.length + 1);
  }

  public async deleteUser(userId: number) {
    await this.delete(this.BASE_URL + `/users/${userId}`)
    return 1;
  }
}
