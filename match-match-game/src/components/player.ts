export class Player {
  FirstName: string;

  LastName: string;

  email: string;

  score: number;

  image: string;

  constructor(
    FirstName: string,
    LastName: string,
    email: string,
    score: number,
    image: string,
  ) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.email = email;
    this.score = score;
    this.image = image;
  }
}
