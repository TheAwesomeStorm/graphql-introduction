import { Arg, Query, Resolver } from 'type-graphql';
import { User } from '../types/user';
import { UserService } from '../../services/user-service';
import { Service } from 'typedi';

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
}
