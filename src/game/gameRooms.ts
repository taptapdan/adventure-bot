/**
 * intro: give the user the option to "use item" to do some as one of the exit
 * options. when the user attempts to do so, respond by letting them know they
 * can't do that yet because they don't have the item. make it funny. you reach
 * into your pocket and pull out a key and find your hand is still empty...
 * because you don't have a key!
 *
 * initially, the "use" option is regular text, but once the inventory system
 * is introduced, now options that require options will be <em> or something to
 * indicate the user doesn't yet have the item.
 *
 * do you hear the music?
 * yes: liar. i just said the music was nothing you'd ever heard before.
 * no: oh, sorry, you're right. we haven't put it on yet. here you go...
 *
 * intro: the use has an ipod, or some way to play music, link the
 * https://www.youtube.com/watch?v=dI7tjPGEz7U video for them to listen to while
 * they play the game.
 */

import { GameItem } from '@/game';

export type GameRoom = {
  id: number;
  text: string;
  options?: { [nextRoomIndex: string]: string };
  itemsGive?: GameItem['label'][];
  itemsTake?: GameItem['label'][];
};

type GameRooms = {
  [roomIndex: string]: GameRoom;
};

export const ROOM_INTRO = 0;
export const ROOM_START = 1;

export const gameRoomsLost: GameRoom = {
  id: 0,
  text: `
  <p>
    <b>Your surroundings begin to shimmer and blur, melting into an inky
    darkness.</b> You can't remember where you were or how you got here. The
    void is all-consuming, and you're utterly alone. The silence is thick,
    almost tangible. But then, a tap on your shoulder sends a jolt through you.
    You whirl around.
  </p>
  <p>
    "I'm sorry, but your adventure has come to an unexpected end," a disembodied
    voice intones from the abyss. "I was saving the game state within the
    original post, but it seems to have drifted into the void. And once
    something ends up in the void, well, nothing ever comes back."
  </p>
  <p>
    The voice pauses, as if pondering the mysteries of the universe. "Management
    says that if you'd like to begin anew, you can do so by
    <a href="${process.env.GAME_URL}/issues/new">creating a new issue</a>.
    Whatever that means. Management often speaks in riddles I can't quite
    decipher."
  </p>
  `,
};

export const gameRooms: GameRooms = {
  0: {
    id: 0,
    text: `
    <p><b>Welcome, traveller!</b></p>
    <p>This is a placeholder for instructions on how to play the game.</p>
    <p>Let's practice!</p>
`,
    options: {
      1: 'If you decide to play the game',
    },
  },
  1: {
    id: 1,
    text: `
<b>Welcome, traveller.</b> It's been a long journey and you are in need of rest.
    `,
    options: {
      2: 'If you decide to rest',
      3: 'If you decide to push on',
    },
  },

  2: {
    id: 2,
    text: `
<b>You're in luck. I have a room available.</b>
`,
    options: {
      1: 'Start over.',
    },
    itemsGive: ['fire-bottle'],
  },

  3: {
    id: 3,
    text: `
<b>Come back any time.</b>
`,
    itemsTake: ['fire-bottle'],
  },

  4: {
    id: 4,
    text: `
<b>Secret room.</b> I give you ham.
`,
    options: {
      1: 'Start over.',
    },
    itemsGive: ['ham-shank'],
  },

  5: {
    id: 5,
    text: `
<b>Secret room.</b> I give you all.
`,
    options: {
      1: 'Start over.',
    },
    itemsGive: ['fire-bottle', 'ham-shank'],
  },

  6: {
    id: 6,
    text: `
<b>Secret room.</b> I take all.
`,
    options: {
      1: 'Start over.',
    },
    itemsTake: ['fire-bottle', 'ham-shank'],
  },
};
