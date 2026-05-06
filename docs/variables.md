# Variables: Your Digital Boxes

## What is a Variable?

Imagine you are packing to move to a new house. You put your books in a box and write "Books" on the outside. Later, when you need a book, you don't look everywhere—you just find the box labeled "Books".

In programming, a **variable** is exactly that: a labeled box where we store information (data) inside the computer’s memory. We give the box a name so we can easily find and use that information later!

Variables let us store things like a user's name, a high score in a game, or a secret password.

## Creating a Variable with `let`

To create a new box (variable), we use a special word: `let`. This tells the computer, "Hey, let's create a new variable!"

```js
let myName = 'Arya';
console.log(myName); // This will print: Arya
```

Let’s break down what just happened:
1. `let` creates the variable.
2. `myName` is the label we wrote on our box.
3. `=` is how we put something inside the box.
4. `'Arya'` is the data (a String) that we stored inside.

The best part about `let` is that we can change what's inside the box later!

```js
let favoriteFood = 'Pizza';
console.log(favoriteFood); // Prints: Pizza

// Later on, we change our minds!
favoriteFood = 'Tacos';
console.log(favoriteFood); // Prints: Tacos
```

## Creating a Variable with `const`

Sometimes, you want to store information that should **never** change. For example, your date of birth. 

For things that must remain constant, we use the word `const` instead of `let`.

```js
const myBirthYear = 1995;
console.log(myBirthYear); // Prints: 1995
```

If you try to change a `const` variable, the computer will get angry and throw an error, protecting your data from being accidentally changed!

*Tip: If you know a value will change later (like a score in a game), use `let`. If it will stay the same forever, use `const`.*

## Variables and Math

Since variables are just boxes holding data, if they hold numbers, we can do math with them!

```js
let score = 10;
score = score + 5; 

console.log(score); // Prints: 15
```

Because adding to a score is so common in coding, JavaScript gives us a shortcut. Instead of writing `score = score + 5`, we can write `score += 5`.

```js
let lives = 3;
lives -= 1; // This is a shortcut for: lives = lives - 1
console.log(lives); // Prints: 2
```

We also have shortcuts for adding exactly 1 (`++`) or subtracting exactly 1 (`--`):

```js
let level = 1;
level++; // This adds exactly 1 to level
console.log(level); // Prints: 2
```

## Mixing Words and Variables

What if you want to say hello to a user, but you don't know their name until they log in? You can use variables and glue them together with text!

You can use the `+` symbol to join text and variables together:

```js
let myPet = 'cat';
console.log('I own a ' + myPet + '.'); 
// Prints: I own a cat.
```

## A Better Way: String Interpolation

Gluing text with the `+` symbol can get messy if you have a lot of variables. A newer and cleaner way to do this is called **String Interpolation**. 

Instead of normal quotes, you use **backticks** `` ` `` (usually found under the Esc key on your keyboard). Then, you put your variables inside `${ }`.

```js
let myCity = 'Paris';
let weather = 'sunny';

console.log(`I live in ${myCity} and it is very ${weather} today!`);
// Prints: I live in Paris and it is very sunny today!
```

This is much easier to read and write!

## Review Variables

Let’s review what we learned:
- **Variables** are labelled boxes used to store data.
- Use `let` if the data might change later.
- Use `const` if the data should be locked and never change.
- You can do math with variables if they contain numbers (`+=`, `-=`, `++`).
- You can mix text and variables together using the `+` symbol.
- A cleaner way to mix text and variables is using backticks `` ` `` and `${}`.
