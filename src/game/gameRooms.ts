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
import { imagePath } from './imagePath'

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
      1: 'Begin your adventure',
    },
  },

  /**
   * AROUND THE TABLE
   */
  1: {
    id: 1,
    text: `
      <p>As the sun dips below the horizon, casting long shadows on the quiet streets, you arrive at your friend's house, a sense of anticipation thrumming in your veins. It's Friday evening, and the night is ripe for Dungeons & Dragons. Your backpack is a treasure chest of essentials: your meticulously crafted character sheet, a clinking hoard of dice, and an arsenal of snacks. You’re primed to journey into realms unknown.</p>
      <p>Stepping into the house, you're greeted by a cacophony of voices and the warm glow of camaraderie. Your friends are already gathered around the table, eyes gleaming with excitement. Ethan, the omnipotent game master, is orchestrating the final touches of tonight's saga. Olivia and Aiden are lost in the personas of their characters, eagerly awaiting the adventure ahead.</p>
      <p>You settle into your seat, unveiling your character sheet with a flourish. Tonight, you are Xander, a level 3 wizard and master illusionist, whose deft command of the arcane can twist reality and beguile the senses. The thrill of the impending adventure courses through you as Ethan begins to weave the tale.</p>
      <p>He conjures a world teetering on the edge of oblivion, menaced by a malevolent sorcerer with dark ambitions of domination. The weight of destiny falls upon your group; only you and your companions can thwart this dire threat. The quest is clear: seek out the sorcerer and vanquish him before his shadow engulfs all.</p>
      <p>As the story unfolds, you are drawn deeper into the game’s tapestry. The lines between reality and fantasy blur. Your illusions sow chaos among your foes, and each victory sends a surge of exhilaration through you. Xander’s cunning and your own merge seamlessly; you are no longer just a player but a hero within this world.</p>
      <p>But as the night deepens, an odd sensation tugs at the edges of your awareness. It’s subtle at first, a whisper of something amiss. Yet it grows insistent, a strange pull that defies reason. Dismissing it as the vividness of your imagination, you press on. However, the pull becomes undeniable, wrapping around you like tendrils of the very illusions you command.</p>
      <p>And then, it happens. The game’s reality and your own converge in a dizzying whirl. You’re no longer just guiding Xander; you’re being drawn into his world. The boundary between player and character dissolves, and you realize with a jolt of awe and trepidation: you are being pulled into the game world for real.</p>
      <p align="center">
        <img src="${imagePath('IllustrationAroundTheTable.jpg')}" alt="" />
      </p>
    `,
    options: {
      2: 'Continue',
    },
  },

  /**
   * ENTER THE GAME WORLD
   */
  2: {
    id: 2,
    text: `
      <p>Suddenly, the world around you shimmers and fades, like a mirage giving way to a deeper reality. You blink, and when your eyes refocus, you find yourself not in your friend's house, but in the heart of the game world itself. Your friends are no longer just friends—they are now their characters, fully realized and vividly alive.</p>
      <p>Shock and confusion flood your senses, but there's no time to dwell on the surreal twist of fate. You quickly understand that to save this world, you must embrace your new reality. Drawing a deep breath, you steel yourself, heart pounding with a mix of fear and excitement. The quest to defeat the evil sorcerer is now more real than ever, and the stakes have never been higher.</p>
      <p>Looking around, you find yourself in a dense thicket. The air is thick with the scent of pine and the rustle of unseen creatures. Olivia—now a fierce ranger—gestures toward a clearing up ahead, her keen eyes spotting something the rest of you have missed.</p>
      <p>"Over there," she whispers, her voice steady but laced with urgency. "We should check it out."</p>
`,
    options: {
      3: 'Head to the clearing',
    },
  },

  /**
   * SOMETHING APPROACHES
   */
  3: {
    id: 3,
    text: `
      <p>As you and your party step into the clearing, a hush falls over the land, wrapping you in a blanket of eerie silence. The towering trees stretch their branches like skeletal fingers, casting long shadows that dance in the dim light filtering through the dense canopy. The only sound is the whispering of leaves, a haunting melody carried by the wind.</p>
      <p>In the heart of the clearing stands a relic of forgotten times—an abandoned wagon, its wooden frame weathered by the passage of years, its once vibrant canvas now a patchwork of holes and decay. It's a ghostly remnant of a bygone era, left to molder in the embrace of nature's grasp.</p>
      <p>But as you and your companions draw nearer, a primal warning prickles at the back of your mind. From the shadows beyond the clearing, a low growl rumbles like distant thunder, steadily growing louder with each passing moment. Whatever lurks in the darkness approaches.</p>
      <p>A quick exchange of glances among your party reveals the shared realization—you are not alone. Danger lurks in the unseen depths of the forest, and you must decide swiftly how to confront it.</p>
      <p>Do you opt for stealth, praying the creature passes without detecting your presence? Or do you ready your weapons, steeling yourselves for a confrontation against the unknown?</p>
`,
    options: {
      4: 'If you hide in the wagon',
      5: 'If you stay and face the approaching danger'
    },
  },

  /**
   * REFUGE WITHIN THE WAGON
   */
  4: {
    id: 4,
    text: `
      <p>As you and your companions dash towards the dilapidated wagon, the growls of the approaching creature echo ominously through the clearing. Time is a fleeting ally, urging you to act swiftly to evade the looming danger. With hearts pounding and adrenaline coursing through your veins, you scour the surroundings for sanctuary.</p>
      <p>Miraculously, the abandoned wagon stands as a bastion of concealment, its weathered frame offering refuge from prying eyes. You and your comrades hastily cram yourselves inside, limbs entangled in a desperate bid for cover, just as the creature emerges into the clearing. Silence becomes your ally as you hold your breath, willing your heartbeats to silence.</p>
      <p>Peering cautiously through a tear in the tattered canvas, you glimpse the source of your peril—a hulking ogre, its brutish form looming like a mountain of muscle and menace. The ogre prowls the clearing with a predatory intent, its gaze scanning for intruders.</p>
      <p>With bated breath, you observe as the ogre's nostrils flare, inhaling deeply as if savoring the scent of intruders. Time stretches, each second feeling like an eternity as the ogre's scrutiny lingers. A low rumble of frustration escapes its throat, reverberating through the clearing like distant thunder. Despite its relentless search, the ogre remains unaware of your clandestine sanctuary within the wagon's embrace.</p>
      <p>A tense tableau unfolds as the ogre, driven by some inscrutable purpose, hoists the decrepit wagon upon its broad shoulder. You and your companions exchange wary glances, realizing that you are now unwilling passengers in the ogre's journey. The question hangs heavy in the air, laden with uncertainty and apprehension.</p>
      <p>Do you and your companions dare to slip away from the wagon's shelter while the ogre's attention is diverted, or do you opt to maintain your concealment, intrigued by the destination the ogre might lead you to?</p>
      <p align="center">
        <img src="${imagePath('IllustrationOgre.jpg')}" alt="" />
      </p>
`,
    options: {
      1: 'Start over.',
    },
  },

};
