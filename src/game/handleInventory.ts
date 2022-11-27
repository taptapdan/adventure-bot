import { GameState, GameRoom, gameItems } from '@/game';

export function handleInventory(gameState: GameState, room: GameRoom) {
  let inventory = [...gameState.inventory];

  const itemIdsToGive = Object.values(gameItems)
    .filter((i) => room.itemsGive?.includes(i.label))
    .map((i) => i.id);

  const itemIdsToTake = Object.values(gameItems)
    .filter((i) => room.itemsTake?.includes(i.label))
    .map((i) => i.id);

  const invSet = new Set([...inventory, ...itemIdsToGive]);
  itemIdsToTake.forEach((id) => invSet.delete(id));

  return [...invSet];
}
