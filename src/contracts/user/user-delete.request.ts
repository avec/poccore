import { Entity, RuleFor } from "stathis-core"

export class UserDeleteRequest extends Entity {
    
    constructor() {
        super();
    }


    validate(): void {
        this.addRule(new RuleFor(this,'_id').notEmptyAndNotNull());
    }
}
