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
      <p>Stepping into the house, you're greeted by a cacophony of voices and the warm glow of camaraderie. Your friends are already gathered around the table, eyes gleaming with excitement. Ethan, the omnipotent game master, is orchestrating the final touches of tonight's saga. Olive and Quentin are lost in the personas of their characters, eagerly awaiting the adventure ahead.</p>
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
      <p>Looking around, you find yourself in a dense thicket. The air is thick with the scent of pine and the rustle of unseen creatures. Olive—now a fierce ranger—gestures toward a clearing up ahead, her keen eyes spotting something the rest of you have missed.</p>
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
      <p>A tense tableau unfolds as the ogre, driven by some inscrutable purpose, hoists the decrepit wagon upon its broad shoulder. You and your companions exchange wary glances, realizing that you are now unwilling passengers in the ogre's journey.</p>
      <p>Do you and your companions dare to slip away from the wagon's shelter while the ogre's attention is diverted, or do you opt to maintain your concealment, intrigued by the destination the ogre might lead you to?</p>
      <p align="center">
        <img src="${imagePath('IllustrationOgre.jpg')}" alt="" />
      </p>
`,
    options: {
      6: 'If you remain hidden within the wagon',
      7: 'If you attempt to escape undetected',
    },
  },

  /**
   * FACE THE DANGER
   */
  5: {
    id: 5,
    text: `
      <p>As the trees surrounding the clearing sway and rustle, a palpable tension fills the air, signaling the imminent arrival of a formidable creature. With weapon in hand, you stand poised, ready to confront the enigmatic peril lurking within the shadows.</p>
      <p>Abruptly, a dragon emerges from the dense foliage. Its form is sleek and sinuous, adorned with scales that shimmer in the moon's ethereal glow. Glowing orbs of fire serve as its eyes, while its maw bristles with razor-sharp teeth, a testament to its ferocious nature. With a serpentine grace, it slinks forth, its presence commanding respect and trepidation.</p>
      <p>The heat radiating from its colossal frame leaves no doubt—this is no ordinary creature. As it fixates its gaze upon you and your companions, anticipation hangs thick in the air, each moment pregnant with uncertainty. With a subtle shift, it begins to part its jaws, poised to unleash its might upon you and your intrepid fellowship.</p>
      <p align="center">
        <img src="${imagePath('IllustrationDragon.jpg')}" alt="" />
      </p>
`,
    options: {
      13: 'If you harness your powers of illusion to confound the dragon',
      14: 'If you engage in dialogue in hopes of fostering a peaceful resolution',
    },
  },

  

  /**
   * REMAIN WITHIN THE WAGON
   */
  6: {
    id: 6,
    text: `
      <p>As the lumbering ogre carries the wagon toward its encampment, you and your companions huddle in silence, concealed within its wooden confines. Every creak and jostle threatens to betray your presence, yet the creature remains preoccupied with its burden, oblivious to your stealthy intrusion.</p>
      <p>Time crawls by like a wounded beast as the ogre trudges onward, the distant sounds of raucous laughter and guttural shouts heralding your approach to the heart of the ogre encampment. With a resounding thud, the wagon is deposited among its brethren, and you hold your breath, praying to escape their notice.</p>
      <p>But fortune proves fickle, and a curious ogre peers into the wagon, its eyes widening with gleeful discovery. A chorus of excitement erupts among the brutish creatures as they gather around, their intentions all too clear.</p>
      <p>Trapped like cornered prey, you and your companions are powerless as the ogres seize you, their rough hands dragging you from the wagon's sanctuary. Panic claws at your throat as you're hurled into a cauldron-sized pot, the sickening scent of cooking fires mingling with the acrid tang of fear.</p>
      <p>With desperate cries echoing into the night, you thrash against your captors, but their grip is unyielding, their laughter a cruel symphony of impending doom. As the flames lick hungrily at your skin and the scent of roasting flesh fills the air, you realize with chilling finality that your adventure has reached its grisly conclusion. Trapped in the clutches of the ogres, your fate is sealed, and there's no heroism or magic to save you from becoming their next meal.</p>
