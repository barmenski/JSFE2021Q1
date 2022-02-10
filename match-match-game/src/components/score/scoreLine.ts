export class ScoreLine {
  item: HTMLElement;

  constructor(
    FirstName: string,
    LastName: string,
    email: string,
    score: number,
    image: string,
  ) {
    this.item = document.createElement('li');
    this.item.className = 'score-item';

    const avatarImage = document.createElement('img');
    avatarImage.className = 'avatar__img';
    avatarImage.setAttribute('src', `${image}`);

    const itemContainer = document.createElement('div');
    itemContainer.className = 'item-container';

    const itemName = document.createElement('div');
    itemName.className = 'item__name';
    itemName.innerHTML = `${FirstName} ${LastName}`;

    const itemEmail = document.createElement('div');
    itemEmail.className = 'item__email';
    itemEmail.innerHTML = `${email}`;

    const itemScore = document.createElement('div');
    itemScore.className = 'item__score';
    itemScore.innerHTML = `Score: <span>${score}</span>`;

    this.item.append(avatarImage);
    itemContainer.append(itemName);
    itemContainer.append(itemEmail);
    this.item.append(itemContainer);
    this.item.append(itemScore);

    // `
    // <img class="avatar__img">
    // <div class="item-container">
    //   <div class="item__name">${FirstName} ${LastName}</div>
    //   <div class="item__email">${email}</div>
    // </div>
    // <div class="item__score">Score: <span>${score}</span></div>
    // `;
  }
}
