import { GameState, handleInventory, handleRoom } from '@/game';

export function handleTurn(gameState: GameState, playerAction: number | null) {
  const { room, isValidAction } = handleRoom(gameState, playerAction);
  const inventory = handleInventory(gameState, room);
  return { gameState: { room: room.id, inventory }, isValidAction };
}
