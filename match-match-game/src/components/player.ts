export class Player {
  firstName: string;
  lastName: string;
  email: string;
  score: number;

  constructor(firstName: string = 'Jhon', lastName: string = 'Smith', email: string = 'jhon@smith.com', score: number = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.score = score;
  }
}
