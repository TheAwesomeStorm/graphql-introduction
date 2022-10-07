import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../types/user';
import { UserService } from '../../services/user-service';
import { Service } from 'typedi';
import { UserInput } from '../input-types/user-input';

@Service()
@Resolver(User)
export class UserResolver {

  constructor (private userService: UserService) {
  }

  @Query(returns => [User])
  public async users() {
    return await this.userService.getAllUsers();
  }

  @Query(returns => User)
  public user(@Arg('userId') userId: number) {
    return this.userService.getUserById(userId);
  }

  @Mutation(returns => User)
  public async addUser(@Arg('data') userData: UserInput) {
    return await this.userService.createUser(userData);
  }

  @Mutation(returns => User)
  public async updateUser(@Arg('id') id: number, @Arg('data') data: UserInput){
    return await this.userService.updateUser(id, data);
  }

  @Mutation(returns => Number)
  public async deleteUser(@Arg('id') id: number) {
    return await this.userService.deleteUser(id);
  }
}
