export const generateChicken = () => {
  const WORDS = [
    "puk",
    "pukaaak",
    "cluck",
    "cluck-cluck-cluck",
    "cluckity",
    "bwak",
    "waaak",
    "bok",
    "bwok",
    "cluck-a-buh-gawk",
    "cock-a-doodle-doo",
    "bwwwaaaaaaaaaak",
  ];
  const PUNCTUATIONS = [".", "...", "!", "?"];
  const PARAGRAPH_SIZES = [15, 30, 75];

  const numberOfWords =
    PARAGRAPH_SIZES[Math.floor(Math.random() * PARAGRAPH_SIZES.length)];

  // generate paragraph, with random words, capitalization, and punctuation.
  let paragraph = "";
  let previousWordHadPunctuation = false;
  for (let i = 0; i < numberOfWords; i++) {
    // pick a random word
    let word = WORDS[Math.floor(Math.random() * WORDS.length)];

    // optionally add punctuation
    // note: always add punctuation if it's the last word.
    const shouldAddPunctuation = i === numberOfWords - 1 || Math.random() > 0.9;
    const punctuation = shouldAddPunctuation
      ? PUNCTUATIONS[Math.floor(Math.random() * PUNCTUATIONS.length)]
      : "";
    word = word + punctuation;

    // optionally capitalize the word
    // note: always capitalize if it's the first words, or if preceded by punctuation
    const shouldCapitalize =
      i === 0 || previousWordHadPunctuation || Math.random() > 0.3;
    word = shouldCapitalize ? word[0].toUpperCase() + word.slice(1) : word;

    // preserve info for next iteration
    previousWordHadPunctuation = shouldAddPunctuation;

    // add word to paragraph
    paragraph = paragraph + word;

    // if not last one, add a space
    paragraph = i === numberOfWords - 1 ? paragraph : paragraph + " ";
  }

  return paragraph;
};
