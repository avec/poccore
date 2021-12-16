import { User } from './user';

test('User', async () => {

  const user = new User()

  expect(await user.isValid()).toBeFalsy()

  expect(user.errorMessage.length).toBe(2)
  
});

//ValidationResult {fieldName: 'first_name', message: 'The first_name cannot be empty!'}

//ValidationResult {fieldName: 'email', message: 'The email that was passed is an invalid e-mail!'}