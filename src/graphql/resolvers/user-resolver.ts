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
}
