import { ROOM_START, GameState, gameRooms } from '@/game';

export function handleRoom(gameState: GameState, playerAction: number | null) {
  const currentRoom = gameState.room;
  const attemptedRoom = playerAction;

  if (attemptedRoom === null) {
    return { room: gameRooms[currentRoom], isValidAction: false };
  }

  // Allow player to turn back to beginning when they've come to an ending.
  if (!gameRooms[currentRoom].options && attemptedRoom === ROOM_START) {
    return { room: gameRooms[ROOM_START], isValidAction: true };
  }

  // If player is attempting to move to an invalid room, disallow it.
  if (!gameRooms[currentRoom].options?.[attemptedRoom]) {
    return { room: gameRooms[currentRoom], isValidAction: false };
  }

  return { room: gameRooms[attemptedRoom], isValidAction: true };
}
