import { Entity, RuleFor } from "stathis-core";

export class UserUpdateRequest extends Entity {
  constructor(first_name: string, email: string) {
    super();
    this.first_name = first_name;
    this.email = email;
  }

  first_name: string;
  email: string;

  validate(): void {
    this.addRule(new RuleFor(this, "first_name").notEmptyAndNotNull());
    this.addRule(new RuleFor(this, "_id").notEmptyAndNotNull());
    this.addRule(new RuleFor(this, "email").emailAddress());
  }
}
