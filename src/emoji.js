const emoji = [
  {
    id: 1,
    emoji: "🤩",
    name: "Grinning Face with Star Eyes",
    description:
      "The star-struck emoji is used when you think that something (or someone!) is amazing, exciting or just pretty dang fabulous."
  },

  {
    id: 2,
    emoji: "🥳",
    name: "Partying Face",
    description:
      "Surrounded by confetti, wearing a cute party hat and blowing a party horn, the partying face is a perfect punctuation to use when celebrating good news, someone’s birthday, or a reason for a literal or figurative party."
  },
  {
    id: 3,
    emoji: "😂",
    name: "Tears of Joy",
    description:
      "Typically used to show something is funny or pleasing—that you are shedding a tear from laughing so hard—Tears of Joy was the most-used emoji on Twitter in the early part of 2022!"
  },

  {
    id: 4,
    emoji: "🥰",
    name: "Smiling Face with Hearts ",
    description:
      "An aura of love and affection surrounds this smiling face with three hearts. Feeling warm and fuzzy about someone? Love what your texting partner is saying? Send this one back!"
  },
  {
    id: 5,
    emoji: "🤣",
    name: "Rolling on the Floor Laughing",
    description:
      "The tilt of the yellow face in this emoji indicates that whatever has been said is not just funny, but it is so funny that it has you rolling on the floor laughing so hysterically that you are crying happy tears. So ROFL, friends."
  },
  {
    id: 6,
    emoji: "🙂",
    name: "Slightly Smiling Face",
    description:
      "A yellow face with simple, open eyes and a thin, closed smile. Conveys a wide range of positive, happy, and friendly sentiments. Its tone can also be patronizing, passive-aggressive, or ironic, as if saying This is fine when it’s really not."
  },
  {
    id: 7,
    emoji: "😕",
    name: "Confused Face",
    description:
      "Thanks to its sad eyes and frown, Confused Face conveys a wide variety of feelings, like sadness, disappointment, frustration, confusion and hesitation."
  },
  {
    id: 8,
    emoji: "😱",
    name: "Face Screaming in Fear",
    description:
      "This one sure does look like it was inspired by Edvard Munch’s iconic painting The Scream! Horror, fright, shock, and intense excitement (both positive and negative) are some of the extreme emotions that the face screaming in fear emoji represents."
  },
  {
    id: 9,
    emoji: "😎",
    name: "Smiling Face with Sunglasses",
    description:
      "Cool, easy-going and carefree are a few of the expressions represented by the smiling face wearing sunglasses."
  },
  {
    id: 10,
    emoji: "🤯",
    name: "Shocked Face with Exploding Head",
    description:
      "It’s common to use this in response to something that is mind-blowing, but the exploding head emoji can also indicate that you are feeling overwhelmed or frustrated."
  },
  {
    id: 11,
    emoji: "🤯",
    name: "Shocked Face with Exploding Head",
    description:
      "It’s common to use this in response to something that is mind-blowing, but the exploding head emoji can also indicate that you are feeling overwhelmed or frustrated."
  },
  {
    id: 12,
    emoji: "🤫",
    name: "Shushing Face",
    description:
      "The Shushing Face emoji generally means that you are letting someone in on a secret or sharing a secret thought, but it can also be used to indicate silence."
  },
  {
    id: 13,
    emoji: "😔",
    name: "Pensive Face",
    description:
      "This emoji perfectly depicts the feeling of sadness with its closed eyes and flat mouth. Used to represent sadness and other similar feelings like disappointment, regret or loneliness, this emoji makes us sad just by looking at it!"
  },
  {
    id: 14,
    emoji: "🤗",
    name: "Smiling Face with Open Hands",
    description:
      "Also known as Hugging Face, this emoji gives a virtual hug with its hands opened and palms facing out. It can be used to express feelings of thanks, support, care, affection and gratitude, as well as other feelings of excitement and enthusiasm. This is why some people think this emoji looks like jazz hands!"
  },
  {
    id: 15,
    emoji: "😉",
    name: "Winking Face",
    description:
      "Using this emoji can mean that you are making a joke, something is ironic, or has a hidden meaning, but it can also be used in a playful, flirting manner."
  },
  {
    id: 16,
    emoji: " 😭",
    name: "Loudly Crying Face",
    description:
      "Sometimes, you just gotta let the cries out! That’s what this wailing face with heavy streams of tears represents. In addition to representing something that has you inconsolable, this emoji can also mean uncontrollable laughter or overwhelming joy."
  },
  {
    id: 17,
    emoji: "😡",
    name: "Pouting Face",
    description:
      "Also known as Enraged Face, when something has you spitting mad or gets your blood boiling, it’s time to bust out this red-faced, angry-eyed emoji. Its name is the Pouting Face Emoji, but the furrowed brows and frowning mouth seem much more angry than pouty!"
  },
  {
    id: 18,
    emoji: "😋",
    name: "Face Savoring Food",
    description:
      "There are a few tongue-out emojis. This emoji, in particular, is licking its lips after eating something delicious. In addition to letting someone know that their lasagna was *chef’s kiss* this playful tongue-out emoji can be used in a flirty way, or to express that you were kidding about your message."
  },
  {
    id: 19,
    emoji: "😴",
    name: "Sleeping Face",
    description:
      "Sign off at the end of a bedtime text session with the sleeping face emoji. Or let your pal know that you are totally bored—aka, the topic is a snooze."
  },
  {
    id: 20,
    emoji: "😩",
    name: "Weary Face",
    description:
      "Sometimes, you are just so dang tired, sad, or frustrated you want to give up! Enter Weary Face, with its closed eyes, a furrowed brow and frown."
  },
  {
    id: 21,
    emoji: "🙃",
    name: "Upside-Down Face",
    description:
      "The classic smiley face is flipped upside down in this emoji, which is used to suggest silliness or goofiness or take a tone of sarcasm or irony."
  },
  {
    id: 22,
    emoji: "😩",
    name: "Weary Face",
    description:
      "Sometimes, you are just so dang tired, sad, or frustrated you want to give up! Enter Weary Face, with its closed eyes, a furrowed brow and frown."
  },
  {
    id: 23,
    emoji: "🥵",
    name: "Overheated Face",
    description:
      "Also called Hot Face, this emoji is a reddish-orange face has beads of sweat, its tongue sticking out, and furrowed brows. Use it when hot yoga was too much for you to handle this morning, you’ve been sweating it out waiting to hear back on some life-changing news… or you think someone is physically attractive."
  },
  {
    id: 24,
    emoji: "😳",
    name: "Flushed Face",
    description:
      "With its wide eyes and red cheeks, this animated emoji is blushing with embarrassment. It can also mean embarrassment, shame, shyness, disbelief, amazement, shock, surprise or any other intense emotions that might leave you feeling rather flushed"
  }
];

export default emoji;
