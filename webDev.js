const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = averageOfEvenNumbers(numbersArray);
function averageOfEvenNumbers(numbers) {
 
  const evenNumbers = numbers.filter(number => number % 2 === 0);


  const sumOfEvenNumbers = evenNumbers.reduce((sum, number) => sum + number, 0);

  const average = evenNumbers.length === 0 ? 0 : sumOfEvenNumbers / evenNumbers.length;

  return average;
}

console.log(result); 

//second question


const wordsArray = ["apple", "banana", "kiwi", "strawberry", "orange"];
const final = findLongestWord(wordsArray);

function findLongestWord(words) {
 
  const longestWord = words.reduce((longest, currentWord) => {
   
    return currentWord.length > longest.length ? currentWord : longest;
  }, '');

  return longestWord;
}

console.log(final); 

//third question 
const booksArray = [
  { title: "got1", author: "Martin", pages: 150 },
  { title: "hp", author: "Rowling", pages: 200 },
  { title: "hot2", author: "Martin", pages: 120 },

];

function averagePages(books) {
  
  const pagesArray = books.map(book => book.pages);

  const sumOfPages = pagesArray.reduce((sum, pages) => sum + pages, 0);

  const average = pagesArray.length === 0 ? 0 : sumOfPages / pagesArray.length;

  return average;
}

const results = averagePages(booksArray);
console.log(results);

//fourth question
const fruitArray = ["apple", "banana","apple", "banana", "banan", "banana", ] ;
const nun = calculateStringFrequency(fruitArray);

function calculateStringFrequency(strings) {
  const frequencyObject = strings.reduce((frequency, str) => {

    frequency[str] = (frequency[str] || 0) + 1;
    return frequency;
  }, {});

  return frequencyObject;
}

console.log(nun);

//fifth question

const peopleArray = [
  { name: "Alice", age: 30, city: "New Jersey" },
  { name: "Bob", age: 40, city: "California" },
  { name: "Charlie", age: 50, city: "New Jersey" },
  { name: "kayle", age: 40, city: "California" },

];
function countPeopleByCity(people) {

  const countByCity = people.reduce((count, person) => {
    // Extract the city from the current person
    const city = person.city;

    count[city] = (count[city] || 0) + 1;

    return count;
  }, {});

  return countByCity;
}

const cityCount = countPeopleByCity(peopleArray);
console.log(cityCount);
