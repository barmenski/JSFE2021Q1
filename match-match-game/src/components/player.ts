export class Player {
  FirstName: string;

  LastName: string;

  email: string;

  score: number;

  constructor(
    FirstName: string,
    LastName: string,
    email: string,
    score: number,
  ) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.email = email;
    this.score = score;
  }
}
