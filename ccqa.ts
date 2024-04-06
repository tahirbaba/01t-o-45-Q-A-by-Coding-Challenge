#! /usr/bin/env node

import inquirer from "inquirer";

// *Question 1:* Install Node.js, TypeScript and VS Code on your computer/Laptop.
// Challenge Coding Qno:01
// Envirnment install:

//*Question 2:* Personal Message: Store a person’s name in a variable and print a message to them, like “Hel
// Challenge Coding Qno:02
let personName:string = "Tahir";
console.log(`Here ${personName}, is learning Typescript`);
// in print: Here { Tahir } is learning Typescript

// *Question 3:* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Challenge Coding Qno:03

let name1: String = "Imran";
console.log(name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase());    // in print: Imran

let name2: String = "Shahid";
console.log(name2.toLowerCase());    // in print: shahid

let name3: String = "Zahid";
console.log(name3.toUpperCase());// in print: ZAHID

// *Question 4:* Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
// Challenge Coding Qno:04

let famousePerson:String = "Allama Iqbal"
let message1:string = `${famousePerson}, "have a very greatfull and peacefull poetry."`;
console.log(message1);        // in print: Allama Iqbal, "have a very greatfull and peacefull poetry."

// *Question 5:* Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// Challenge Coding Qno:05

let authorName:String = "Imam Ahmed Raza";
let message2:String = `${authorName}, "is a great Scholar in the world."`;
console.log(message2);     // in print: Imam Ahmed Raza, "is a great Scholar in the world.

// *Question 6:* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
// Challenge Coding Qno:06

let name4: string = "     Mustufa      ";
"/n"; 
console.log(name4);
console.log(name4.trim());
// in print:         Mustufa  (withspace)
//           Mustufa  (withoutspace)

//                 or

let name5: string = "     Mustufa      ";
"/t"; 
console.log(name5);
console.log(name5.trim());
// in print:         Mustufa  (withspace)
//           Mustufa  (withoutspace)

// *Question 7:* Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Enclose your operations in print statements.
// Challenge Coding Qno:07

console.log( 4 + 4);       // in print:   8
console.log( 12 - 4);      // in print:   8
console.log( 4 * 2);       // in print:   8
console.log( 16 / 2);      // in print:   8

//*Question 8:* You should create four lines that look like this:    console.log(5 + 3)     Your output should simply be four lines with the number 8 appearing once on each line.
// Challenge Coding Qno:08
let favoriteNumber1: number = 9;
let message3: string = `"My favorite number is" ${favoriteNumber1}`;
console.log(message3);          // in print: "My favorite number is" 9
 
// *Question 9:* Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number. Print that message.
// Challenge Coding Qno:09
let favoriteNumber2:number = 9;
let message4:string = `"My Wedding date is" ${favoriteNumber2}`;
console.log(message4);           // in print: "My Wedding date is" 9

// *Question 10:* Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
// Challenge Coding Qno:10
// "Muhammad Tahir Hasni" is starting Programming on 06 february 2024: 
let myName:string = "Muhammad Tahir Hasni";
let message5:string = `" ${myName} is starting Programming on 06 february 2024 at Govrnor House Karachi"`;
console.log(message5);     // in print: "Muhammad Tahir Hasni is starting Programming on 06 february 2024 at Govrnor House Karachi"

// *Question 11:* Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
// Challenge Coding Qno:11
let names1: string[] = ["Taimoor", "Iqbal", "Shakil",];
for (let i = 0; i < names1.length; i++) {
    console.log(names1[i]);
}   // in print: Taimoor
//               Iqbal
//               Shakil

// *Question 12:* Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
// Challenge Coding Qno:12
let names2: string[] = ["Owais", "Ehsan", "Raof",];
for (let name6 of names2) {
    console.log(`Please ${name6}, do hard working`);
}

// *Question 13:* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// Challenge Coding Qno:13
let transport:string[] = ["Chicken Biryani","Beef Biryani","Mutton Biryani"];
transport.forEach(transport => {
    console.log(`I like a ${transport} to eating.`);
}); //   in print:   I like a Chicken Biryani to eating.
//                   I like a Beef Biryani to eating.
//                   I like a Mutton Biryani to eating.

