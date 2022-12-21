//speed Limit = 70
// 5 -> 1 point
//Math.floor()
//12 point -> Licence suspended

function checkSpeed(speed) {
  // start
  let points = 0;

  if (speed < 75) {
    return "Ok";
  }
  if (speed >= 75) points = Math.floor((speed - 70) / 5);
  if (points < 12) {
    return "point: " + points;
  } else return "Licence suspended";
  // end
}

// start
let test = checkSpeed(129);
console.log(test);
// end
//----------------------------------------------------------------
function showNumber(limit) {
  // start
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(i + " EVEN");
    } else console.log(i + " ODD");
  }
  // end
}

// start
showNumber(6);

// end
//----------------------------------------------------------------
function countTruthy(array) {
  // start
  let res = 0;
  for (let i in array) {
    if (array[i]) {
      res++;
    }
  }
  return res;
}
// end

// start
const array = [0, null, undefined, "", 2, 3];

console.log(countTruthy(array));
//----------------------------------------------------------------
function showProperties(obj) {
  // start
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
  // end
}
// start
const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);
// end
//----------------------------------------------------------------
function sum(limit) {
  let total = [];
  // start
  for (i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total.push(i);
    }
  }
  let sum = 0
  for (i in total) {
    sum = sum + total[i]  
  }
  return sum
  // end
}
// start
console.log(sum(10));

// end
//----------------------------------------------------------------
//1-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A
function calculateGrade(marks) {
  // start
  let total = 0;
  let average = 0;
  for (i in marks) {
    total = marks[i] + total;
    average = total / marks.length;
  }
  if (average < 60) {
    return "F";
  } else if (average < 70) {
    return "D";
  } else if (average < 80) {
    return "C";
  } else if (average < 90) {
    return "B";
  } else return "A";
  // end
}
// start
const marks = [80, 80, 50];
console.log(calculateGrade(marks));

//----------------------------------------------------------------
function showStars(row) {
  // start
  let stars = []
  let star = ''
  for(i = 1; i <= row; i++){
    for(j = 1; j <= i; j++) {
      stars.push(star += '*')
    } 
  } 
  return stars
}

s = showStars(3)
for(key in s){
  console.log(s[key])
}
//----------------------------------------------------------------
function showPrimes(limit) {
  // start
  let primes = [];
  for(let i = limit; i > 1; i--){
    if(isPrimenumber(i)){
      primes.push(i)
    }
  }
  return primes
}

function isPrimenumber(num){
  for(let i = num - 1; i > 1; i--){
    if(num % i === 0)
      return false
  }
  return true
}

console.log(showPrimes(20))
//----------------------------------------------------------------
//factory function
function createAddress(street, city, zipCode){
  return {
    street,
    city,
    zipCode
  };
}
let a1 = createAddress('a', 'b', 'c')
console.log(a1)
//constructor function
function Address(street, city, zipCode){
  this.street = street,
  this.city = city,
  this.zipCode = zipCode
};

//----------------------------------------------------------------
let a2 = new Address('a', 'b', 'c')
console.log(a2)

let a3 = new Address('a', 'b', 'c')

function areEqual(a2, a3){
  if(a2.street === a3.street && a2.city === a3.city && a2.zipCode === a3.zipCode){
    return true
  }
  return false
};

function areSame(a2, a3){
if(a2 === a3){
  return true
}
  return false
}
console.log(areEqual(a2,a3))
console.log(areSame(a2,a3))


//----------------------------------------------------------------
const numbers = arrayFromRange(1,4);
console.log(numbers);

function arrayFromRange(min, max){
  let range = [];
  for(let i = min; i <= max; i++){
    range.push(i)
  } 
  return range
}

//----------------------------------------------------------------

const n = [1, 2, 3, 4]

console.log(includes(n, 5));

function includes(array, searchElement){
  for(let e in array){
    if(e === searchElement){
      return true
    }
    return false
  }
}
//----------------------------------------------------------------

const array2 = [1,2,3,4,1];
const output = except(array2,[1,2]);

console.log(output);

function except(array, excluded){
  for(let i in excluded){
    for(let j in array)
      if(excluded[i] === array[j]){
        array.splice(j, 1)
      }
  }
  return array
}

//----------------------------------------------------------------

const num = [1, 2, 3, 4];
const position1 = move(num, 0, 1);
// const position2 = move(numbers, 0, -1);
// const position3 = move(numbers, 3, 3);
console.log(position1);

function move(array, index, offset){
  const position = index + offset;
  if(position >= array.length || position < 0){
    console.error('Invalid offset');
    return;
  }
  const arr = [...array];
  const element = arr.splice(index, 1)[0];
  arr.splice(position, 0, element);
  return arr
}

//----------------------------------------------------------------

const x = [1, 2, 1, 4];
const counting = countOccurrences(x, 1);
console.log(counting);

// function countOccurrences(array, seachElement){
//   let times = 0
//   for(let i in array) {
//     if(array[i] === seachElement){
//       times += 1
//     }
//   } 
//   return times
// }

function countOccurrences(array, seachElement){
  return array.reduce((times, element) => {
    if(element === seachElement) {
      times += 1;
    } 
    return times
  },0)
}

//----------------------------------------------------------------

const y = [1, 2, 3, 4];
const max = getMax(y);
console.log(max);

function getMax(array){
  return array.reduce((accumulator, element) => {
   if(element > accumulator ){
    accumulator = element
   }
   return accumulator
  })
}
//----------------------------------------------------------------

const movies = [
  {title: 'a', year: 2018, rating: '4.5'},
  {title: 'b', year: 2018, rating: '4.7'}, 
  {title: 'c', year: 2018, rating: '3'},
  {title: 'd', year: 2017, rating: '4.5'}
];

// all the movies in 2018 with rating > 4
// sort them by their rating
// Descending order
//pick their title

movies
.filter((element) => element.year === 2018 && element.rating > 4)
.sort((a,b) => (a.rating < b.rating) ? 1 : -1)
.map((e) => console.log(e.title))

//----------------------------------------------------------------

function sum(...args){
  return args.flat(Infinity).reduce((a,b) => a + b);
  // if (Array.isArray(x))
  //   return x.reduce((a,b) => a + b);
  // return x
}

console.log(sum(1,2,3,4))
console.log(sum({}))

//console.log(Array.isArray(sum(1,2,3,4)));

//----------------------------------------------------------------

let circle = {
  radius: 1,
  get area(){
    return Math.PI * this.radius * this.radius
  }
}

circle.radius = 1; // read and write
console.log(circle.area) // only read

//----------------------------------------------------------------
function countOccurrences(array, seachElement){
  if(!Array.isArray(array))
    throw new Error('argument is not array');
    
  return array.reduce((times, element) => {
    if(element === seachElement) {
      times += 1;
    } 
    return times
  },0)
}

const arr = [1, 2, 1, 4];
try {
  const counting = countOccurrences(arr, 1);
  console.log(counting);
}
catch(e){
  console.log(e.message);
}

try{
  console.log(countOccurrences(true, 3));
}
catch(e){
  console.log(e.message)
}