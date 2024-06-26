import { GameState, gameItems, gameRooms, imagePath } from '@/game';

export function renderRoom(gameState: GameState, isValidAction = true) {
  const roomId = gameRooms[gameState.room] ? gameState.room : 1;

  const textRoom = gameRooms[roomId].text.trim();

  const roomOptions = gameRooms[roomId].options || {};
  const roomOptionsKeys = Object.keys(roomOptions);

  // If there are no next room options, this is an ending room.
  const isEnding = roomOptionsKeys.length === 0;

  const textOptions = roomOptionsKeys
    .map((option) => {
      return `
      <p align="right">
      <em>${roomOptions[option]}</e>,<br />turn to page <code>${option}</code>
      </p>
      `;
    })
    .map((o) => o.trim())
    .join('\n')
    .trim();

  const userInventory = gameState.inventory.map((itemId) => {
    const item = gameItems[itemId];

    return `<img src="${imagePath(item.image)}" alt="${
      item.name
    }" width="40" height="40" />`;
  });

  const userHasIventory = userInventory.length > 0;
  const textInventory = userInventory.join(' ');

  let room = '';

  if (!isValidAction) {
    room =
      room +
      `<p align="center">` +
      `<em>That was not a valid action, please try again.</em>` +
      `</p>`;
  }

  const imgHeader = isEnding
    ? `<img src="${imagePath('GameDivEnding.png')}" />`
    : `<img src="${imagePath('GameDivStory.png')}" />`;

  room = room + imgHeader + '\n\n';

  room = room + textRoom + '\n\n';

  if (userHasIventory) {
    room =
      room +
      `<img src="${imagePath('GameDivInventory.png')}" />` +
      '\n\n' +
      textInventory +
      '\n\n';
  }

  if (!isEnding) {
    room =
      room +
      `<img src="${imagePath('GameDivDoor.png')}" />` +
      '\n\n' +
      `The following paths lie before you:\n` +
      textOptions +
      '\n\n';
  }

  room = room + `<img src="${imagePath('GameFooter.png')}" />`;

  if (isEnding) {
    room =
      room +
      `<p align="right">` +
      `<em>If you'd like to start over</em>,<br />` +
      `<a href="${process.env.GAME_URL}/issues/new">create a new issue</a>` +
      `</p>`;
  }

  return { room, isEnding };
}
