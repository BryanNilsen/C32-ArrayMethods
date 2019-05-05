// Lightning Exercise: Write a function that will accept any string and return the number of vowels. Start with simple console logs.

const stringy = "here is the string I have to pluck vowels from";
const vowelsArray = ["a", "e", "i", "o", "u"];

function returnVowels(string) {
  let lowerString = string.toLowerCase().split("");
  let stringArrayOfVowels = [];
  for (i = 0; i < lowerString.length; i++) {
    let letter = lowerString[i];
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      stringArrayOfVowels.push(letter);
    }
  }
  console.log(stringArrayOfVowels);
  console.log(stringArrayOfVowels.length);
}

returnVowels(stringy);
