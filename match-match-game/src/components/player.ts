export class Player {
  FirstName: string;

  LastName: string;

  score: number;

  image: string;

  categoryCards: number;

  amountCards: number;

  showTime: number;

  constructor(
    FirstName: string,
    LastName: string,
    score: number,
    image: string,
    categoryCards: number,
    amountCards: number,
    showTime: number,
  ) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.score = score;
    this.image = image;
    this.categoryCards = categoryCards;
    this.amountCards = amountCards;
    this.showTime = showTime;
  }
}
