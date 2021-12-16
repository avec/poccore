import { Entity, RuleFor } from "stathis-core";
import { UserCreateRequest, UserUpdateRequest } from "../contracts/user";

export class User extends Entity  {

  constructor(first_name: String = '', email: String = '') {
    super()

    this.first_name = first_name
    this.email = email
  }

  id: String = "";
  first_name: String = "";
  email: String = "";

  static createUser(request: UserCreateRequest): User {
    return new User(request.first_name, request.email);
  }

  static updateUser(request: UserUpdateRequest): User {
    return new User(request.first_name, request.email);
  }  

  validate(): void {
    this.addRule(new RuleFor(this, "first_name").notEmptyAndNotNull());
    this.addRule(new RuleFor(this, "email").emailAddress());
  }
}