`,
  },

  /**
   * SIGNPOSTS ALONG THE ROAD
   */
  7: {
    id: 7,
    text: `
      <p>Emerging from the wagon’s shelter while the ogre's attention wanes, you and your companions find yourselves on a winding path that meanders through the depths of a dense forest. The towering trees loom overhead, their ancient boughs whispering secrets in the gentle breeze that caresses your skin.</p>
      <p>Continuing along the path, your gaze is drawn to a sight that stirs both awe and trepidation—a castle, its silhouette rising majestically above the canopy like a sentinel guarding forbidden secrets.</p>
      <p>Approaching cautiously, you spy a weathered sign warning of the castle's forbidding presence: "BEWARE! Evil Sorcerer's Castle Ahead." Another sign follows, its ominous message clear: "Enter at your own risk!" And yet another, bearing a final plea: "TURN BACK! You have been warned!"</p>
      <p>The castle itself is a testament to ages long past, its formidable silhouette etched against the sky like a dark promise. Towering spires pierce the heavens, while thick stone walls stand as silent sentinels against the encroaching darkness. Every shadow seems to pulse with latent menace, every stone imbued with the weight of centuries-old secrets.</p>
      <p>Standing before the imposing gates, a shiver of apprehension courses through you. Who would willingly call this gloomy fortress home? Doubt gnaws at the edges of your resolve, urging caution and second thoughts.</p>
      <p>Should you brave the unknown depths of this foreboding castle, risking life and limb in pursuit of glory? Or heed the warnings and turn back, leaving the mysteries of the castle to slumber undisturbed? The choice hangs heavy in the air, a crossroads where bravery and prudence collide.</p>
      <p align="center">
        <img src="${imagePath('IllustrationCastle.jpg')}" alt="" />
      </p>
`,
    options: {
      8: 'If you heed the advice of the signs',
      9: 'If you enter the castle gates',
    },
  },

  /**
   * TURN BACK
   */
  8: {
    id: 8,
    text: `
      <p>As you and your companions turn away from the foreboding castle, a collective sigh of relief sweeps through your group. It dawns on you that facing the malevolent sorcerer and his arcane machinations might be a quest best left for another day. Heeding the warnings adorning the path, you opt to seek refuge and preparation before daring to confront such formidable adversaries.</p>
      <p>Following the instincts honed by countless adventures in D&D, you set your sights on an inn where side quests await and opportunities to hone your skills beckon.</p>
      <p>But fate, it seems, has other plans. A figure emerges along the path, an old man whose presence eluded your notice until now. "I've got a side quest for you," he declares, his voice laden with mystery and intrigue. Drawn by curiosity, you cautiously approach, wondering what trials lie in store.</p>
      <p>Yet as you near the stranger, a noxious odor assaults your senses, a foul stench reminiscent of overripe Limburger cheese. Alarm bells clang in your mind, urging caution, but before you can react, it's too late.</p>
      <p>In a whirl of dark magic, the old man sheds his disguise, revealing his true form—the malevolent sorcerer himself. With a sinister grin, he weaves a spell that twists and distorts your very being, reshaping you into something unrecognizable.</p>
      <p>As the magic fades, you find yourself frozen in place, your body transformed into a silent sentinel—a sign, bearing ominous warnings of the sorcerer's domain. Your companions, too, have fallen prey to the sorcerer's curse, their forms now mere echoes of their former selves.</p>
      <p>Olive's sign reads, “WARNING! The castle is off limits!”</p>
      <p>And Quentin's, “THIEVES! There is no cheese to be found ahead.”</p>
      <p>You glance down at the sign where your body once stood, reading the grim proclamation: “NOTICE! Trespassers will be punished!”</p>
      <p>Trapped in this surreal nightmare, disbelief washes over you, mingling with a creeping sense of dread. You can only pray that someone will come to shatter the sorcerer's vile enchantment, freeing you from your wooden prison and restoring you to your true form. Until then, you stand as a silent testament to the sorcerer's twisted machinations, a pawn in his sinister game of magic and deceit.</p>
`,
  },

  /**
   * OF MICE AND PORTALS
   */
  9: {
    id: 9,
    text: `
      <p>As the castle gates creak open before you, a cacophony of voices drifts on the air, intermingling with raucous bursts of laughter, like the rolling waves crashing against the shores of mirth. It's as if a grand revelry is in full swing somewhere within the labyrinthine walls. Intrigued, you and your companions heed the call of curiosity, eager to uncover the source of the commotion.</p>
      <p>Venturing deeper into the castle's depths, you traverse dimly lit corridors and ornate halls, the echoes of your footsteps a haunting cadence against the cold stone. At last, you stumble upon the origin of the lively chatter—a gathering of mice, their tiny forms clustered together in animated conversation.</p>
      <p>The sight of the mice leaves you and your friends dumbfounded, while the tiny creatures seem equally taken aback by your presence. You approach the mice cautiously, your questions hanging in the air like unspoken spells. "Where is the sorcerer?" you inquire, hoping for answers amidst the unlikely company.</p>
      <p>"Oh, him," one of the mice responds, its voice surprisingly robust for its diminutive size. "Been missing for years. Wandered off into one of them portals down in the basement. Takes you to other worlds, it does. But seems they don't bring you back here."</p>
      <p>The revelation sparks a glimmer of hope amidst the uncertainty. Olive's voice rings out with newfound determination, "Perhaps one of these portals can lead us back home!"</p>
