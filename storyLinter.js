let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');

console.log(storyWords.length);

const betterWords = storyWords.filter(word =>
 !unnecessaryWords.includes(word)
);

console.log(betterWords.length);

const overusedWordsCount = storyWords.filter(word => overusedWords.includes(word)
);

console.log(`You have used ${overusedWordsCount.length} times of overused words.`);

const cutOverusedWords = betterWords.filter(word =>
    !overusedWords.includes(word)
    );

const sentenceCount = storyWords.filter (punctuation => {
  return punctuation.includes('.') || punctuation.includes('!')
});

console.log(`There are ${sentenceCount.length} sentences.`);

const overusedWordsCountReally = overusedWordsCount.filter(really => {
  return really.includes('really')
});

const overusedWordsCountBasically = overusedWordsCount.filter(basically => {
  return basically.includes('basically')
});

const overusedWordsCountVery = overusedWordsCount.filter(very => {
  return very.includes('very')
});

const logAll = () => console.log(`The essay contains ${storyWords.length} words. There are ${sentenceCount.length} sentences in it. You have used ${overusedWordsCountReally.length} times of 'really', ${overusedWordsCountBasically.length} of 'basically and ${overusedWordsCountVery.length} of 'very' in the essay.`);

logAll();



console.log(cutOverusedWords.join(' '));