// *Question 14:* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// Challenge Coding Qno:14
let guests1:string[] = ["Muhammad Shakil", "Muhammad Ibrahim","Muhammad Raof"];
guests1.forEach(guests => {
     console.log(`Dear ${guests}, please come to my home to Iftar Party.`);
});   // in print: Dear Muhammad Shakil, please come to my home to Iftar Party.
//                 Dear Muhammad Ibrahim, please come to my home to Iftar Party.
//                 Dear Muhammad Raof, please come to my home to Iftar Party.

// *Question 15:* Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
// Challenge Coding Qno:15
let unableToAttend = "Muhammad Ibrahim";
console.log(`${"Muhammad Ibrahim"} can't make it to dinner.`);
let newGuest = "Muhammad Waqas";
guests1[guests1.indexOf("unableToAttend")] = newGuest;
guests1.forEach(guest => {
    console.log(`Dear ${newGuest}, would you like to join me for dinner`);
});   // in print: Muhammad Ibrahim can't make it to dinner.
//                 Dear Muhammad Waqas, would you like to join me for dinner
//                 Dear Muhammad Waqas, would you like to join me for dinner
//                 Dear Muhammad Waqas, would you like to join me for dinner.

// *Question 16:* More Guests: You've found a bigger dinner table, so there's room for more guests.
// Challenge Coding Qno:16
 let guests2: string[] = ["Muhammad Zubair", "Muhammad Jalil", "Muhammad Nawaz"];
console.log("Great news! I found a bigger dinner table!");
guests2.unshift("Owais Ahmed");
guests2.splice(guests2.length / 2, 0, "Ehsan Ayyub");
guests2.push("Syed Raees Shah");

guests2.forEach(guest2 => {
    console.log(`Dear ${guest2}, would you like to join me for dinner?`);
});   // in print: Great news! I found a bigger dinner table!
//                 Dear Owais Ahmed, would you like to join me for dinner?
//                 Dear Muhammad Zubair, would you like to join me for dinner?
//                 Dear Ehsan Ayyub, would you like to join me for dinner?
//                 Dear Muhammad Jalil, would you like to join me for dinner?
//                 Dear Muhammad Nawaz, would you like to join me for dinner?
//                 Dear Syed Raees Shah, would you like to join me for dinner?

// *Question 17:* Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
// Challenge Coding Qno:17
console.log("Unfortunately, I can only invite three people for dinner.");

