import { RESTDataSource } from 'apollo-datasource-rest';

export class UserDataSource extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = 'http://localhost:3000';
  }

  async getUsers() {
    const users = await this.get('/users');
    return users.map(async (user) => {
      return {
        id: user.id,
        nome: user.nome,
        email: user.email,
        ativo: user.ativo,
        role: await this.get(`/roles/${user.role}`)
      }
    })
  }

  async getUserById(id: number) {
    const user = await this.get(`/users/${id}`);
    user.role = this.get(`/roles/${user.role}`);
    return user;
  }

  async adicionarUser(user) {
    const users = await this.get('/users');
    user.id = users.length + 1;
    const role = await this.get(`roles?type=${user.role}`);
    await this.post('users', {
      ...user,
      role: role[0].id
    });
    return ({
      ...user,
      role: role[0]
    })
  }

  async atualizarUser(user) {
    const role = await this.get(`roles?type=${user.role}`);
    await this.put(`users/${user.id}`, {
      ...user,
      role: role[0].id
    });
    return {
      ...user,
      role: role[0]
    }
  }

  async removerUser(id: number) {
    await this.delete(`users/${id}`);
    return id;
  }
}
