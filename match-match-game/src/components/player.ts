export class Player {
  FirstName: string;

  LastName: string;

  score: number;

  image: string;

  constructor(
    FirstName: string,
    LastName: string,
    score: number,
    image: string,
  ) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.score = score;
    this.image = image;
  }
}
