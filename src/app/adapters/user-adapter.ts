import { Injectable } from '@angular/core';
import { Adapter } from '../model-adapter';
import { User, UserResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserAdapter implements Adapter<User> {
  adapt(user: UserResponse): User {
    return new User(
      user.id,
      user.phone,
      user.name,
      user.email + ' : ' + user.website
    );
  }
  adaptArray(users: UserResponse[]): User[] {
    return users.map((user) => this.adapt(user));
  }
}
