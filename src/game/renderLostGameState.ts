import { gameRoomsLost } from '@/game';

function imagePath(imgName: string) {
  const imagesPath = `${process.env.REPO_URL}/raw/master/public/game`;
  return `${imagesPath}/${imgName}`;
}

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
