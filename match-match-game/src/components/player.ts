export class Player {
  firstName: string;

  lastName: string;

  email: string;

  score: number;

  constructor(
    firstName = 'Jhon',
    lastName = 'Smith',
    email = 'jhon@smith.com',
    score = 0,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.score = score;
  }
}