`,
    options: {
      10: 'You ask the mice to show you the portals',
    },
  },

  /**
   * THE TWO PORTALS
   */
  10: {
    id: 10,
    text: `
      <p>"We'd be delighted to assist! You see, that eccentric sorcerer had an obsession with cheese, and he left behind this enchanted cabinet that churns out cheese endlessly. We've established quite the operation and prefer to keep our clandestine affairs undisturbed by meddling humans. Hence the signs we've posted around the castle, warding off nosy townsfolk. So, we'll guide you to the portals, on one condition: you pledge to utilize one and maintain our secrecy."</p>
      <p>With the mice as your guides, you and your companions descend into the depths of the castle, arriving at the basement where two portals stand sentinel. The portals emit a subtle hum, and your gaze flits between the shifting landscapes glimpsed through their ephemeral thresholds. Occasionally, both portals offer tantalizing views of your hometown, although discerning reality from illusion proves a challenge without stepping through.</p>
      <p>One portal emanates a radiant azure hue, while its counterpart shimmers with a verdant emerald glow.</p>
      <p align="center">
        <img src="${imagePath('IllustrationPortals.jpg')}" alt="" />
      </p>
`,
    options: {
      11: 'If you enter the blue portal',
      12: 'If you enter the green portal',
    },
  },

  /**
   * THE BLUE PORTAL
   */
  11: {
    id: 11,
    text: `
      <p>After much deliberation, you and your companions opt for the blue portal. Stepping through the shimmering gateway, a surge of nervous excitement courses through you as you traverse the threshold. Emerging on the other side, you find yourselves back in Ethan's basement, seated once more around the D&D table.</p>
      <p>Ethan continues to narrate the unfolding quest, seemingly unaware of your recent journey. It takes a moment for you to fully acclimate to the familiar surroundings. Glancing at Olive and Quentin, you sense their shared disorientation, their expressions mirroring your own bewilderment. It's as though they too experienced the otherworldly journey alongside you and are equally puzzled by your abrupt return.</p>
      <p>As you grapple with the surreal events, life resumes its normal rhythm. Completing the D&D session with Ethan, you carry on with your day-to-day activities. Yet, the memory of the alternate world lingers, its mysteries tugging at the corners of your mind.</p>
      <p>In the years that follow, conversations with Olive and Quentin frequently circle back to the shared adventure. Together, you endeavor to unravel the enigmas of the castle and contemplate the fate of the elusive sorcerer. While content in your return, you can't help but wonder about the untold adventures that awaited beyond the other portal, forever pondering the tantalizing possibilities of the unknown.</p>
`,
  },

  /**
   * THE GREEN PORTAL
   */
  12: {
    id: 12,
    text: `
      <p>With resolve, you and your friends opt for the green portal, stepping into its verdant glow together. As the shimmering gateway envelops you, you find yourselves once more in Ethan's basement, encircling the D&D table while he narrates the ongoing quest. Yet, an unsettling disorientation grips you, leaving you feeling perplexed and adrift in this familiar yet alien setting.</p>
      <p>Casting a glance at Olive and Quentin, you discern a shared sense of bewilderment mirrored in their expressions. Their silent exchange hints at a shared experience beyond the bounds of reality.</p>
      <p>Amidst the confusion, a pang of hunger gnaws at your stomach. Turning to Ethan, you request permission to raid the snack stash. "Can we grab a snack?" you ask. Ethan nods, gesturing towards the fridge. "Sure, any cheese you’d like from the fridge," he replies.</p>
      <p>"Cheese? I don’t want cheese," you respond, to which Ethan gives you a puzzled look. "What do you mean, you don't want cheese? You know that's all there is to eat ever since the sorcerer took over our world."</p>
      <p>As Ethan's words sink in, a revelation dawns upon you. Recollections of the talking mice's warnings flood back—the sorcerer's cheese obsession, his plunge into the portals. It becomes clear: he has seized control of this world, and his reign has brought forth a singular culinary tyranny.</p>
      <p>And to your dismay, you despise cheese.</p>
`,
  },
};
