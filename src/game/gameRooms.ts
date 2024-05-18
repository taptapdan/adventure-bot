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

import { GameItem, imagePath } from '@/game';

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
  /**
   * INTRODUCTION
   */
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

  /**
   * AROUND THE TABLE
   */
  1: {
    id: 1,
    text: `
      <p>As the sun dips below the horizon, casting long shadows on the quiet streets, you arrive at your friend's house, a sense of anticipation thrumming in your veins. It's Friday evening, and the night is ripe for Dungeons & Dragons. Your backpack is a treasure chest of essentials: your meticulously crafted character sheet, a clinking hoard of dice, and an arsenal of snacks. You’re primed to journey into realms unknown.</p>
      <p>Stepping into the house, you're greeted by a cacophony of voices and the warm glow of camaraderie. Your friends are already gathered around the table, eyes gleaming with excitement. Mike, the omnipotent game master, is orchestrating the final touches of tonight's saga. Sarah and Dave are lost in the personas of their characters, eagerly awaiting the adventure ahead.</p>
      <p>You settle into your seat, unveiling your character sheet with a flourish. Tonight, you are Arthas, a level 3 wizard and master illusionist, whose deft command of the arcane can twist reality and beguile the senses. The thrill of the impending adventure courses through you as Mike begins to weave the tale.</p>
      <p>He conjures a world teetering on the edge of oblivion, menaced by a malevolent sorcerer with dark ambitions of domination. The weight of destiny falls upon your group; only you and your companions can thwart this dire threat. The quest is clear: seek out the sorcerer and vanquish him before his shadow engulfs all.</p>
      <p>As the story unfolds, you are drawn deeper into the game’s tapestry. The lines between reality and fantasy blur. Your illusions sow chaos among your foes, and each victory sends a surge of exhilaration through you. Arthas’ cunning and your own merge seamlessly; you are no longer just a player but a hero within this world.</p>
      <p>But as the night deepens, an odd sensation tugs at the edges of your awareness. It’s subtle at first, a whisper of something amiss. Yet it grows insistent, a strange pull that defies reason. Dismissing it as the vividness of your imagination, you press on. However, the pull becomes undeniable, wrapping around you like tendrils of the very illusions you command.</p>
      <p>And then, it happens. The game’s reality and your own converge in a dizzying whirl. You’re no longer just guiding Arthas; you’re being drawn into his world. The boundary between player and character dissolves, and you realize with a jolt of awe and trepidation: you are being pulled into the game world for real.</p>
      <p align="center">
        <img src="${imagePath('IllustrationAroundTheTable.jpg')}" alt="" />
      </p>
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
