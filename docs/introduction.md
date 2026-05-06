# Introduction to JavaScript

## What is JavaScript?

Welcome to the world of programming! If you have zero experience in coding, you are in the right place. 

Think of a website like a house:
- **HTML** is the structure (the walls and rooms).
- **CSS** is the design (the paint and decorations).
- **JavaScript** is the electricity and plumbing. It makes the house "alive" and interactive!

JavaScript is a powerful language used by most modern web browsers. It allows you to create dynamic actions on websites, like clicking a button to show a popup, animating images, or checking if a password is correct.

## The Console: Your Developer Tool

When you write code, a lot of the work the computer does is invisible. But what if you want to see what the computer is doing? 

That's where the **console** comes in! The console is a hidden panel in your web browser that developers use to see messages and check for errors. 

In JavaScript, we use a command called `console.log()` to print messages to this hidden panel. Whatever you put inside the parentheses `()` will show up on the screen.

```js
// This will print the number 5 to the console
console.log(5);

// This will print a greeting
console.log('Hello, world!');
```

*Note: You might notice the semicolon `;` at the end. Think of it like a period at the end of a sentence. It tells the computer that your instruction is finished!*

## Comments: Notes for Humans

Sometimes you want to leave a note in your code for yourself or other people, but you don't want the computer to read it. These notes are called **comments**. The computer completely ignores them!

There are two ways to write comments:

**1. Single-line comment:** Use two forward slashes `//`. Everything after them on that line is ignored.

```js
// This is a note for me. The computer won't read this!
console.log(10); 
```

**2. Multi-line comment:** Use `/*` to start and `*/` to end. This is great for longer notes.

```js
/*
  This is a long note.
  It can take up multiple lines.
  None of this will be executed by the computer!
*/
```

## Data Types: The Kinds of Information

In real life, we deal with different kinds of information: words, numbers, and yes/no answers. Programming is exactly the same! 

In JavaScript, we classify information into different **Data Types**. Here are the most basic and important ones for beginners:

- **Number**: Any number, with or without decimals. Example: `4`, `15`, `23.42`.
- **String**: Any text, like letters, words, or sentences. You MUST wrap strings in quotes so the computer knows it's text. Example: `'Hello'`, `"I love coding"`.
- **Boolean**: This is a simple "on" or "off" switch. It only has two possible values: `true` (yes) or `false` (no). Do not use quotes for booleans!
- **Null**: This simply means "nothing" or "empty" on purpose.
- **Undefined**: This means a value hasn't been assigned yet. The computer knows something exists, but doesn't know what it is.

```js
console.log('This is a String because it has quotes!');
console.log(40); // This is a Number. No quotes!
console.log(true); // This is a Boolean.
```

## Math with Code (Arithmetic Operators)

Computers are essentially giant calculators. You can do math in JavaScript using basic symbols, called **operators**:

- Add: `+`
- Subtract: `-`
- Multiply: `*`
- Divide: `/`

```js
console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3
```

## Gluing Words Together (String Concatenation)

The `+` symbol isn't just for math! If you use `+` with **Strings** (text), it glues the words together. This is called **concatenation**.

```js
console.log('hi' + 'ya'); // Prints 'hiya'
console.log('I love ' + 'coding.'); // Prints 'I love coding.'
```

Notice the space after the word "love ". The computer glues text exactly as you write it, so if you want a space between words, you have to type it inside the quotes!

## Review

Let’s recap what you've learned:
- **JavaScript** makes websites interactive.
- Use `console.log()` to print messages and see what your code is doing.
- Write **comments** using `//` or `/* ... */` to leave notes that the computer ignores.
- The basic **Data Types** are Numbers, Strings (text in quotes), and Booleans (`true` or `false`).
- You can do math using `+`, `-`, `*`, and `/`.
- You can glue text (Strings) together using the `+` symbol.
