# Variables: Your Digital Boxes

## What is a Variable?

Imagine you are packing to move to a new house. You put your books in a box and write "Books" on the outside. Later, when you need a book, you don't look everywhere—you just find the box labeled "Books".

In programming, a **variable** is exactly that: a labeled box where we store information (data) inside the computer’s memory. We give the box a name so we can easily find and use that information later!

Variables let us store things like a user's name, a high score in a game, or a secret password.

## Creating and Using a Variable

To create a new box (variable) and put something inside it, we use the `SET` keyword in pseudo code.

```pseudo
SET my_name TO "Arya"
PRINT my_name
```
*(This will print: Arya)*

Let’s break down what just happened:
1. `SET` tells the computer we are making or updating a variable.
2. `my_name` is the label we wrote on our box.
3. `TO` tells the computer to put the data into the box.
4. `"Arya"` is the data (a String) that we stored inside.

The best part about variables is that they can "vary" (change)! You can change what's inside the box later:

```pseudo
SET favorite_food TO "Pizza"
PRINT favorite_food 
// Prints: Pizza

// Later on, we change our minds!
SET favorite_food TO "Tacos"
PRINT favorite_food 
// Prints: Tacos
```

## Constants

Sometimes, you want to store information that should **never** change. For example, your date of birth or the value of Pi. 

For things that must remain constant, we can specify that the box is locked.

```pseudo
CONSTANT my_birth_year TO 1995
PRINT my_birth_year
```

If you try to change a `CONSTANT`, the algorithm will fail because the data is protected.

## Variables and Math

Since variables are just boxes holding data, if they hold numbers, we can do math with them!

```pseudo
SET score TO 10
SET score TO score + 5 

PRINT score 
// Prints: 15
```

We tell the computer: "Take whatever is currently inside the `score` box (10), add 5 to it, and put the new result (15) back into the `score` box!"

## Review Variables

Let’s review what we learned:
- **Variables** are labelled boxes used to store data.
- Use `SET ... TO ...` to put data inside a variable.
- Variables can be updated or changed at any time in your algorithm.
- Use `CONSTANT ... TO ...` if the data should be locked and never change.
- You can do math with variables if they contain numbers.
