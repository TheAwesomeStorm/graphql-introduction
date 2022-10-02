import { RESTDataSource } from 'apollo-datasource-rest';

export class UserDataSource extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = 'http://localhost:3000';
  }

  async getUsers() {
    return this.get('/users');
  }
}