while (guests2.length > 2) {
    let removedGuest = guests2.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests1.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests2.splice(0, guests2.length);
console.log(guests2); // Shows an empty list
// in print:  Unfortunately, I can only invite two people for dinner.
//            Sorry, Syed Raees Shah, I can't invite you to dinner.
//            Sorry, Muhammad Nawaz, I can't invite you to dinner.
//            Sorry, Muhammad Jalil, I can't invite you to dinner.
//            Sorry, Ehsan Ayyub, I can't invite you to dinner.
//            Dear Muhammad Shakil, you're still invited to dinner.
//            Dear Muhammad Ibrahim, you're still invited to dinner.
//            Dear Muhammad Raof, you're still invited to dinner.

//*Question 18:* Seeing the World: Think of at least five places you’d like to visit.
// Challenge Coding Qno:18

let places: string[] = ["Peshawer", "Kalam", "Sawat", "Malakund", "Kumrat"];

console.log("Original order:", places); // in print:   [ 'Peshawer', 'Kalam', 'Sawat', 'Malakund', 'Kumrat' ]

console.log("Alphabetical order:", [...places].sort()); // in print:    [ 'Kalam', 'Kumrat', 'Malakund', 'Peshawer', 'Sawat' ]

console.log("Original order:", places); // in print:    [ 'Peshawer', 'Kalam', 'Sawat', 'Malakund', 'Kumrat' ]

console.log("Reverse alphabetical order:", [...places].sort().reverse()); // in print:   [ 'Sawat', 'Peshawer', 'Malakund', 'Kumrat', 'Kalam' ] 

console.log("Original order:", places); // in print:    [ 'Peshawer', 'Kalam', 'Sawat', 'Malakund', 'Kumrat' ]

places.reverse();
console.log("Reversed order:", places); // in print:    [ 'Sawat', 'Peshawer', 'Malakund', 'Kumrat', 'Kalam' ]

places.reverse();
console.log("Original order:", places); // in print:    [ 'Peshawer', 'Kalam', 'Sawat', 'Malakund', 'Kumrat' ]

places.sort();
console.log("Alphabetical order:", places); // in print:    [ 'Kalam', 'Kumrat', 'Malakund', 'Peshawer', 'Sawat' ]

places.reverse();
console.log("Reverse alphabetical order:", places); // in print:    [ 'Sawat', 'Peshawer', 'Malakund', 'Kumrat', 'Kalam' ]

//*Question 19:* Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
// Challenge Coding Qno:19

let guest1:string [] = ["Muhammad Shakil", "Muhammad Ibrahim","Muhammad Raof","Muhammad Mansoor","Owais Baloch"];
console.log(`I am inviting ${guest1.length} people to dinner`);// Output : 

// *Question 20:* Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Challenge Coding Qno:20

let countries:string [] = ["Makkah","Madina","Misr","Yamun"];
console.log("I want to going and visit for Ziyarah in these Countries", countries); // Output : 

// *Question 21:* Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Challenge Coding Qno:21

let book: { title:string; author:string; yearPublished:number;} = {
    title: "Hidayah",
    author: "Abdullah Ibn-e-Masuood",
    yearPublished: 911
};
console.log(`book info: ${book.title}, by ${book.author}, published in ${book.yearPublished}`); // Output : 

// *Question 22:* Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
// Challenge Coding Qno:22

let friends:string [] = ["Owais Ahmed","Ehsan Ayyub","Taimour"];
console.log(friends[3]); // Output : undefined
friends[2] = "Taimour";

// *Question 23:* Conditional Tests: Write a series of conditional tests. Predict the results of each test.
// Challenge Coding Qno:23

let car = `Honda`;
console.log("is car == `Honda`? I Pridict true."); // Output : is car == `Honda`? I Pridict true. 
console.log(car == `Honda`); // Output :  true

console.log("is car == `toyota`? I Pridict false."); // Output : is car == `toyota`? I Pridict false.
console.log(car == `toyota`); // Output :  false

// *Question 24:* More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
// Challenge Coding Qno:24

// Equality with Strings
console.log("Testing equality with Strings:");
console.log(book == book); // Output :  true
console.log("book == Book"); // Output :  false

// Using the lower case function
console.log("Testing with lower case:");  // Output : Testing with lower case:
console.log("Apple".toLowerCase() == "apple"); // Output :  true

// Numerical tests
console.log("Numerical tests:");
console.log(30 > 20); // Output : True
console.log(20 < 10); // Output : False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':"); // Output : Tests with 'and' and 'or':
console.log(true && false); // Output :  False
console.log(true || false); // Output :  True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry",]; 
console.log("Is 'apple' in fruits?");   // Output : Is 'apple' in fruits?  
console.log(fruits.includes("apple"));  // Output : True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // Output : True

let fruits1 = ["apple", "banana", "cherry","mango"]; 
console.log("Is 'mango' not in fruits?");
console.log(!fruits1.includes("mango")); // Output : false

// *Question 25:* Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.
// Challenge Coding Qno:25

// Version that passes:
let ball_colour = "red";
if (ball_colour == "red") {
    console.log("You just played in Cricket ground!"); // Output : You just played in Cricket ground!
};
// Version that fails (no output):
let pen_colour = "red";
if (ball_colour == "green") {
    console.log("You just played in street!"); // Output : no output
};

// *Question 26:* Alien Colors #2: Choose a color for an alien, then write an if-else chain.
// Challenge Coding Qno:26

// Version that runs the if block:
let book_colour = "white";
if (book_colour == "white") {
    console.log("You just read and learn!"); // Output : You just read and learn!
} else {
    console.log("You just close that!");
}
// Version that runs the else block:
let book1_colour = "white";
if (book1_colour == "black") {
    console.log("You just read and learn!"); // Output : You just close that!
} else {
    console.log("You just close that!");
}

// *Question 27:* Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
// Challenge Coding Qno:27

// white book version:
let book2_colour = "white";
if (book2_colour == "white") {
    console.log("You just read and learn!"); // Output : You just read and learn!
} else if (book2_colour == "black"){
    console.log("You just close that!");
} else if (book2_colour == "red"){
    console.log("You just give your own friend!");
} 

// black book version:
let book3_colour = "black";
if (book3_colour == "white") {
    console.log("You just read and learn!");
} else if (book3_colour == "black"){
    console.log("You just close that!");  // Output : You just close that!
} else if (book3_colour == "red"){
    console.log("You just give your own friend!");
}

// red book version:
let book4_colour = "red";
if (book4_colour == "white") {
    console.log("You just read and learn!");
} else if (book4_colour == "black"){
    console.log("You just close that!");  // Output : You just close that!
} else if (book4_colour == "red"){
    console.log("You just give your own friend!");  // Output : You just give your own friend!
}

// *Question 28:* Stages of Life: Determine a person’s life stage with an if-else chain.
// Challenge Coding Qno:28

let age:number = 30
if ( age < 2){
    console.log("The Person is a Baby.");
} else if (age < 5){
    console.log("The Person is a toddler.");
} else if (age < 12){
    console.log("The Person is a kid.");
} else if (age < 18){
    console.log("The Person is a teenger.");
} else if (age < 65){
    console.log("The Person is an adult.");  // Output : The Person is an adult.
} else {
    console.log("The Person is an elder.");
}

// *Question 29:* Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included
// Challenge Coding Qno:29

let favorite_fruits: string[] = ["Mangoes", "Oranges", "Apples"];

if (favorite_fruits.includes("Mangoes")) {
    console.log("Its a King of all fruits!");  // Output : Its a King of all fruits!
}
if (favorite_fruits.includes("Apples")) {
    console.log("Babeis need Apples!");  // Output : Babeis need Apples!
}
if (favorite_fruits.includes("Oranges")) {
    console.log("You can make orange juice!");  // Output :You can make orange juice! 
}
// Continue with more fruits

// *Question 30:* Hello Admin: Greet users differently, especially 'admin'.
// Challenge Coding Qno:30

let usernames: string[] = ["admin", "Naseer Ahmed Sahb", "Shoukat Sahb", "Abdul Qadir Sahb", "Imran Sahb"];

usernames.forEach(username => {
    if (username === "admin") {
        console.log("Dear admin, please tell me about requirements for admission in internship?");//  Output : Dear admin, please tell me about requirements for admission in internship?
    } else {
        console.log(`Hello ${username}, nice to meet you`);  // Output : Hello Naseer Ahmed Sahb, nice to meet you
                                                             // Output :     Hello Shoukat Sahb, nice to meet you
                                                             // Output :    Hello Abdul Qadir Sahb, nice to meet you
                                                             // Output : Hello Imran Sahb, nice to meet you
    }
});

// *Question 31:* No Users: Ensure your user list isn’t empty.
// Challenge Coding Qno:31

let usernames1: string[] = [];

if (usernames1.length === 0) {
    console.log("We need to pray five times in any day!");  // Output : We need to to pray five times in any day!
} else {
    console.log("Naseer Ahmed Sahb", "Shoukat Sahb", "Abdul Qadir Sahb", "Imran Sahb")  // Output : 
}
// Removing all usernames ensures the message "We need to pray five times in any day!" is printed.

// *Question 32:* Checking Usernames: Ensure uniqueness in usernames.
// Challenge Coding Qno:32

let current_users: string[] = ["shakeel", "admin", "zubair", "taimoor", "faheem"];
let new_users: string[] = ["Mustufa", "Zeshan", "owais", "admin", "Ibrahim"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to explain work of every newUser.`);   // Output : admin will need to explain work of every newUser.
    } else {
        console.log(`${newUser} is available.`);  // Output : Mustufa is available.
                                                  // Output :   Zeshan is available.
                                                  // Output :  owais is available.
                                                  // Output :   Ibrahim is available.
    }
});

// *Question 33:* Ordinal Numbers: Display numbers with their ordinal suffixes.
// Challenge Coding Qno:33

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);  // Output :   1st
                                        // Output :   2nd
                                        // Output :   3rd
                                        // Output :   4th
                                        // Output :   5th
                                        // Output :   6th
                                        // Output :   7th
                                        // Output :   8th
                                        // Output :   9th
});

// *Question 34:* Pizzas: Share your favorite pizzas and express your love for them.
// Challenge Coding Qno:34

let pizzas: string[] = ["California", "Subway", "kabab Bakers"];

pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);// Output: I like California pizza.
                                          // Output:  I like Subway pizza.
                                          // Output:  I like kabab Bakers pizza.
});
console.log("I really love pizza!");  // Output : 

// *Question 35:* Animals: Highlight animals with a common trait.
// Challenge Coding Qno:35

let animals: string[] = ["Lion", "Wolf", "Tiger"];

animals.forEach(animal => {
    console.log(`A ${animal} is a wild animal.`);  // Output : A Lion is a wild animal.
                                                   // Output : A Wolf is a wild animal.
                                                   // Output : A Tiger is a wild animal.
});
console.log("Any of these animals would make a great pet!");  // Output : Any of these animals would make a great pet!

// *Question 36:* T-Shirt: Create a function for customizing t-shirts.
// Challenge Coding Qno:36

function make_shirt(size: string, message: string) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);  // Output : Making a medium size t-shirt with the message "Full-Stack Dev" printed on it.
}

make_shirt("medium size", "Full-Stack Dev");

// *Question 37:* Large Shirts: Default values in make_shirt().
// Challenge Coding Qno:37

function make_shirt1(size: string = "large", message: string = "TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);  // Output : Making a large t-shirt with the message "TypeScript" printed on it.
                                                                                           // Output : MMaking a medium t-shirt with the message "Javascript" printed on it.
                                                                                           // Output : MMaking a small t-shirt with the message "Python" printed on it. 
}

make_shirt1(); // Default large and message
make_shirt1("medium" , "Javascript"); // Custom message, medium size
make_shirt1("small", "Python"); // Custom message, small size

// *Question 38:* Cities: Describing cities with a function.
// Challenge Coding Qno:38

function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);  // Output : Karachi is in Pakistan.
                                               // Output : Islamabad is in Pakistan.
                                               // Output : Peshawer is in KPk.
}

describe_city("Karachi");
describe_city("Islamabad");
describe_city("Peshawer", "KPk");

// *Question 39:* City Names: Formatting city-country pairs.
// Challenge Coding Qno:39

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Madina", "Saudia Arabia"));  // Output : Madina", "Saudia Arabia 
console.log(city_country("Queta", "Pakistan"));  // Output : Queta", "Pakistan
console.log(city_country("Baghdaad", "Afghanistan"));  // Output : Baghdaad", "Afghanistan

// *Question 40:* Album: Create objects for music albums.
// Challenge Coding Qno:40

function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title , tracks};
    if (tracks) {
        // album:['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));

// *Question 41:* Magicians: Display magician names from an array.
// Challenge Coding Qno:41

let naatKhuwans: string[] = ["Owais Raza Qadri", "Khawar Naqshbandi", "Bilal Qadri"];

function show_naatKhuwans(naatKhuwans: string[]) {
    naatKhuwans.forEach(naatKhuwans => {
        console.log(naatKhuwans);
    });
}

show_naatKhuwans(naatKhuwans);

// *Question 42:* Great Magicians: Add "the Great" to magician names.
// Challenge Coding Qno:42

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

// make_great(magicians); // Modifies the original array
// show_magicians(magicians); // Shows modified names

// *Question 43:* Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
// Challenge Coding Qno:43

// let magicians: string[] = ["Alice", "David", "Chris"];

// function make_great(magicians: string[]): string[] {
//     let greatMagicians = [];
//     magicians.forEach(magician => {
//         greatMagicians.push(`${magician} the Great`);
//     });
//     return greatMagicians;
// }

// let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
// console.log("Original magicians:");
// show_magicians(magicians); // Shows original names
// console.log("Great magicians:");
// show_magicians(greatMagicians); // Shows modified names

// *Question 44:* Sandwiches: Summarize sandwich orders with varying ingredients.
// Challenge Coding Qno:44

function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");


// *Question 45:* Cars: Create detailed car objects with flexible properties.
// Challenge Coding Qno:44

function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    // options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
