import { Player } from '../player';
import { RegFormMini } from '../reg-form/reg-form-mini';
import './avatar.scss';

export class Avatar {
  readonly avatar: HTMLElement;

  readonly firstName: HTMLElement;

  readonly avatarWrapper: HTMLElement;

  readonly playerPanelWrapper;

  readonly playerChange;

  readonly playerAdd;

  readonly playerEdit;

  readonly playerLines;

  readonly editFormMini;

  constructor() {
    this.editFormMini = new RegFormMini();
    this.editFormMini.addBtn.innerHTML = 'Save';
    this.editFormMini.heading.innerHTML = 'Edit profile';

    this.avatarWrapper = document.createElement('div');
    this.avatarWrapper.className = 'avatar__wrapper';

    this.avatar = document.createElement('img');
    this.avatar.className = 'avatar__img';
    this.avatar.setAttribute('src', `${window.player.image}`);

    this.firstName = document.createElement('span');
    this.firstName.className = 'avatar__name';
    this.firstName.innerHTML = `${window.player.FirstName}`;
    this.firstName.addEventListener('click', e => {
      e.stopPropagation();
      this.readDataBase();
      this.playerPanelWrapper.classList.remove('notVisible');
    });

    document.body.addEventListener('click', () =>
      this.playerPanelWrapper.classList.contains('notVisible')
        ? ''
        : this.playerPanelWrapper.classList.add('notVisible'),
    );

    this.playerPanelWrapper = document.createElement('div');
    this.playerPanelWrapper.classList.add('playerPanel__wrapper', 'notVisible');

    this.playerAdd = document.createElement('div');
    this.playerAdd.innerHTML = 'Add new profile';
    this.playerAdd.className = 'playerAdd';
    this.playerAdd.addEventListener('click', () => {
      document.body.classList.add('notScrollable');
      window.app.header.cover.classList.remove('notVisible');
      window.app.header.regFormMini.regFormWrapper.classList.remove(
        'notVisible',
      );
      this.playerPanelWrapper.classList.add('notVisible');
    });

    this.playerEdit = document.createElement('div');
    this.playerEdit.innerHTML = 'Edit my profile';
    this.playerEdit.className = 'playerEdit';
    this.playerEdit.addEventListener('click', () => {
      document.body.classList.add('notScrollable');
      window.app.header.cover.classList.remove('notVisible');
      this.editFormMini.firstName.setAttribute(
        'value',
        window.player.FirstName,
      );
      this.editFormMini.imageContainer.setAttribute(
        'src',
        `${window.player.image}`,
      );
      this.editFormMini.addBtn.removeAttribute('disabled');
      this.editFormMini.addBtn.classList.remove('invalid');
      this.editFormMini.regFormWrapper.classList.remove('notVisible');
      this.playerPanelWrapper.classList.add('notVisible');
    });

    this.playerChange = document.createElement('div');
    this.playerChange.innerHTML = 'Change profile:';
    this.playerChange.className = 'playerChange';

    this.playerLines = document.createElement('ul');
    this.playerLines.className = 'playerLines';
    this.playerLines.addEventListener('click', e => {
      window.database
        .readOne(
          'players',
          (e.target as HTMLElement).closest('li')?.dataset.name,
        )
        .then(result => {
          window.player = result;
          window.app.header.avatar.refresh();
        });

      this.playerPanelWrapper.classList.add('notVisible');
    });

    this.playerPanelWrapper.append(this.playerAdd);
    this.playerPanelWrapper.append(this.playerEdit);
    this.playerPanelWrapper.append(this.playerChange);
    this.playerPanelWrapper.append(this.playerLines);

    this.avatarWrapper.append(this.firstName);
    this.avatarWrapper.append(this.avatar);
    this.avatarWrapper.append(this.playerPanelWrapper);
    this.avatarWrapper.append(this.editFormMini.regFormWrapper);
  }

  refresh = () => {
    this.avatar.setAttribute('src', `${window.player.image}`);
    this.firstName.innerHTML = `${window.player.FirstName}`;
  };

  readDataBase = () => {
    this.playerLines.innerHTML = '';

    window.database.readAll('players').then((result: Array<Player>) => {
      for (let i = 0; i < result.length; i++) {
        const playerOneLine = document.createElement('li');
        playerOneLine.className = 'playerOneLine';

        const playerName = document.createElement('span');
        playerName.className = 'playerName';

        const playerDelete = document.createElement('div');
        playerDelete.className = 'playerDelete';
        playerDelete.innerHTML = 'X';
        playerDelete.addEventListener('click', e => {
          const clickedPlayer = (e.target as Element).closest('li')?.dataset
            .name;
          if (clickedPlayer) {
            window.database
              .deleteOne('players', clickedPlayer)
              .then(res => console.log(res));
          }
        });

        if (result[i].FirstName.length > 9) {
          playerName.innerHTML = `${result[i].FirstName.slice(0, 8)}... `;
        } else {
          playerName.innerHTML = result[i].FirstName;
        }
        playerOneLine.setAttribute('data-name', result[i].FirstName);
        playerOneLine.append(playerName);
        playerOneLine.append(playerDelete);
        this.playerLines.append(playerOneLine);
      }
    });
  };
}
