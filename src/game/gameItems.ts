export type GameItem = {
  id: number;
  image: string;
  name: string;
  label: string;
};

export type GameItems = { [itemId: number]: GameItem };

export const gameItems: GameItems = {
  1: {
    id: 1,
    image: 'IconFireBottle.png',
    name: 'Fire Bottle',
    label: 'fire-bottle',
  },
  2: {
    id: 2,
    image: 'IconHamShank.png',
    name: 'Ham Shank',
    label: 'ham-shank',
  },
};
