import { gameRoomsLost, imagePath } from '@/game';

export function renderGameStateLost() {
  const textRoom = gameRoomsLost.text.trim();

  const room =
    `<img src="${imagePath('GameDivStory.png')}" />` +
    '\n\n' +
    textRoom +
    '\n\n' +
    `<img src="${imagePath('GameFooter.png')}" />`;

  return { room, isEnding: false };
}
